import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { transparentize } from 'polished'
import { DefaultContainer, DEFAULT_PATTERN, Pattern } from '~/Texts/common'
import { range } from '~/util'

const Text = styled.text`
  font-size: 4.5rem;
  font-weight: 550;
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
        stroke: ${(props: SpotsProps) =>
          transparentize(index * 0.05 + 0.1, props.color)};
        animation-delay: ${(index * 2) / count} * s;
      }
    `
  )

const PatternGroup = styled.g`
  ${(props: SpotsProps) => makeChildStyles(props.count)}
`

const anim = keyframes`
  50% {
    stroke-width: 15;
  }
`

const Circle = styled.circle`
  animation: ${anim} 3s infinite;
  stroke-width: 0;
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

const AnimatedPatternText = ({ color, children }: Props) => (
  <DefaultContainer>
    <defs>
      <pattern
        id='spots-animated'
        viewBox='0 0 80 80'
        patternUnits='userSpaceOnUse'
        width='80'
        height='80'
      >
        <PatternGroup color={color} count={DEFAULT_PATTERN.length}>
          <PatternContent pattern={DEFAULT_PATTERN} />
        </PatternGroup>
      </pattern>
    </defs>
    <Text
      textAnchor='middle'
      x='50%'
      y='50%'
      dy='.35em'
      color={color}
      fill='url(#spots-animated)'
    >
      {children}
    </Text>
  </DefaultContainer>
)

export default AnimatedPatternText
