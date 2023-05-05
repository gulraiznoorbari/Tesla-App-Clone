import { StyleSheet, SafeAreaView, Text, View, Image, Pressable } from "react-native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import graph from "../assets/images/graph.png";

const EnergyConsumption = () => {
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
    const months = [
        "Jan",
        "Feb",
        "March",
        "April",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
    ];
    var date = new Date().getDate();
    var currentDay = new Date().getDay() - 1;
    var currentMonth = new Date().getMonth();

    const router = useRouter();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Pressable onPress={() => router.back()} style={styles.backButton}>
                    <MaterialCommunityIcons name="chevron-left" color="white" size={22} />
                </Pressable>
                <Text style={styles.dateText}>
                    {days[currentDay]} {months[currentMonth]} {date}
                </Text>
                <View style={styles.filterGroup}>
                    <View style={styles.chartIconContainer}>
                        <MaterialCommunityIcons
                            name="chart-bar"
                            size={15}
                            style={styles.chartIcon}
                        />
                    </View>
                    <View style={styles.dayFilterTextContainer}>
                        <Text style={styles.dayFilterText}>Day</Text>
                    </View>
                </View>
            </View>
            <View style={styles.controlsMenu}>
                <View style={styles.title}>
                    <Text style={styles.heading}>Solar Generation</Text>
                    <Text style={styles.usage}>49.5kWh</Text>
                </View>
                <View style={styles.iconMenuContainer}>
                    <MaterialCommunityIcons
                        name="home"
                        color="#0078d7"
                        size={28}
                        style={styles.icon}
                    />
                    <MaterialIcons name="wb-sunny" color="gold" size={26} style={styles.icon} />
                    <MaterialIcons name="power" color="green" size={28} style={styles.icon} />
                    <MaterialCommunityIcons
                        name="tower-fire"
                        color="#505050"
                        size={25}
                        style={styles.icon}
                    />
                </View>
            </View>
            <Image source={graph} style={styles.graphImage} resizeMode="cover" />
            <View style={styles.statsContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.usageText}>28.8 kWh</Text>
                    <Text style={styles.destinationText}>To Home</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.usageText}>20.7 kWh</Text>
                    <Text style={styles.destinationText}>To Powerwall</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.usageText}>0 kWh</Text>
                    <Text style={styles.destinationText}>To Grid</Text>
                </View>
            </View>
            <View style={styles.destinationContainer}>
                <Text style={styles.destinationTitle}>Energy Destinations</Text>
                <View style={styles.distributionContainer}>
                    <View style={styles.distributionStats}>
                        <MaterialCommunityIcons
                            name="home"
                            color="#0078d7"
                            size={25}
                            style={styles.usageIcon}
                        />
                        <Text style={styles.usagePercentage}>58%</Text>
                    </View>
                    <View style={styles.distributionStats}>
                        <MaterialIcons
                            name="power"
                            color="green"
                            size={25}
                            style={styles.usageIcon}
                        />
                        <Text style={styles.usagePercentage}>42%</Text>
                    </View>
                    <View style={styles.distributionStats}>
                        <MaterialCommunityIcons
                            name="tower-fire"
                            color="#505050"
                            size={20}
                            style={styles.usageIcon}
                        />
                        <Text style={styles.usagePercentage}>0%</Text>
                    </View>
                </View>
                <View style={styles.distributionBar}>
                    <View style={styles.homeDistribution}></View>
                    <View style={styles.powerWallDistribution}></View>
                    <View style={styles.gridDistribution}></View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Download My Data</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#161618",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 35,
        paddingTop: 20,
        paddingHorizontal: 25,
    },
    backButton: {
        padding: 6,
        backgroundColor: "black",
        borderRadius: 5,
    },
    dateText: {
        color: "lightgray",
        fontSize: 15,
        fontWeight: "bold",
        justifyContent: "center",
        marginLeft: 30,
    },
    filterGroup: {
        flexDirection: "row",
    },
    chartIconContainer: {
        backgroundColor: "gray",
        padding: 5,
        marginHorizontal: 10,
        borderRadius: 8,
    },
    dayFilterTextContainer: {
        backgroundColor: "#303030",
        padding: 5,
        borderRadius: 8,
    },
    dayFilterText: {
        color: "lightgray",
        fontSize: 13,
        fontWeight: "500",
    },
    controlsMenu: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 30,
        paddingHorizontal: 25,
    },
    heading: {
        color: "gray",
        fontSize: 12,
    },
    usage: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
    },
    iconMenuContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    icon: {
        marginLeft: 25,
    },
    graphImage: {
        width: "100%",
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#272727",
        width: "100%",
        paddingHorizontal: 30,
        paddingVertical: 20,
        marginTop: 25,
    },
    textContainer: {
        alignItems: "center",
    },
    usageText: {
        color: "white",
        fontSize: 16,
        fontWeight: "700",
    },
    destinationText: {
        color: "gray",
        fontSize: 12,
    },
    destinationContainer: {
        justifyContent: "flex-start",
        backgroundColor: "#272727",
        width: "100%",
        paddingVertical: 20,
        paddingHorizontal: 25,
        marginVertical: 10,
    },
    destinationTitle: {
        color: "gray",
        fontSize: 13,
        fontWeight: "bold",
    },
    distributionContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    distributionStats: {
        flexDirection: "row",
        alignItems: "center",
    },
    usageIcon: {
        paddingVertical: 8,
    },
    usagePercentage: {
        color: "white",
        fontSize: 14,
        fontWeight: 600,
        marginLeft: 5,
        marginRight: 12,
    },
    distributionBar: {
        marginTop: 5,
        flexDirection: "row",
    },
    homeDistribution: {
        height: 5,
        backgroundColor: "#0078d7",
        width: "58%",
    },
    powerWallDistribution: {
        height: 5,
        backgroundColor: "green",
        width: "42%",
    },
    gridDistribution: {
        height: 5,
        backgroundColor: "gray",
        width: "0%",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 20,
        marginHorizontal: 25,
        marginVertical: 12,
        backgroundColor: "#272727",
        borderRadius: 5,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: 700,
        padding: 20,
    },
});

export default EnergyConsumption;
