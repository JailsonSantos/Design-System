import { StoryObj, Meta } from '@storybook/react'

import { Box, CheckBox, CheckboxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbok',
  component: CheckBox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text>Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
