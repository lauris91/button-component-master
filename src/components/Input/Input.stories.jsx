import React, { useState } from 'react'

import Input from './Input'

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    size: {
      control: 'radio',
      options: ['sm', 'md'],
    },
    disabled: { control: 'boolean' },
    error: { control: 'boolean' },
    helperText: { control: 'text' },
    startIcon: {
      description:
        'Enter one of the icons from -> https://fonts.google.com/icons?selected=Material+Icons+Round',
      control: 'text',
    },
    endIcon: {
      description:
        'Enter one of the icons from -> https://fonts.google.com/icons?selected=Material+Icons+Round',
      control: 'text',
    },
    fullWidth: { control: 'boolean' },
    multiline: { control: 'boolean' },
    row: { control: 'number' },
    value: { control: 'text' },
  },
}

const Template = args => {
  const [val, setVal] = useState(args.value || '')
  return <Input {...args} value={val} onChange={e => setVal(e.target.value)} />
}

const defaultArgs = {
  label: 'Label',
  size: 'md',
  placeholder: 'Placeholder',
}

export const Default = Template.bind({})
Default.args = {
  ...defaultArgs,
}
