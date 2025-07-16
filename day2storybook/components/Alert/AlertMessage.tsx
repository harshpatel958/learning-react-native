import { View, Text, Modal, StyleSheet } from "react-native";
import React, { FC, useState } from "react";
import { MyButton } from "../Button/Button";
interface AlertMessageProps {
  title: string;
  description: string;
}
const AlertMessage: FC<AlertMessageProps> = ({ title, description }) => {
  const [visible, setvisible] = useState(true);
  if (!visible) {
    return <></>;
  }
  return (
    <Modal>
      <View style={styles.rootContainer}>
        <View style={styles.boxContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
          <MyButton
            text="Ok"
            onPress={() => {
              setvisible(false)
            }}
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  boxContainer: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "red",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
  },
  description: { fontSize: 17, fontWeight: "black", marginBottom: 20 },
});
export default AlertMessage;
