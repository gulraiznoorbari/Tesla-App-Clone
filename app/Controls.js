import { StyleSheet, Text, View, Pressable, Image, SafeAreaView } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import tesla from "../assets/images/tesla.png";

const ControlScreen = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backButton}>
                    <MaterialCommunityIcons name="chevron-left" color="white" size={24} />
                </Pressable>
                <Text style={styles.title}>Controls</Text>
            </View>
            <View>
                <Image source={tesla} style={styles.carImage} resizeMode="contain" />
                <View style={styles.powerIcon}>
                    <MaterialCommunityIcons name="flash" color="lightgray" size={25} />
                </View>
            </View>
            <View style={styles.controlMenu}>
                <View style={styles.menuItemContainer}>
                    <MaterialCommunityIcons name="car-light-high" size={30} color="lightgray" />
                    <Text style={styles.menuItemText}>Flash</Text>
                </View>
                <View style={styles.menuItemContainer}>
                    <MaterialIcons name="volume-up" size={30} color="lightgray" />
                    <Text style={styles.menuItemText}>Honk</Text>
                </View>
                <View style={styles.menuItemContainer}>
                    <MaterialCommunityIcons name="remote" size={30} color="lightgray" />
                    <Text style={styles.menuItemText}>Start</Text>
                </View>
                <View style={styles.menuItemContainer}>
                    <MaterialCommunityIcons name="car-door" size={30} color="lightgray" />
                    <Text style={styles.menuItemText}>Vent</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#161818",
    },
    header: {
        flexDirection: "row",
        marginTop: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
    backButton: {
        position: "absolute",
        left: 3,
        padding: 6,
        backgroundColor: "black",
        borderRadius: 5,
    },
    carImage: {
        width: "90%",
        height: 500,
        marginTop: 30,
        marginHorizontal: 20,
    },
    powerIcon: {
        position: "absolute",
        bottom: 60,
        left: 45,
    },
    controlMenu: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        marginTop: "auto",
        padding: 5,
    },
    menuItemContainer: {
        alignItems: "center",
    },
    menuItemText: {
        marginTop: 5,
        color: "lightgray",
        fontSize: 12,
        fontWeight: "600",
    },
});

export default ControlScreen;
