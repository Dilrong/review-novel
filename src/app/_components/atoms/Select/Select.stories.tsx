import type { Meta, StoryObj } from '@storybook/react'

import Component from './Select'

const meta = {
  title: 'ATOMS/Select',
  component: Component,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <option>option1</option>
        <option>option2</option>
      </>
    ),
  },
}
