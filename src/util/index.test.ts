import { range } from '~/util'

describe('range', () => {
  it('should generate [] with range(0, 0)', () => {
    expect(range(0, 0)).toEqual([])
  })

  it('should generate [1,2,3,4] with range(1, 5)', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4])
  })

  it('should generate [5,4,3,2,1] with range(5, 1)', () => {
    expect(range(5, 1)).toEqual([5, 4, 3, 2, 1])
  })
})
