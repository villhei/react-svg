import * as React from 'react'
import styled from 'styled-components'
import { DefaultContainer, TextView } from '~/Texts/common'

const Text = styled.text`
  font-size: 4.5rem;
  stroke-width: 2;
  fill: transparent;
  font-weight: 550;
`

type Props = {
  toColor: string
  fromColor: string
  children: string
}

const AnimatedStrokeText = ({ toColor, fromColor, children }: Props) => (
  <DefaultContainer>
    <defs>
      <radialGradient id='gradient' cx='50%' cy='50%' r='100%'>
        <animate
          attributeName='cx'
          values='0%;150%;-50%;0%'
          dur='5s'
          repeatCount='indefinite'
        />
        <stop stopColor={fromColor} offset='0' />
        <stop stopColor={toColor} offset='100%' />
      </radialGradient>
    </defs>
    <TextView
      fontSize='4.5em'
      shadow={true}
      fill='transparent'
      stroke='url(#gradient)'
    >
      {children}
    </TextView>
  </DefaultContainer>
)

export default AnimatedStrokeText
