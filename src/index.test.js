import {getMonth} from './index.js'

describe('tests for getMonth function', () => {
    const month = 4;

    it('should return correct month name', () => {
      expect(getMonth(month)).toBe('апрель')
    })
    it('should return message if argument is less then 1', () => {
      expect(getMonth(0)).toBe('неизвестно')
    })
    it('should return message if argument is more then 12', () => {
      expect(getMonth(13)).toBe('неизвестно')
    })
    it('should return message if argument is string', () => {
      expect(getMonth('май')).toBe('неизвестно')
    })
});