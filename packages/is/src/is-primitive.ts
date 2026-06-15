/**
 * Primitive type represents the primitive values.
 */
type Primitive = bigint | boolean | null | number | string | symbol | undefined

/**
 * isPrimitive checks if a value is a primitive.
 *
 * @param v value to check.
 * @returns {v is Primitive} returns true if the value is a primitive or otherwise false.
 *
 * @example
 * ```ts
 * isPrimitive(42) // true
 * isPrimitive('hello') // true
 * isPrimitive(true) // true
 * isPrimitive(null) // true
 * isPrimitive(undefined) // true
 * isPrimitive({}) // false
 * isPrimitive([]) // false
 * isPrimitive(() => {}) // false
 * ```
 */
const isPrimitive = (v: unknown): v is Primitive => v === null || (typeof v !== 'object' && typeof v !== 'function')

export { isPrimitive }
