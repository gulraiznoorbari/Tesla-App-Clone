import { StyleSheet, View } from "react-native";
import { Entypo, Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Controls = () => {
    return (
        <View style={styles.controls}>
            <Entypo name="lock" size={28} color="gray" />
            <MaterialCommunityIcons name="fan" size={28} color="gray" />
            <FontAwesome5 name="bolt" size={28} color="gray" />
            <Ionicons name="car-sport-sharp" size={28} color="gray" />
        </View>
    );
};

const styles = StyleSheet.create({
    controls: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 10,
        marginBottom: 5,
    },
});

export default Controls;
