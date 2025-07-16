import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import { View } from "react-native";
import TextInput from "./TextInput";

const meta = {
  title: "TextInput",
  component: TextInput,
  args: {
    value: "hellwoe",
    setValue: fn(),
    placeholder: "the value",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: "harsh patel",
    setValue: fn(),
    placeholder: "",
  },
};
export const Complex: Story = {
  args: {
    value: "Patel",
    setValue: fn(()=>console.log('hello')),
    placeholder: "",
  },
};
