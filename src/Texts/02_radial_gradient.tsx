import * as React from 'react'
import styled from 'styled-components'
import { DefaultContainer } from '~/Texts/common'

const Text = styled.text`
  font-size: 4rem;
  font-weight: 550;
`

type Props = {
  fromColor: string
  toColor: string
  children: React.ReactNode
}

const RadialGradientText = (props: Props) => {
  const { toColor, fromColor } = props
  return (
    <DefaultContainer>
      <defs>
        <radialGradient id='gr-radial' cx='50%' cy='50%' r='100%'>
          <animate
            attributeName='cx'
            values='0%;150%;-50%;0%'
            dur='5s'
            repeatCount='indefinite'
          />
          <stop stopColor={toColor} offset='0' />
          <stop stopColor={fromColor} offset='100%' />
        </radialGradient>
      </defs>
      <Text
        textAnchor='middle'
        x='50%'
        y='50%'
        dy='.35em'
        fill='url(#gr-radial)'
      >
        {props.children}
      </Text>
    </DefaultContainer>
  )
}

export default RadialGradientText
