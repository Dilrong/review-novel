import type { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import Component from './BannerItem'

const meta = {
  title: 'MOLECULES/BannerItem',
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
    link: 'https://novelduck.farm/',
    image:
      'https://ywvpflgpzvitldkbyzmi.supabase.co/storage/v1/object/sign/banner/init.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJiYW5uZXIvaW5pdC5qcGciLCJpYXQiOjE2OTgxNTY1NzIsImV4cCI6MTcyOTY5MjU3Mn0.9Po2lwZB_0DYyCCvC9zOIUcJ7P85iFGC6ok-pr7uUJE&t=2023-10-24T14%3A09%3A32.541Z',
    name: '배너',
  },
}
