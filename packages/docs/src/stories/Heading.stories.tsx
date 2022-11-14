import { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat unde odit qui rerum eligendi harum beatae sed ipsam, commodi, excepturi incidunt quae, esse vitae libero explicabo doloremque cumque quisquam quis.',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustoTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
}
