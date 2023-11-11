import type { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import Component from './AdminNovelItem'

const meta = {
  title: 'MOLECULES/AdinNovelItem',
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
    novel: {
      id: 1,
      title: 'title',
      thumbnail: 'image',
      category_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
    },
  },
}
