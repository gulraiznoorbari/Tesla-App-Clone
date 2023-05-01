import { StyleSheet, Text, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const MenuOptions = ({ item }) => {
    return (
        <View style={styles.optionRow}>
            <MaterialCommunityIcons name={item.iconName} size={27} color="gray" />
            <Text style={styles.optionText}>{item.name}</Text>
            <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="gray"
                style={{ marginLeft: "auto" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    optionRow: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 20,
    },
    optionText: {
        marginLeft: 20,
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default MenuOptions;
