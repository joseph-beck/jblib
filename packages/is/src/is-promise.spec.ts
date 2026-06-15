import { describe, expect, it } from 'vitest'

import { isPromise } from './is-promise.js'

describe('is promise', () => {
  it('should return true for promises', () => {
    expect(
      isPromise({
        catch: () => {
          void 0
        },
        then: () => {
          void 0
        },
      }),
    ).toBe(true)
    expect(isPromise(Promise.resolve())).toBe(true)
  })

  it('should return false for non-promises', () => {
    expect(isPromise(123)).toBe(false)
    expect(isPromise({})).toBe(false)
    expect(isPromise([])).toBe(false)
    expect(isPromise(null)).toBe(false)
    expect(isPromise(undefined)).toBe(false)
  })
})
