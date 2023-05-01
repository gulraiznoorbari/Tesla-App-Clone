import { StyleSheet, Text, Image, View, StatusBar, FlatList } from "react-native";
import {
    Entypo,
    Ionicons,
    FontAwesome,
    FontAwesome5,
    MaterialIcons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";

export default function Page() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
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
            <Image source={car} alt="Your Car Image" style={styles.carImage} resizeMode="contain" />
            <View style={styles.controls}>
                <Entypo name="lock" size={28} color="gray" />
                <MaterialCommunityIcons name="fan" size={28} color="gray" />
                <FontAwesome5 name="bolt" size={28} color="gray" />
                <Ionicons name="car-sport-sharp" size={28} color="gray" />
            </View>
            <FlatList
                data={menuOptions}
                renderItem={({ item }) => (
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
                )}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 0.5, backgroundColor: "#202020" }}></View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#161818",
    },
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
    carImage: {
        width: "100%",
        height: 300,
    },
    controls: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginBottom: 10,
    },
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
