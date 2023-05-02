import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
    return (
        <>
            <StatusBar style="inverted" animated={true} />
            <Stack screenOptions={{ headerShown: false }} />
        </>
    );
};

export default Layout;
