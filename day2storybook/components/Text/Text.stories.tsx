import { Meta, StoryObj } from "@storybook/react";
import MyText from "./Text";
import { View } from "react-native";

const meta = {
  title: "Text",
  component: MyText,
  args: {},
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyText>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Small: Story = {
  args: {
    text: "Small text",
    customStyle:{
        fontSize:8
    }
  },
};
export const Medium: Story = {
  args: {
    text: "Medium text",
    customStyle:{
        fontSize:16
    }
  },
};
export const Large: Story = {
  args: {
    text: "Large text",
    customStyle:{
        fontSize:28
    }
  },
};
