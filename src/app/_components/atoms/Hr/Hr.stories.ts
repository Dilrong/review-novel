import type { Meta, StoryObj } from '@storybook/react'

import Component from './Hr'

const meta = {
  title: 'ATOMS/Hr',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}