import * as React from 'react'
import styled from 'styled-components'

export type ContainerProps = {
  width?: number
  height?: number
  children?: React.ReactNode
}

export const DEFAULTS: ComponentProps = {
  text: 'foo',
  fontSize: 4.5,
  shadow: true
}

export type ComponentProps = {
  text: string
  shadow: boolean
  strokeWidth?: number
  strokeOpacity?: number
  fontSize?: number
  color?: string
  opacity?: number
  colors?: string[]
  opacities?: number[]
}

const DEFAULT_CONTAINER_PROPS = {
  width: 400,
  height: 150,
  children: null
}

export const DefaultContainer = (props?: ContainerProps) => {
  const { width, height, children } = { ...DEFAULT_CONTAINER_PROPS, ...props }

  const Svg = styled.svg`
    width: ${width}px;
    height: ${height}px;
    display: block;
  `

  const svgProps = {
    viewBox: `0 0 ${width} ${height}`,
    preserveAspectRatio: 'xMidYMid meet',
    width: '0.8vw',
    height: '0.2vw'
  }
  return <Svg {...svgProps}>{children}</Svg>
}

type TextViewProps = {
  color?: string
  fontSize?: number
  strokeWidth?: number
  children: string
  fill?: string
  filter?: string
  stroke?: string
  shadow?: boolean
}

const DEFAULT_TEXTVIEW_PROPS = {
  fontSize: 4,
  strokeWidth: undefined,
  fontWeight: 550,
  fill: undefined,
  filter: undefined,
  stroke: undefined,
  shadow: false
}

export const TextView = (props: TextViewProps) => {
  const {
    color,
    fill,
    filter,
    stroke,
    strokeWidth,
    fontSize,
    children,
    shadow
  } = {
    ...DEFAULT_TEXTVIEW_PROPS,
    ...props
  }
  const Text = styled.text`
    font-size: ${fontSize}em;
    font-weight: 550;
  `
  const textViewProps = {
    color,
    textAnchor: 'middle',
    x: '50%',
    y: '50%',
    dy: '.35em',
    filter: filter ? filter : shadow ? 'url(#global-shadow)' : undefined,
    fill,
    stroke,
    strokeWidth
  }
  return <Text {...textViewProps}>{children}</Text>
}

export type Pattern = Array<number[]>

export const DEFAULT_PATTERN: Pattern = [
  [10, 20, 20],
  [11, 70, 30],
  [13, 50, 50],
  [9, 30, 70],
  [11, 70, 70]
]

export const getGradientStops = (colors: string[], opacities: number[]) => {
  const offsetStep = 100 / (colors.length - 1)
  return colors.map((color, n) => (
    <stop
      key={n}
      stopColor={color}
      stopOpacity={opacities[n]}
      offset={`${offsetStep * n}%`}
    />
  ))
}
