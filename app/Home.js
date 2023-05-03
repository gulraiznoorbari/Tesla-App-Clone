import { StyleSheet, Image, SafeAreaView, View, FlatList } from "react-native";

import car from "../assets/images/car.png";
import menuOptions from "../assets/menuOptions";
import MenuOptions from "../components/MenuOptions";
import Controls from "../components/Controls";
import TopBar from "../components/TopBar";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TopBar />
            <Image source={car} alt="Your Car Image" style={styles.carImage} resizeMode="contain" />
            {/* <Controls /> */}
            <FlatList
                data={menuOptions}
                renderItem={MenuOptions}
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={Controls} // scrolls the component with the FlatList items.
                ItemSeparatorComponent={() => (
                    <View style={{ height: 0.5, backgroundColor: "#202020" }}></View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        backgroundColor: "#161818",
    },
    carImage: {
        width: "100%",
        height: 280,
    },
});

export default HomeScreen;
