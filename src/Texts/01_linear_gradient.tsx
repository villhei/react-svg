import * as React from 'react'
import {
  DefaultContainer,
  ComponentProps,
  TextView,
  getGradientStops
} from '~/Texts/common'
import { generateId, getURI } from '~/util'

type Props = ComponentProps & {
  colors: string[]
  opacities: number[]
  shadow: boolean
  text: string
  fontSize?: number
}

const gradientId = generateId()

const LinearGradientText = (props: Props) => {
  const stops = getGradientStops(props.colors, props.opacities)
  return (
    <DefaultContainer>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0%" y2="100%">
          {stops}
        </linearGradient>
      </defs>
      <TextView
        fontSize={props.fontSize}
        shadow={props.shadow}
        fill={getURI(gradientId)}
      >
        {props.text}
      </TextView>
    </DefaultContainer>
  )
}

export default LinearGradientText
