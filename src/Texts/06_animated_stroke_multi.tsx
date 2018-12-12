import * as React from 'react'
import styled, { css, keyframes } from 'styled-components'
import { DefaultContainer } from '~/Texts/common'
import { getURI, generateId } from '~/util'

const ANIM_SECONDS = 6
const LINE_LENGTH = 70
const LINE_GAP = 10

const strokeTextId = generateId()

function getText(colors: string[]): JSX.Element[] {
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
    font-size: 4.5rem;
    font-weight: 550;
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
    <Text as="use" key={i} xlinkHref={`#${strokeTextId}`} />
  ))
}
type Props = {
  colors: string[]
  children: React.ReactNode
}

const AnimatedStrokeMultiText = ({ colors, children }: Props) => (
  <DefaultContainer>
    <symbol id={strokeTextId}>
      <text
        textAnchor="middle"
        x="50%"
        y="50%"
        dy=".35em"
        filter={getURI('global-shadow')}
      >
        {children}
      </text>
    </symbol>
    <g>{getText(colors)}</g>
  </DefaultContainer>
)

export default AnimatedStrokeMultiText
