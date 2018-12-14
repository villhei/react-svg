import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { DefaultContainer, ComponentProps, TextView } from '~/Texts/common'
import { getURI, generateId } from '~/util'
import monoton from './Monoton-Regular.ttf'

const ANIM_SECONDS = 10
const LINE_LENGTH = 150
const LINE_GAP = 150

const strokeTextId = generateId()

const blurFilterId = generateId()

function getText(colors: string[], opacities: number[]): JSX.Element[] {
  const colorCount = colors.length
  const offset = (LINE_LENGTH + LINE_GAP) * colorCount

  const anim = keyframes`
    100% {
      stroke-dashoffset: -${offset};
    }
  `
  const Text = styled.text`
    @font-face {
      font-family: 'Monoton';
      src: url(${monoton});
    }
    stroke-width: 3;
    font-family: 'Monoton';
    fill: transparent;
    stroke-linejoin: round;
    stroke-dasharray: ${LINE_LENGTH} ${LINE_GAP};
    stroke-dashoffset: 0;
    animation: ${anim} ${ANIM_SECONDS}s infinite linear;
    ${colors.map((color, i) => {
      const n = i + 1
      return css`
        &:nth-child(${n}) {
          stroke: ${color};
        }
      `
    })}
  `
  return colors.map((_color, i) => (
    <Text
      as="use"
      strokeOpacity={opacities[i]}
      key={i}
      filter={i === 0 ? getURI(blurFilterId) : undefined}
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
    <defs>
      <filter id={blurFilterId}>
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      </filter>
    </defs>
    <symbol id={strokeTextId}>
      <TextView fontSize={fontSize} shadow={shadow} strokeWidth={strokeWidth}>
        {text}
      </TextView>
    </symbol>
    <g>{getText(colors, opacities)}</g>
  </DefaultContainer>
)

export default AnimatedStrokeMultiText
