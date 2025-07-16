import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import MyText from "../Text/Text";
import MyImage from "../Image/Image";
import { MyButton } from "../Button/Button";
interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}
const Card: FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", flexDirection: "row", gap: 10 }}>
        <MyImage source={{ uri: imageUrl }} height={50} width={50} />
        <View style={{ width: "50%" }}>
          <MyText
            text={title}
            customStyle={{ fontWeight: "600", fontSize: 15 }}
          />
          <MyText text={description} />
        </View>
      </View>
      <MyButton color="hotpink" text="View" onPress={() => {}} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
    gap: 10,

    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});
export default Card;
