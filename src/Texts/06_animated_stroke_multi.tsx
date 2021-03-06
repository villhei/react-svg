import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { DefaultContainer, ComponentProps, TextView } from '~/Texts/common'
import { getURI, generateId } from '~/util'

const ANIM_SECONDS = 6
const LINE_LENGTH = 70
const LINE_GAP = 10

const strokeTextId = generateId()

function getText(colors: string[], opacities: number[]): JSX.Element[] {
  const colorCount = colors.length
  const space = LINE_LENGTH * (colorCount - 1) + LINE_GAP * colorCount
  const offset = (LINE_LENGTH + LINE_GAP) * colorCount
  const step = ANIM_SECONDS / colorCount

  const anim = keyframes`
    100% {
      stroke-dashoffset: -${offset};
    }
  `
  const Text = styled.text`
    stroke-width: 3;
    fill: transparent;
    stroke-linejoin: round;
    stroke-dasharray: ${LINE_LENGTH} ${space};
    stroke-dashoffset: 0;
    animation: ${anim} ${ANIM_SECONDS}s infinite linear;
    ${colors.map((color, i) => {
      const n = i + 1
      return css`
        &:nth-child(${n}) {
          stroke: ${color};
          animation-delay: -${step * n}s;
        }
      `
    })}
  `
  return colors.map((_color, i) => (
    <Text
      as="use"
      strokeOpacity={opacities[i]}
      key={i}
      xlinkHref={`#${strokeTextId}`}
    />
  ))
}

type Props = ComponentProps & {
  shadow: boolean
  fontSize?: number
  strokeWidth?: number
  colors: string[]
  opacities: number[]
  text: string
}

const AnimatedStrokeMultiText = ({
  shadow,
  colors,
  opacities,
  text,
  strokeWidth = 4,
  fontSize = 4
}: Props) => (
  <DefaultContainer>
    <symbol id={strokeTextId}>
      <TextView
        shadow={shadow}
        fontSize={fontSize}
        strokeWidth={strokeWidth}
        filter={getURI('global-shadow')}
      >
        {text}
      </TextView>
    </symbol>
    <g>{getText(colors, opacities)}</g>
  </DefaultContainer>
)

export default AnimatedStrokeMultiText
