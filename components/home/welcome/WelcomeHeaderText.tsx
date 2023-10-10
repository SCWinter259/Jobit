import { View, Text } from "react-native";
import styles from "./welcome.style";

const WelcomeHeaderText = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.userName}>Hello Adrian</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>
  );
};

export default WelcomeHeaderText;
