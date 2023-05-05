import { StyleSheet, Switch, Text, View, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SecurityOptions = ({ item, toggleSwitch, isEnabled }) => {
    return (
        <SafeAreaView style={styles.optionRow} asChild>
            {item.icon ? (
                <item.icon />
            ) : (
                <MaterialIcons name={item.iconName} size={25} color="gray" />
            )}
            <View style={styles.optionTexts}>
                <Text style={styles.optionTitle}>{item.title}</Text>
                {item.descriptionText ? (
                    <item.descriptionText />
                ) : (
                    <Text style={styles.optionDescription}>{item.description}</Text>
                )}
            </View>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ marginLeft: "auto" }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    optionRow: {
        paddingHorizontal: 25,
        marginVertical: 17,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    optionTexts: {
        marginLeft: 15,
    },
    optionTitle: {
        color: "white",
        fontSize: 14,
        fontWeight: "bold",
    },
    optionDescription: {
        color: "gray",
        fontSize: 12,
    },
});

export default SecurityOptions;
