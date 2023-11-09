import type { Meta, StoryObj } from '@storybook/react'

import Component from './Input'

const meta = {
  title: 'ATOMS/Input',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'text',
  },
}
