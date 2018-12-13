import * as React from 'react'
import ControlPanel, {
  Button,
  Checkbox,
  Multibox,
  Select,
  Text,
  Color,
  Range,
  Interval
} from 'react-control-panel'

const DEFAULT_STATE = {
  fontSize: 4,
  'range slider': 20,
  'stepped slider': 0.6,
  interval: [25, 50],
  text: 'my setting',
  checkbox: true,
  'color rgb': 'rgb(100, 200, 100',
  'color hex': '#30b2ba',
  selection: 'option 1',
  'multiple checkboxes': [true, true]
}

type Props<T> = {
  title: string
  text: string
  fontSize?: number
  onChange: (config: any) => void
}

export default function<T>({ title, fontSize, text, onChange }: Props<T>) {
  const state = { ...DEFAULT_STATE, fontSize, text }

  const handleOnChange = (path: string, value: any) => {
    onChange({ [path]: value })
  }
  return (
    <ControlPanel
      theme="dark"
      title={title}
      initialState={state}
      onChange={handleOnChange}
    >
      <Range label="fontSize" min={0.1} max={10} />
      <Range label="stepped slider" min={0} max={1} />
      <Interval label="interval" min={0} max={100} />
      <Text label="text" />
      <Checkbox label="checkbox" />
      <Color label="color rgb" format="rgb" />
      <Color label="color hex" format="hex" />
      <Button label="gimme an alert" action={() => alert('clicked')} />
      <Select label="selection" options={{ 'option 1': 1, 'option 2': 2 }} />
      <Multibox
        label="multiple checkboxes"
        colors={['rgb(100,120,230)', 'rgb(210,100,190)']}
        names={['box1', 'box2']}
      />
    </ControlPanel>
  )
}
