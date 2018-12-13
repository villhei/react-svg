import * as React from 'react'
import styled from 'styled-components'
import { DefaultContainer, TextView } from '~/Texts/common'
import { generateId, getURI } from '~/util'

type Props = {
  colors: [string, string, string]
  text: string
  strokeWidth?: number
  fontSize: number
  shadow: boolean
}

const strokeTextId = generateId()
const clipPathTextId = generateId()
const patternId = generateId()

const FilledCircle = styled.circle`
  fill: ${getURI(patternId)};
  transform-origin: 300px 75px;
  transform: rotate(32deg);
`

const ClipPathText = ({
  colors: [primaryColor, secondaryColor, strokeColor],
  text,
  shadow,
  strokeWidth,
  fontSize
}: Props) => {
  const TextStroke = styled.text`
    stroke: ${strokeColor};
    fill: none;
    stroke-width: ${strokeWidth};
  `
  return (
    <DefaultContainer>
      <symbol id={strokeTextId}>
        <TextView fontSize={fontSize} shadow={shadow}>
          {text}
        </TextView>
      </symbol>

      <clipPath id={clipPathTextId}>
        <TextView fontSize={fontSize}>{text}</TextView>
      </clipPath>

      <pattern
        id={patternId}
        width="0.1"
        height="0.1"
        viewBox="0 0 50 50"
        patternUnits="objectBoundingBox"
      >
        <rect width="100%" height="100%" fill={primaryColor} />

        <g stroke={secondaryColor} strokeWidth="20">
          <path d="M25,0 25,100" />
        </g>
      </pattern>

      <TextStroke as="use" xlinkHref={`#${strokeTextId}`} />

      <g clipPath={getURI(clipPathTextId)}>
        <FilledCircle r="100%" cx="300" cy="150" />
      </g>
    </DefaultContainer>
  )
}
export default ClipPathText
