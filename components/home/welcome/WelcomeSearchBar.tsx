import { View, TextInput } from "react-native";
import styles from "./welcome.style";
import React from "react";

interface WelcomeSearchBarProps {
  searchTerm: string;
  textChangeHandler: (text: string) => any;
}

const WelcomeSearchBar: React.FC<WelcomeSearchBarProps> = ({
  searchTerm,
  textChangeHandler,
}) => {
  return (
    <View style={styles.searchWrapper}>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={textChangeHandler}
        placeholder="What are you looking for?"
      />
    </View>
  );
};

export default WelcomeSearchBar;
