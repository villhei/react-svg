import styled from 'styled-components'

export const Container = styled.svg`
  width: 600px;
  height: 200px;
`

export type Pattern = Array<number[]>

export const DEFAULT_PATTERN: Pattern = [
  [10, 20, 20],
  [7, 50, 0],
  [11, 70, 30],
  [13, 50, 50],
  [7, 10, 50],
  [9, 30, 70],
  [11, 70, 70]
]
