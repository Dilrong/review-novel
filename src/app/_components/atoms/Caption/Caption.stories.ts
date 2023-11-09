import type { Meta, StoryObj } from '@storybook/react'

import Component from './Caption'

const meta = {
  title: 'ATOMS/Caption',
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
