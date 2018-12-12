import * as React from 'react'
import { DefaultContainer, TextView } from '~/Texts/common'
import { generateId, getURI } from '~/util'

type Props = {
  fromColor: string
  toColor: string
  children: string
  fontSize?: string
}

const gradientId = generateId()

const LinearGradientText = (props: Props) => (
  <DefaultContainer>
    <defs>
      <linearGradient id={gradientId} x1="0" y1="0" x2="0%" y2="100%">
        <stop stopColor={props.fromColor} offset="0%" />
        <stop stopColor={props.toColor} offset="90%" />
      </linearGradient>
    </defs>
    <TextView fontSize={props.fontSize} shadow={true} fill={getURI(gradientId)}>
      {props.children}
    </TextView>
  </DefaultContainer>
)

export default LinearGradientText
