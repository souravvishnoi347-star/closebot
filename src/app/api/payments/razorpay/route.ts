import { NextResponse } from 'next/server'
import crypto from 'crypto'
import { createClient } from '@supabase/supabase-js'

function supabaseAdmin() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(req: Request) {
  try {
    const bodyText = await req.text()
    const signature = req.headers.get('x-razorpay-signature')

    if (!signature) {
      return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
    }

    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || ''

    const expectedSignature = crypto
      .createHmac('sha256', secret)
      .update(bodyText)
      .digest('hex')

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    const payload = JSON.parse(bodyText)

    // Handle payment.captured or payment_link.paid
    if (payload.event === 'payment_link.paid' || payload.event === 'payment_link.partially_paid') {
      const paymentLinkObj = payload.payload.payment_link.entity
      const referenceId = paymentLinkObj.reference_id

      if (!referenceId) {
        return NextResponse.json({ success: true }) // Not ours
      }

      // Update the DB
      const { data: updatedLink, error: updateError } = await supabaseAdmin()
        .from('payment_links')
        .update({
          status: 'paid',
          metadata: paymentLinkObj,
          updated_at: new Date().toISOString()
        })
        .eq('id', referenceId)
        .select('*, profiles(id), contacts(id, phone, name)')
        .single()

      if (updateError || !updatedLink) {
        console.error('[razorpay-webhook] Error updating payment link:', updateError)
        return NextResponse.json({ error: 'Database error' }, { status: 500 })
      }

      // TODO: We could send a WhatsApp confirmation here
      // But we need the whatsapp_config for this user
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[razorpay-webhook] Error processing webhook:', err)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
