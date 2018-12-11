import * as React from 'react'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { Container } from '~/Texts/common'

const Text = styled.text`
  font-size: 4.5rem;
  font-weight: 550;
  stroke-width: 0.5;
  stroke: ${props => props.color};
`
type SpotsProps = {
  color: string
  count: number
}

const makeChildStyles = (count: number) =>
  [1, 2, 3, 4, 5].map(
    value => css`
      & circle:nth-child(5n + ${value}) {
        fill: ${(props: SpotsProps) => transparentize(0.1, props.color)};
      }
    `
  )

const Pattern = styled.g`
  ${(props: SpotsProps) => makeChildStyles(props.count)}
`

const Circle = styled.circle`
  stroke-width: 5;
  stroke-opacity: 0.5;
  fill: transparent;
`

type Props = {
  color: string
  children: React.ReactNode
}

const RADIUS_MULTIPLIER = 1.7

type Pattern = Array<number[]>
const DEFAULT_PATTERN: Pattern = [
  [10, 20, 20],
  [7, 50, 0],
  [11, 70, 30],
  [13, 50, 50],
  [7, 10, 50],
  [9, 30, 70],
  [11, 70, 70]
]

type PatternProps = {
  pattern: Pattern
}

const PatternContent = ({ pattern }: PatternProps) => (
  <>
    {pattern
      .map(([radius, ...rest]) => [radius * RADIUS_MULTIPLIER, ...rest])
      .map(([radius, center_x, center_y], index) => (
        <Circle r={radius} cx={center_x} cy={center_y} key={index} />
      ))}
  </>
)

const PatternedText = ({ color, children }: Props) => (
  <div>
    <Container viewBox="0 0 600 200">
      <defs>
        <pattern
          id="spots"
          viewBox="0 0 80 80"
          patternUnits="userSpaceOnUse"
          width="80"
          height="80"
        >
          <Pattern color={color} count={DEFAULT_PATTERN.length}>
            <PatternContent pattern={DEFAULT_PATTERN} />
          </Pattern>
        </pattern>
      </defs>
      <Text
        textAnchor="middle"
        x="50%"
        y="50%"
        color={color}
        fill="url(#spots)"
      >
        {children}
      </Text>
    </Container>
  </div>
)

export default PatternedText
