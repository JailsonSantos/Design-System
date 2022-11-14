import { StoryObj, Meta } from '@storybook/react'

import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde odit qui rerum eligendi harum beatae sed ipsam, commodi, excepturi incidunt quae, esse vitae libero explicabo doloremque cumque quisquam quis.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustoTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
