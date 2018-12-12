import * as React from 'react'
import styled from 'styled-components'
import { DefaultContainer, TextView } from '~/Texts/common'

type Props = {
  fromColor: string
  toColor: string
  children: string
}

const TextStroke = styled.text`
  stroke: white;
  fill: none;
  stroke-width: 10;
`

const FilledCircle = styled.circle`
  fill: url(#p-lines);
  transform-origin: 400px 150px;
  transform: rotate(32deg);
`
const ClipPathText = ({ fromColor, toColor, children }: Props) => (
  <DefaultContainer>
    <symbol id='stroke-text'>
      <TextView>{children}</TextView>
    </symbol>

    <clipPath id='clip-path-text'>
      <TextView>{children}</TextView>
    </clipPath>

    <pattern
      id='p-lines'
      width='40'
      height='50'
      viewBox='0 0 40 50'
      patternUnits='userSpaceOnUse'
    >
      <rect width='100%' height='100%' fill={fromColor} />

      <g stroke={toColor} stroke-width='20'>
        <path d='M25,0 25,100' />
      </g>
    </pattern>

    <TextStroke as='use' xlinkHref='#stroke-text' />

    <g clipPath='url(#clip-path-text)'>
      <FilledCircle r='70%' cx='300' cy='150' />
    </g>
  </DefaultContainer>
)

export default ClipPathText
