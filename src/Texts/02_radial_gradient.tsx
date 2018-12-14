import * as React from 'react'
import {
  DefaultContainer,
  ComponentProps,
  TextView,
  getGradientStops
} from '~/Texts/common'
import { generateId, getURI } from '~/util'

type Props = ComponentProps & {
  fontSize?: number
  colors: string[]
  opacities: number[]
  text: string
  shadow: boolean
}

const gradientId = generateId()

const RadialGradientText = (props: Props) => {
  const { fontSize, colors, opacities, shadow } = props
  const stops = getGradientStops(colors, opacities)
  return (
    <DefaultContainer>
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="50%" r="100%">
          <animate
            attributeName="cx"
            values="0%;150%;-50%;0%"
            dur="5s"
            repeatCount="indefinite"
          />
          {stops}
        </radialGradient>
      </defs>
      <TextView shadow={shadow} fontSize={fontSize} fill={getURI(gradientId)}>
        {props.text}
      </TextView>
    </DefaultContainer>
  )
}

export default RadialGradientText
