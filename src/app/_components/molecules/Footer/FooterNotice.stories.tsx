import type { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import Component from './FooterNotice'

const meta = {
  title: 'MOLECULES/FooterNotice',
  component: Component,
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="en">
        <Story />
      </NextIntlClientProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Component>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    board: {
      id: 1,
      title: 'title',
      content: 'content',
      created_at: new Date(),
      updated_at: new Date(),
    },
  },
}
