import * as React from 'react'
import styled from 'styled-components'
import { DefaultContainer } from '~/Texts/common'

const Text = styled.text`
  font-size: 4.5rem;
  stroke-width: 2;
  fill: transparent;
  font-weight: 550;
`

type Props = {
  toColor: string
  fromColor: string
  children: React.ReactNode
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
    <Text
      textAnchor='middle'
      x='50%'
      y='50%'
      dy='.35em'
      stroke='url(#gradient)'
    >
      {children}
    </Text>
  </DefaultContainer>
)

export default AnimatedStrokeText
