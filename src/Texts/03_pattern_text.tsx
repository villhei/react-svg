import * as React from 'react'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { Container, Pattern, DEFAULT_PATTERN } from '~/Texts/common'
import { range } from '~/util'

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
  range(1, count).map(
    (value, index) => css`
      & circle:nth-child(${count}n + ${value}) {
        fill: ${(props: SpotsProps) =>
          transparentize(index * 0.05 + 0.1, props.color)};
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
    <Container viewBox='0 0 600 200'>
      <defs>
        <pattern
          id='spots'
          viewBox='0 0 80 80'
          patternUnits='userSpaceOnUse'
          width='80'
          height='80'
        >
          <Pattern color={color} count={DEFAULT_PATTERN.length}>
            <PatternContent pattern={DEFAULT_PATTERN} />
          </Pattern>
        </pattern>
      </defs>
      <Text
        textAnchor='middle'
        x='50%'
        y='50%'
        color={color}
        fill='url(#spots)'
      >
        {children}
      </Text>
    </Container>
  </div>
)

export default PatternedText
