/**
 * isDefined checks if a value is not null or undefined.
 *
 * @param v value to check.
 * @returns {v is T} returns true if the value is defined (not null or undefined) or otherwise false.
 *
 * @example
 * ```ts
 * isDefined(42) // true
 * isDefined('hello') // true
 * isDefined(null) // false
 * isDefined(undefined) // false
 * ```
 */
const isDefined = <T>(v: null | T | undefined): v is T => v !== null && v !== undefined

export { isDefined }
