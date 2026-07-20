import Razorpay from 'razorpay'

// Assuming env vars are RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET for the Voltchat Master Account
export const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
})

export interface CreatePaymentLinkParams {
  amount: number // in INR
  currency?: string
  description: string
  referenceId: string // The internal payment_link id
  customer: {
    name: string
    contact: string
    email?: string
  }
  linkedAccountId: string // Client's Razorpay Account ID (e.g. acc_...)
  commissionRate: number // e.g. 2.00 for 2%
  callbackUrl?: string
}

export async function createPaymentLink(params: CreatePaymentLinkParams) {
  const amountInPaise = Math.round(params.amount * 100)
  const commissionInPaise = Math.round(amountInPaise * (params.commissionRate / 100))
  const transferAmount = amountInPaise - commissionInPaise

  const payload: any = {
    amount: amountInPaise,
    currency: params.currency || 'INR',
    accept_partial: false,
    reference_id: params.referenceId,
    description: params.description,
    customer: {
      name: params.customer.name,
      contact: params.customer.contact,
      email: params.customer.email,
    },
    notify: {
      sms: false,
      email: false,
    },
    reminder_enable: false,
    // Razorpay Route split payment
    options: {
      checkout: {
        method: {
          netbanking: true,
          card: true,
          upi: true,
          wallet: true,
        },
      },
    },
    transfers: [
      {
        account: params.linkedAccountId,
        amount: transferAmount,
        currency: params.currency || 'INR',
        notes: {
          reference_id: params.referenceId,
        },
        on_hold: false,
      },
    ],
  }

  if (params.callbackUrl) {
    payload.callback_url = params.callbackUrl
    payload.callback_method = 'get'
  }

  return await razorpay.paymentLink.create(payload)
}
