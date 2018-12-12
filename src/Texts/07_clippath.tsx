import * as React from 'react'
import styled from 'styled-components'
import { DefaultContainer } from '~/Texts/common'

type Props = {
  fromColor: string
  toColor: string
  children: string
}

const Text = styled.text`
  font-size: 5em;
`

const TextStroke = styled.text`
  stroke: white;
  fill: none;
  stroke-width: 10;
`

const TextShadow = styled.text`
  background: rgba(0, 0, 0, 4);
  transform: translate(1em, 1em);
`

const FilledCircle = styled.circle`
  fill: url(#p-lines);
  transform-origin: 400px 150px;
  transform: rotate(32deg);
`
const ClipPathText = ({ fromColor, toColor, children }: Props) => (
  <DefaultContainer>
    <symbol id='stroke-text'>
      <Text textAnchor='middle' x='50%' y='50%' dy='.35em'>
        {children}
      </Text>
    </symbol>

    <clipPath id='clip-path-text'>
      <Text textAnchor='middle' x='50%' y='50%' dy='.35em'>
        {children}
      </Text>
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

    <TextShadow as='use' xlinkHref='#stroke-text' />
    <TextStroke as='use' xlinkHref='#stroke-text' />

    <g clip-path='url(#clip-path-text)'>
      <circle r='70%' cx='300' cy='150' className='c-fill--color' />
      <FilledCircle r='70%' cx='300' cy='150' />
    </g>
  </DefaultContainer>
)

export default ClipPathText
