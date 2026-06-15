type Falsy = '' | 0 | 0n | false | null | undefined

/**
 * isFalsy checks if a value is falsy.
 * A value is considered falsy if it is false, 0, 0n, '', null, or undefined.
 * Useful for type narrowing in conditional statements.
 * See isTruthy for the opposite of isFalsy.
 *
 * @param v value to check.
 * @returns {v is Extract<T, Falsy>} returns true if v is falsy or otherwise false.
 *
 * @example
 * ```ts
 * isFalsy(false) // true
 * isFalsy(0) // true
 * isFalsy(0n) // true
 * isFalsy('') // true
 * isFalsy(null) // true
 * isFalsy(undefined) // true
 * isFalsy(true) // false
 * isFalsy(1) // false
 * isFalsy('hello') // false
 * isFalsy([]) // false
 * isFalsy({}) // false
 * ```
 */
const isFalsy = <T>(v: T): v is Extract<T, Falsy> => !v

export type { Falsy }

export { isFalsy }
