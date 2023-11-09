import type { Meta, StoryObj } from '@storybook/react'

import Component from './Heading5'

const meta = {
  title: 'ATOMS/Heading5',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'text',
  },
}
