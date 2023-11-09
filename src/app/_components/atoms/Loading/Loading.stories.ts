import type { Meta, StoryObj } from '@storybook/react'

import Component from './Loading'

const meta = {
  title: 'ATOMS/Loading',
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
