import { Meta, StoryObj } from "@storybook/react";
import ListView from "./ListView";
import Card from "../Card/Card";

const meta = {
  title: "ListView",
  component: ListView,
  args: {},
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof ListView>;
type Story = StoryObj<typeof meta>;
export const Basic: Story = {
  args: {
    renderItem: ({ item, index }) => (
      <Card
        title={item?.title}
        description={item?.description}
        imageUrl={item?.imageUrl}
      />
    ),
    data: [
      {
        title: "hellow",
        description: "asdljflaskdjflasfasdf",
        imageUrl:
          "https://fastly.picsum.photos/id/487/200/300.jpg?hmac=jDYxTxKFMi18Gu5h9qt9ttwJKCk1-J6bZeHDtXGL2Vk",
      },
      {
        title: "hellow",
        description: "asdljflaskdjflasfasdf",
        imageUrl:
          "https://fastly.picsum.photos/id/487/200/300.jpg?hmac=jDYxTxKFMi18Gu5h9qt9ttwJKCk1-J6bZeHDtXGL2Vk",
      },
      {
        title: "hellow",
        description: "asdljflaskdjflasfasdf",
        imageUrl:
          "https://fastly.picsum.photos/id/487/200/300.jpg?hmac=jDYxTxKFMi18Gu5h9qt9ttwJKCk1-J6bZeHDtXGL2Vk",
      },
      {
        title: "hellow",
        description: "asdljflaskdjflasfasdf",
        imageUrl:
          "https://fastly.picsum.photos/id/487/200/300.jpg?hmac=jDYxTxKFMi18Gu5h9qt9ttwJKCk1-J6bZeHDtXGL2Vk",
      },
      {
        title: "hellow",
        description: "asdljflaskdjflasfasdf",
        imageUrl:
          "https://fastly.picsum.photos/id/487/200/300.jpg?hmac=jDYxTxKFMi18Gu5h9qt9ttwJKCk1-J6bZeHDtXGL2Vk",
      },
    ],
  },
};
export default meta
