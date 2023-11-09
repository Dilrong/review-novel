import type { Meta, StoryObj } from '@storybook/react'

import Component from './TextArea'

const meta = {
  title: 'ATOMS/TextArea',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    rows: 4,
    placeholder: 'placeholder',
  },
}
