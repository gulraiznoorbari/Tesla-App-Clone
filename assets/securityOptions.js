import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "react-native";

export default [
    {
        title: "Sentry Mode",
        description: "Enable to view live camera",
        iconName: "control-camera",
    },
    {
        title: "Valet Mode",
        descriptionText: () => (
            <Text
                style={{
                    fontSize: 12,
                    fontWeight: "500",
                    color: "#0078d7",
                }}
            >
                Clear Pin
            </Text>
        ),
        icon: () => <MaterialCommunityIcons name="car-arrow-right" size={24} color="gray" />,
    },
    {
        title: "Speed Limit Mode",
        description: "Limit top speed",
        iconName: "speed",
    },
    // {
    //     title: "Manage Drivers",
    //     description: "1 driver",
    //     iconName: "person",
    //     href: "/",
    // },
];
