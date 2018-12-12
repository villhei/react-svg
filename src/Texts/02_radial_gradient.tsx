import * as React from 'react'
import styled from 'styled-components'
import { DefaultContainer, TextView } from '~/Texts/common'

type Props = {
  fromColor: string
  toColor: string
  children: string
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
      <TextView fontSize='4.5em' fill='url(#gr-radial)'>
        {props.children}
      </TextView>
    </DefaultContainer>
  )
}

export default RadialGradientText
