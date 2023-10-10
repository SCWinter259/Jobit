import { View, Text, TouchableOpacity } from "react-native"
import styles from "./popularjobs.style"

const PopularJobsHeader = () => {
    return (
        <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
    )
}

export default PopularJobsHeader;