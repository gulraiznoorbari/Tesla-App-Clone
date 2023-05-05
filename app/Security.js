import { StyleSheet, SafeAreaView, Text, View, Image, Pressable, FlatList } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { useState } from "react";

import logo1 from "../assets/images/logo.jpg";
import logo2 from "../assets/images/logo.png";
import securityOptions from "../assets/securityOptions";
import SecurityOptions from "../components/SecurityOptions";

const Security = () => {
    const router = useRouter();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backButton}>
                    <MaterialCommunityIcons name="chevron-left" color="white" size={24} />
                </Pressable>
                <Text style={styles.title}>Security</Text>
            </View>
            <View style={styles.heroContainer}>
                <Image source={logo2} resizeMode="contain" style={styles.mainImage} />
                <View style={styles.deviceInfoText}>
                    <Text style={styles.deviceName}>John's S23 Ultra</Text>
                    <Text style={styles.connectionStatus}>Connected</Text>
                </View>
            </View>
            <View style={styles.divider}></View>
            <View>
                <FlatList
                    data={securityOptions}
                    renderItem={SecurityOptions}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.divider}></View>
            <Link href="/" asChild>
                <Pressable style={styles.optionRow}>
                    <MaterialIcons name="person" size={27} color="gray" />
                    <View style={styles.optionTexts}>
                        <Text style={styles.optionTitle}>Manage Drivers</Text>
                        <Text style={styles.optionDescription}>1 Driver</Text>
                    </View>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={24}
                        color="gray"
                        style={{ marginLeft: "auto" }}
                    />
                </Pressable>
            </Link>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 25,
        backgroundColor: "#161818",
    },
    header: {
        paddingTop: 20,
        paddingHorizontal: 25,
        marginTop: 35,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        marginRight: 120,
    },
    backButton: {
        // position: "absolute",
        // top: 14,
        // left: 28,
        padding: 6,
        backgroundColor: "black",
        borderRadius: 5,
    },
    heroContainer: {
        padding: 20,
        marginVertical: 10,
        alignItems: "center",
    },
    mainImage: {
        width: "60%",
        height: 120,
        borderRadius: 15,
    },
    deviceInfoText: {
        flexDirection: "column",
        alignItems: "center",
        marginVertical: 12,
    },
    deviceName: {
        color: "white",
        fontSize: 14,
        fontWeight: "700",
    },
    connectionStatus: {
        color: "gray",
        fontSize: 12,
        marginTop: 3,
    },
    divider: {
        width: "100%",
        height: 0.5,
        backgroundColor: "gray",
        opacity: 0.3,
    },
    optionRow: {
        paddingHorizontal: 25,
        marginVertical: 20,
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

export default Security;
