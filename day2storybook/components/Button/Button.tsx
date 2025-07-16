import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface MyButtonProps {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
}

export const MyButton = ({
  onPress,
  text,
  color,
  textColor,
}: MyButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        color && {
          backgroundColor: color,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, textColor && { color: color }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    paddingVertical: 8,
    backgroundColor: "purple",

    borderRadius: 8,
  },
  text: { color: "white", fontSize: 16, fontWeight: "bold" },
});
