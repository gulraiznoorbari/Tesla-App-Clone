import { StyleSheet, SafeAreaView, Text, View, Image, FlatList } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

import house from "../assets/images/house.png";
import powerOptions from "../assets/powerOptions";
import PowerOptions from "../components/PowerOptions";

const PowerStatsScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={styles.title}>My Home</Text>
                    <Text style={styles.status}>Discharging</Text>
                </View>
                <FontAwesome name="user-circle-o" color="darkgray" size={30} />
            </View>
            <Image source={house} style={styles.houseImage} resizeMode="contain" />

            <FlatList
                data={powerOptions}
                renderItem={PowerOptions}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                    <View style={{ height: 0.5, backgroundColor: "#202020" }}></View>
                )}
                style={styles.powerMenu}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161818",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 35,
        marginTop: 35,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    status: {
        fontSize: 12,
        fontWeight: "500",
        color: "#0078d7",
    },
    houseImage: {
        width: "100%",
        height: "50%",
    },
    powerMenu: {
        paddingHorizontal: 35,
    },
});

export default PowerStatsScreen;
