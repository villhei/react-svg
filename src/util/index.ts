import uuid from 'uuid'

export function range(start: number, finish: number): Array<number> {
  const length = Math.abs(finish - start)
  if (length == 0) {
    return []
  }
  let result: Array<number> = new Array(length)
  const direction: number = start < finish ? 1 : start === finish ? 0 : -1

  for (
    var i = 0, value = start;
    i < length + 1;
    i = i + 1, value = value + direction
  ) {
    result[i] = value
  }

  return result
}

export const generateId: () => string = uuid.v4

export const getURI = (id: string) => `url(#${id})`
