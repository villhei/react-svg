import * as React from 'react'
import styled from 'styled-components'
import { DefaultContainer, TextView } from '~/Texts/common'

type Props = {
  fromColor: string
  toColor: string
  children: string
}

const LinearGradientText = (props: Props) => (
  <DefaultContainer>
    <defs>
      <linearGradient id='gr-simple' x1='0' y1='0' x2='0%' y2='100%'>
        <stop stopColor={props.fromColor} offset='0%' />
        <stop stopColor={props.toColor} offset='90%' />
      </linearGradient>
    </defs>
    <TextView shadow={true} fill='url(#gr-simple)'>
      {props.children}
    </TextView>
  </DefaultContainer>
)

export default LinearGradientText
