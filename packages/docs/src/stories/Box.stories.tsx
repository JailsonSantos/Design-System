import { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elmento BOX.</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
