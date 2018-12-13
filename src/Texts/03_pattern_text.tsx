import * as React from 'react'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import {
  DefaultContainer,
  TextView,
  Pattern,
  DEFAULT_PATTERN
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
      }
    `
  )

const GPattern = styled.g`
  ${(props: SpotsProps) => makeChildStyles(props.count)}
`

const Circle = styled.circle`
  stroke-width: 5;
  stroke-opacity: 0.5;
  fill: transparent;
`

type Props = {
  fontSize: number
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

const patternId = generateId()

const PatternedText = ({ fontSize, shadow, color, text }: Props) => (
  <DefaultContainer>
    <defs>
      <pattern
        id={patternId}
        patternUnits="objectBoundingBox"
        width="0.2"
        height="0.53"
      >
        <GPattern color={color} count={DEFAULT_PATTERN.length}>
          <PatternContent pattern={DEFAULT_PATTERN} />
        </GPattern>
      </pattern>
    </defs>
    <TextView
      fontSize={fontSize}
      shadow={shadow}
      color={color}
      fill={getURI(patternId)}
    >
      {text}
    </TextView>
  </DefaultContainer>
)

export default PatternedText
