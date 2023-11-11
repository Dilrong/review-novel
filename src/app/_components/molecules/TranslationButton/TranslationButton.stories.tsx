import type { Meta, StoryObj } from '@storybook/react'
import { NextIntlClientProvider } from 'next-intl'

import Component from './TranslationButton'

const meta = {
  title: 'MOLECULES/TranslationButton',
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
    name: 'text',
    handleClick: () => {},
  },
}
