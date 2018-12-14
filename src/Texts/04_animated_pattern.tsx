import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { transparentize } from 'polished'
import {
  DefaultContainer,
  ComponentProps,
  TextView,
  DEFAULT_PATTERN,
  Pattern
} from '~/Texts/common'
import { range, generateId, getURI } from '~/util'

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

type Props = ComponentProps & {
  fontSize?: number
  shadow: boolean
  color: string
  text: string
}

const RADIUS_MULTIPLIER = 1.7

type PatternProps = {
  pattern: Pattern
}

const PatternContent = ({ pattern }: PatternProps) => {
  const Circles = pattern
    .map(([radius, ...rest]) => [radius * RADIUS_MULTIPLIER, ...rest])
    .map(([radius, center_x, center_y], index) => (
      <Circle r={radius} cx={center_x} cy={center_y} key={index} />
    ))
  return <>{Circles}</>
}

const animationId = generateId()

const AnimatedPatternText = ({ color, text, shadow, fontSize }: Props) => (
  <DefaultContainer>
    <defs>
      <pattern
        id={animationId}
        patternUnits="objectBoundingBox"
        width="0.2"
        height="0.53"
      >
        <PatternGroup color={color} count={DEFAULT_PATTERN.length}>
          <PatternContent pattern={DEFAULT_PATTERN} />
        </PatternGroup>
      </pattern>
    </defs>
    <TextView
      shadow={shadow}
      fontSize={fontSize}
      color={color}
      fill={getURI(animationId)}
    >
      {text}
    </TextView>
  </DefaultContainer>
)

export default AnimatedPatternText
