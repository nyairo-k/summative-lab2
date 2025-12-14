import { checkAnswer } from '../src/lib/game.js'

describe('checkAnswer', () => {
  test('returns true for correct answer', () => {
    expect(checkAnswer('Command Line Interface', 'Command Line Interface')).toBe(true)
  })

  test('returns false for incorrect answer', () => {
    expect(checkAnswer('Common Language Interpreter', 'Command Line Interface')).toBe(false)
  })
})
