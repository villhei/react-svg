
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.svg`
  width: 600px;
  height: 200px;
`
const TextView = styled.text`
  font-size: 5rem;
  font-weight: 550;
`

type Props = {
  fromColor: string,
  toColor: string
  children: React.ReactNode
}

const LinearGradientText = (props: Props) => (
  <div>
    <Container viewBox='0 0 600 200'>
      <defs>
        <linearGradient id='gr-simple' x1='0' y1='0' x2='0%' y2='100%'>
          <stop stopColor={props.fromColor} offset='0%'/>
          <stop stopColor={props.toColor} offset='90%'/>
        </linearGradient>
      </defs>
      <TextView
        textAnchor='middle'
        x='50%'
        y='50%'
        fill='url(#gr-simple)'>
      {props.children}
      </TextView>
    </Container>
    </div>
)

export default LinearGradientText
