/**
 * Phone-number validation helpers.
 *
 * `isDisposablePhone` checks whether a phone number belongs to a
 * known virtual / VoIP / temporary-number provider. These services
 * hand out numbers that expire after minutes or hours — exactly the
 * kind of thing spammers use to bypass SMS verification.
 *
 * The check is prefix-based: many virtual-number providers use
 * recognisable country-code + prefix ranges. We also maintain a
 * small set of exact numbers found in public "free SMS" directories.
 */

/**
 * Known virtual / VoIP prefixes. Each entry is a country-code +
 * prefix that maps to bulk-SMS or virtual-number pools.
 *
 * Sources: Twilio prefix lists, TextNow/Google Voice known ranges,
 * community blocklists.
 */
const VIRTUAL_PREFIXES = [
  // Google Voice (US)
  '+1900',
  // Premium-rate / shared-cost (often abused)
  '+44870', '+447',   // UK premium
  '+33890',           // France premium
  // TextNow / 2ndLine / Burner common US area codes
  // (These are legitimate area codes too — only block if you're sure.
  //  Commented out by default; enable selectively.)
  // '+1202', '+1213', etc.
]

/**
 * Known temp-SMS website numbers. These rotate, so this list is a
 * best-effort snapshot. Update periodically.
 */
const KNOWN_TEMP_NUMBERS = new Set([
  // Add specific numbers found on receive-sms-free.cc, sms24.me, etc.
  // e.g. '+14155552671',
])

/**
 * Normalise a phone string to digits-only (with leading +).
 */
function normalise(phone: string): string {
  // Keep only digits and leading +
  return phone.replace(/[^\d+]/g, '')
}

/**
 * Returns `true` when the phone number looks like it belongs to a
 * virtual / temporary number service.
 */
export function isDisposablePhone(phone: string): boolean {
  const n = normalise(phone)
  if (!n) return false

  // Check exact matches
  if (KNOWN_TEMP_NUMBERS.has(n)) return true

  // Check prefix matches
  for (const prefix of VIRTUAL_PREFIXES) {
    if (n.startsWith(prefix)) return true
  }

  return false
}

/**
 * Validates that a phone number has a reasonable structure:
 * - Starts with + or digits
 * - Has 7–15 digits (E.164 range)
 * - No letters or special chars beyond leading +
 */
export function isValidPhoneFormat(phone: string): boolean {
  const n = normalise(phone)
  // E.164: + followed by 7-15 digits, or just 7-15 digits
  const re = /^\+?\d{7,15}$/
  return re.test(n)
}

/**
 * Validates an Indian phone number specifically.
 * Indian numbers: +91 followed by 10 digits starting with 6-9
 */
export function isValidIndianPhone(phone: string): boolean {
  const n = normalise(phone)
  // With country code
  if (/^\+?91[6-9]\d{9}$/.test(n)) return true
  // Without country code (10 digits starting with 6-9)
  if (/^[6-9]\d{9}$/.test(n)) return true
  return false
}
