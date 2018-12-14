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
  strokeWidth: number
  shadow: boolean
}

const animationId = generateId()

const AnimatedStrokeText = ({
  colors,
  opacities,
  text,
  fontSize,
  shadow,
  strokeWidth
}: Props) => (
  <DefaultContainer>
    <defs>
      <radialGradient id={animationId} cx="50%" cy="50%" r="100%">
        <animate
          attributeName="cx"
          values="0%;150%;-50%;0%"
          dur="5s"
          repeatCount="indefinite"
        />
        {getGradientStops(colors, opacities)}
      </radialGradient>
    </defs>
    <TextView
      strokeWidth={strokeWidth}
      fontSize={fontSize}
      shadow={shadow}
      fill="transparent"
      stroke={getURI(animationId)}
    >
      {text}
    </TextView>
  </DefaultContainer>
)

export default AnimatedStrokeText
