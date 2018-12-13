import * as React from 'react'
import { DefaultContainer, TextView, getGradientStops } from '~/Texts/common'
import { generateId, getURI } from '~/util'

type Props = {
  fontSize?: number
  strokeWidth: number
  shadow: boolean
  colors: string[]
  text: string
}

const animationId = generateId()

const AnimatedStrokeText = ({
  colors,
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
        {getGradientStops(colors)}
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
