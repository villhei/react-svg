declare module 'react-control-panel' {
  import * as React from 'react'

  type ControlPanelProps = {
    initialState?: object
    onChange?: Function
    theme?: string | object
    title?: string
    width?: number
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
    style?: object
    settings?: object[]
    state?: object
    contextCb?: Function
    draggable?: boolean
  }

  export default class ControlPanel extends React.Component<
    ControlPanelProps
  > {}

  interface ComponentProps {
    label: string
  }

  interface ButtonProps extends ComponentProps {
    action: Function
  }

  interface RangeProps extends ComponentProps {
    min: number
    max: number
  }

  interface IntervalProps extends ComponentProps {
    min: number
    max: number
  }

  interface SelectProps extends ComponentProps {
    options: object
  }

  interface ColorProps extends ComponentProps {
    format: 'rgb' | 'hex'
  }

  interface MultiboxProps extends ComponentProps {
    colors: Array<string>
    names: Array<string>
  }

  export class Button extends React.Component<ButtonProps> {}
  export class Checkbox extends React.Component<ComponentProps> {}
  export class Multibox extends React.Component<MultiboxProps> {}
  export class Select extends React.Component<SelectProps> {}
  export class Text extends React.Component<ComponentProps> {}
  export class Color extends React.Component<ColorProps> {}
  export class Range extends React.Component<RangeProps> {}
  export class Interval extends React.Component<IntervalProps> {}
}
