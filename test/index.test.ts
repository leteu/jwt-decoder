import { describe, expect, test } from 'vitest'
import { decodeToken } from '../src/index'

describe('sum module', () => {
  test('full jwt', () => {
    expect(
      decodeToken(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
      )
    ).toStrictEqual({
      'sub': '1234567890',
      'name': 'John Doe',
      'iat': 1516239022,
    })
  })

  test('full jwt with korean', () => {
    expect(
      decodeToken(
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Iu2Zjeq4uOuPmSIsImlhdCI6MTUxNjIzOTAyMn0.JR78PN06u-EV1UiYFF9begoTDyUowGwlPxynr6oMrMg',
      )
    ).toStrictEqual({
      'sub': '1234567890',
      'name': '홍길동',
      'iat': 1516239022
    })
  })

  test('body jwt with korean', () => {
    expect(
      decodeToken(
        'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Iu2Zjeq4uOuPmSIsImlhdCI6MTUxNjIzOTAyMn0',
      )
    ).toStrictEqual({
      'sub': '1234567890',
      'name': '홍길동',
      'iat': 1516239022
    })
  })
})
