import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";

const TopBar = () => {
    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>My Model S</Text>
                <View style={styles.mileage}>
                    <FontAwesome name="battery" size={17} color="gray" />
                    <Text style={styles.driven}>315 mil</Text>
                </View>
                <Text style={styles.status}>Parked</Text>
            </View>
            <FontAwesome name="user-circle" size={30} color="gray" />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 35,
    },
    title: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 6,
    },
    mileage: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 3,
    },
    driven: {
        color: "gray",
        fontSize: 13,
        fontWeight: 500,
        paddingLeft: 10,
    },
    status: {
        color: "gray",
        fontSize: 12,
        fontWeight: 600,
    },
});

export default TopBar;
