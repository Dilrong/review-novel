import type { Meta, StoryObj } from '@storybook/react'

import Component from './Button'

const meta = {
  title: 'ATOMS/Button',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'button',
    text: 'Button',
  },
}
