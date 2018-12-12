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
  children: string
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

const PatternedText = ({ color, children }: Props) => (
  <DefaultContainer>
    <defs>
      <pattern
        id={patternId}
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
    <TextView shadow={true} color={color} fill={getURI(patternId)}>
      {children}
    </TextView>
  </DefaultContainer>
)

export default PatternedText
