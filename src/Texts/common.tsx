import * as React from 'react'
import styled from 'styled-components'

type ContainerProps = {
  width?: string
  height?: string
  children?: React.ReactNode
}

const DEFAULT_CONTAINER_PROPS = {
  width: '400px',
  height: '150px',
  children: null
}

export const DefaultContainer = (props?: ContainerProps) => {
  const { width, height, children } = { ...DEFAULT_CONTAINER_PROPS, ...props }

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

type TextViewProps = {
  color?: string
  fontSize?: string
  fill?: string
  stroke?: string
  children: string
  shadow?: boolean
}

const DEFAULT_TEXTVIEW_PROPS = {
  fontSize: '4em',
  fontWeight: 550,
  fill: undefined,
  stroke: undefined,
  shadow: false
}

export const TextView = (props: TextViewProps) => {
  const { color, fill, stroke, fontSize, children } = {
    ...DEFAULT_TEXTVIEW_PROPS,
    ...props
  }
  const Text = styled.text`
    font-size: ${fontSize};
    font-weight: 550;
  `
  const textViewProps = {
    color,
    textAnchor: 'middle',
    x: '50%',
    y: '50%',
    dy: '.35em',
    filter: 'url(#global-shadow)' || undefined,
    fill,
    stroke
  }
  return <Text {...textViewProps}>{children}</Text>
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
