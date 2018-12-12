import * as React from 'react'
import { DefaultContainer, TextView } from '~/Texts/common'
import { generateId, getURI } from '~/util'

type Props = {
  toColor: string
  fromColor: string
  children: string
}

const animationId = generateId()

const AnimatedStrokeText = ({ toColor, fromColor, children }: Props) => (
  <DefaultContainer>
    <defs>
      <radialGradient id={animationId} cx="50%" cy="50%" r="100%">
        <animate
          attributeName="cx"
          values="0%;150%;-50%;0%"
          dur="5s"
          repeatCount="indefinite"
        />
        <stop stopColor={fromColor} offset="0" />
        <stop stopColor={toColor} offset="100%" />
      </radialGradient>
    </defs>
    <TextView
      strokeWidth="4"
      shadow={true}
      fill="transparent"
      stroke={getURI(animationId)}
    >
      {children}
    </TextView>
  </DefaultContainer>
)

export default AnimatedStrokeText
