import * as React from 'react'
import ControlPanel, { Text, Color, Range, Checkbox } from 'react-control-panel'

type Props = {
  title: string
  config: any
  onChange: (config: any) => void
}

function updateValues(
  config: any,
  property: string,
  path: string,
  value: string
) {
  const [, rawN] = path.split('_')
  const n = parseInt(rawN, 10)
  return Object.assign([], config[property], { [n]: value })
}

export default function({ title, config, onChange }: Props) {
  const state = config

  const handleOnChange = (path: string, value: any) => {
    if (path.indexOf('colors_') === 0) {
      onChange({ colors: updateValues(config, 'colors', path, value) })
    } else if (path.indexOf('opacities_') === 0) {
      onChange({ opacities: updateValues(config, 'opacities', path, value) })
    } else {
      onChange({ [path]: value })
    }
  }

  const stroke = config.strokeWidth ? (
    <Range label="strokeWidth" min={0.1} max={20} />
  ) : (
    undefined
  )
  const color = Boolean(config.color) ? (
    <Color label="color" format="rgb" />
  ) : (
    undefined
  )

  const colorConfigs = Object.keys(config).filter(
    value => value.indexOf('colors_') === 0
  )

  const colors = colorConfigs.map((_a: string, n: number) => (
    <React.Fragment key={n}>
      <Color label={`colors_${n}`} format="rgb" />
      <Range label={`opacities_${n}`} min={0} max={1.0} />
    </React.Fragment>
  ))

  return (
    <ControlPanel
      theme="dark"
      title={title}
      initialState={state}
      onChange={handleOnChange}
    >
      <Text label="text" />
      <Range label="fontSize" min={0.1} max={10} />
      {stroke}
      {color}
      {colors}
      <Checkbox label="shadow" />
    </ControlPanel>
  )
}
