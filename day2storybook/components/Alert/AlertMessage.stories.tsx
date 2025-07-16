import { Meta, StoryObj } from "@storybook/react";
import AlertMessage from "./AlertMessage";
import { View } from "react-native";

const meta = {
  title: "AlertMessage",
  component: AlertMessage,
  args: {
    title: "",
    description: "",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof AlertMessage>;
type Story = StoryObj<typeof meta>;
export const EmailAlert: Story = {
  args: {
    title: "Invalid email",
    description: "email contains atleast one @",
  },
};
export default meta;
