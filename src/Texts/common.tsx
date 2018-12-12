import * as React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  width?: string
  height?: string
  children?: React.ReactNode
}

const DEFAULT_PROPS = {
  width: '600px',
  height: '150px',
  children: null
}
export const DefaultContainer = (props?: ContainerProps) => {
  const { width, height, children } = { ...DEFAULT_PROPS, ...props }

  const Svg = styled.svg`
    width: ${width};
    height: ${height};
    display: block;
  `

  const svgProps = {
    viewBox: `0 0 ${width} ${height}`,
    width: '0.8vw',
    height: '0.2vw'
  }
  return <Svg {...svgProps}>{children}</Svg>
}

export type Pattern = Array<number[]>

export const DEFAULT_PATTERN: Pattern = [
  [10, 20, 20],
  [7, 50, 0],
  [11, 70, 30],
  [13, 50, 50],
  [7, 10, 50],
  [9, 30, 70],
  [11, 70, 70]
]
