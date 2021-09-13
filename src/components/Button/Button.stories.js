import React from 'react'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'radio',
      options: ['default', 'primary', 'secondary', 'danger'],
    },
    variant: { control: 'radio', options: ['default', 'outline', 'text'] },
    disableShadow: { control: 'boolean' },
    children: { control: 'text' },
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
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
  },
}

const Template = args => <Button {...args}>{args.children || 'Default'}</Button>

const defaultArgs = { variant: 'default', size: 'md' }

export const Default = Template.bind({})
Default.args = {
  color: 'default',
  ...defaultArgs,
}

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
  ...defaultArgs,
}

export const Secondary = Template.bind({})
Secondary.args = {
  color: 'secondary',
  ...defaultArgs,
}

export const Danger = Template.bind({})
Danger.args = {
  color: 'danger',
  ...defaultArgs,
}
