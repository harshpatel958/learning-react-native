import { View } from "react-native";
import Card from "./Card";
import { Meta, StoryObj } from "@storybook/react";

const meta={
    title:'Card',
    component:Card,
    args:{

    },
    decorators:[
        (Story)=>(
            <View>
                <Story/>
            </View>
        )
    ]
} satisfies Meta<typeof Card>
export default meta
type Story=StoryObj<typeof meta>
export const Horizontal:Story={
    args:{
        title:'Harsh patel',
        description:'laajksdflsdjflsdl....',
        imageUrl:'https://fastly.picsum.photos/id/487/200/300.jpg?hmac=jDYxTxKFMi18Gu5h9qt9ttwJKCk1-J6bZeHDtXGL2Vk'
    }
}