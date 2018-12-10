import * as React from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

const Container = styled.svg`
  width: 600px;
  height: 200px;
`
const Text = styled.text`
  font-size: 4.5rem;
  font-weight: 550;
  stroke-width: .5;
  stroke: ${(props) => props.color};
`
type SpotsProps = {
  color: any
}

const Pattern = styled.g`
  & circle:nth-child(5n + 1) {
    fill: ${(props: SpotsProps) => transparentize(0.1, props.color)};
  }
  & circle:nth-child(5n + 2) {
    fill: ${(props: SpotsProps) => transparentize(0.2, props.color)};
  }
  & circle:nth-child(5n + 3) {
    fill: ${(props: SpotsProps) => transparentize(0.3, props.color)};
  }
  & circle:nth-child(5n + 4) {
    fill: ${(props: SpotsProps) => transparentize(0.1, props.color)};
  }
  & circle:nth-child(5n + 5) {
    fill: ${(props: SpotsProps) => transparentize(0.2, props.color)};
  }
`

const Circle = styled.circle`
  stroke-width: 5;
  stroke-opacity: .5;
  fill: transparent;
`

type Props = {
  color: string
  children: React.ReactNode
}

const PatternedText = (props: Props) => {
  const { color } = props
  return (
    <div>
      <Container viewBox='0 0 600 200'>
        <defs>
          <pattern
            id='spots'
            viewBox='0 0 80 80'
            patternUnits='userSpaceOnUse'
            width='60'
            height='60'
            x='5'
            y='5'
          >
            <Pattern color={color} >
            {[
              [10, 20, 20],
              [7, 50, 0],
              [11, 70, 30],
              [13, 50, 50],
              [7, 10, 50],
              [9, 30, 70],
              [11, 70, 70]
            ]
            .map(([r, cx, cy]) => [r*1.5, cx, cy])
            .map(([r, cx, cy], i) => <Circle r={r} cx={cx} cy={cy} key={i}/>)}
            </Pattern>
          </pattern>
        </defs>
        <Text textAnchor='middle' x='50%' y='50%' color={color} fill='url(#spots)'>
          {props.children}
        </Text>
      </Container>
    </div>
  )
}

export default PatternedText
