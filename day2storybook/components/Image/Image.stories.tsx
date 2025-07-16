import { Meta, StoryObj } from "@storybook/react";
import MyImage from "./Image";
import { View } from "react-native";

const meta = {
  title: "Image",
  component: MyImage,
  args: {
    source: { uri: "" },
    height: 50,
    width: 50,
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof MyImage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    source: {
      uri: "https://fastly.picsum.photos/id/487/200/300.jpg?hmac=jDYxTxKFMi18Gu5h9qt9ttwJKCk1-J6bZeHDtXGL2Vk",
    },
    height: 100,
    width: 100,
  },
};
