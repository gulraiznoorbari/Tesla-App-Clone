import { StyleSheet, Text, View, Image, StatusBar, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import climate from "../assets/images/climate.png";
import { useRouter } from "expo-router";

const ClimateScreen = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
            <Image source={climate} style={styles.carImage} resizeMode="cover" />

            <Pressable onPress={() => router.back()} style={styles.backButton}>
                <MaterialCommunityIcons name="chevron-left" color="white" size={24} />
            </Pressable>

            <View style={styles.footer}>
                <Text style={styles.temparatureStats}>Interior 74°F - Exterior 66°F</Text>
                <View style={styles.controls}>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="power" color="white" size={38} />
                        <Text style={styles.iconText}>On</Text>
                    </View>
                    <View style={styles.temparatureContainer}>
                        <MaterialIcons name="chevron-left" color="#505050" size={25} />
                        <Text style={styles.temparatureText}>68°</Text>
                        <MaterialIcons name="chevron-right" color="#505050" size={25} />
                    </View>
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons name="car-door" color="white" size={38} />
                        <Text style={styles.iconText}>Vent</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161818",
    },
    backButton: {
        position: "absolute",
        top: 100,
        left: 25,
        padding: 6,
        backgroundColor: "black",
        borderRadius: 5,
    },
    carImage: {
        width: "100%",
        height: "80%",
    },
    footer: {
        alignItems: "center",
        padding: 10,
        marginBottom: 20,
        marginTop: "auto",
    },
    temparatureStats: {
        color: "gray",
        fontSize: 12,
        fontWeight: "500",
        marginVertical: 20,
    },
    controls: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around",
    },
    temparatureContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    temparatureText: {
        fontSize: 48,
        fontWeight: "300",
        color: "white",
        marginHorizontal: 15,
    },
    iconContainer: {
        alignItems: "center",
    },
    iconText: {
        color: "white",
        fontSize: 14,
        fontWeight: "600",
        marginTop: 5,
    },
});

export default ClimateScreen;
