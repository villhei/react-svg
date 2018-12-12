import * as React from 'react'
import { DefaultContainer, TextView } from '~/Texts/common'
import { generateId, getURI } from '~/util'

type Props = {
  fromColor: string
  toColor: string
  children: string
}

const gradientId = generateId()

const RadialGradientText = (props: Props) => {
  const { toColor, fromColor } = props
  return (
    <DefaultContainer>
      <defs>
        <radialGradient id={gradientId} cx='50%' cy='50%' r='100%'>
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
      <TextView fontSize='4.5em' fill={getURI(gradientId)}>
        {props.children}
      </TextView>
    </DefaultContainer>
  )
}

export default RadialGradientText
