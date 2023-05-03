import { Pressable, StyleSheet, Text, View } from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";

const PowerOptions = ({ item }) => {
    return (
        <Link href={item.href} asChild>
            <Pressable style={styles.optionRow}>
                {item.icon ? (
                    <item.icon />
                ) : (
                    <MaterialCommunityIcons name={item.iconName} size={27} color="gray" />
                )}
                <Text style={styles.optionText}>{item.name}</Text>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={24}
                    color="gray"
                    style={{ marginLeft: "auto" }}
                />
            </Pressable>
        </Link>
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

export default PowerOptions;
