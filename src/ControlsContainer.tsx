import * as React from 'react'
import styled from 'styled-components'

import Panel from '~/Panel'

const Container = styled.div`
  display: flex;
  flex-direction: row;

  .control-panel {
    flex: 1;
  }
  svg {
    flex: 1;
    margin: auto;
    font-weight: 900;
    text-transform: uppercase;
  }
`

export type ComponentProps = {
  text: string
  strokeWidth?: number
  fontSize?: number
  fromColor?: string
  toColor?: string
  color?: string
  colors?: string[]
  opacity?: number
  opacities?: number[]
}

type Props = {
  label: string
  config: ComponentProps
  element: (props: any) => JSX.Element
}

type State = ComponentProps

const assignArrayElements = (
  state: State,
  stateKey: string,
  elements?: any[]
) => {
  return (elements || []).reduce(
    (acc, elem: any, n: number) => ({
      ...acc,
      [`${stateKey}_${n}`]: elem
    }),
    state
  )
}

export default class ControlsContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = this.props.config
  }

  onConfigChange = (incoming: Partial<ComponentProps>) => {
    this.setState({ text: this.state.text, ...incoming })
  }

  render() {
    const { element, label } = this.props
    const Element = element

    const { colors, opacities } = this.state

    const withColors = assignArrayElements(this.state, 'colors', colors)
    const config = assignArrayElements(withColors, 'opacities', opacities)
    return (
      <Container>
        <Element {...this.state} />
        <Panel title={label} config={config} onChange={this.onConfigChange} />
      </Container>
    )
  }
}
