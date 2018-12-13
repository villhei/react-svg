import * as React from 'react'
import ControlPanel, { Text, Color, Range, Checkbox } from 'react-control-panel'

type Props = {
  title: string
  config: any
  onChange: (config: any) => void
}

export default function({ title, config, onChange }: Props) {
  const state = config

  const handleOnChange = (path: string, value: any) => {
    if (path.indexOf('colors_') === 0) {
      const [, rawN] = path.split('_')
      const n = parseInt(rawN, 10)
      const colors = Object.assign([], config.colors, { [n]: value })
      onChange({ colors })
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
    <Color key={n} label={`colors_${n}`} format="rgb" />
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
