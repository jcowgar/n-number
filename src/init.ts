/**
 * Validate a string against the FAA n-number rules.
 *
 * NOTE: Historic N-numbers are considered valid even though they are no longer issued.
 * These N-numbers start with NC, NX, NR or NL.
 *
 * @param nNumber string Number to check for validity
 *
 * @returns boolean true if valid, false if invalid
 */
export function isValid(nNumber: string): boolean {
  const rePositive = /^(N|NC|NX|NR|NL)[1-9]([0-9]{1,4}|[0-9]{1,3}[A-Z]|[0-9]{1,2}[A-Z]{2})$/;
  const reNegative = /[IO]/;

  return nNumber.match(rePositive) != null && nNumber.match(reNegative) == null;
}

/**
 * Determine if an N-number can be issued.
 *
 * Very similar to isValid but isValid will return true for historical N-numbers which
 * can no longer be issued. These N-numbers start with NC, NX, NR or NL. Only N-numbers
 * begining with N will be issued for new aircraft.
 *
 * @param nNumber Number to test for issuability
 * @returns boolean true if it can be issued otherwise false
 */
export function canBeIssued(nNumber: string): boolean {
  const reHistoricPrefixes = /^(NC|NX|NR|NL)/;

  return nNumber.match(reHistoricPrefixes) == null && isValid(nNumber);
}
