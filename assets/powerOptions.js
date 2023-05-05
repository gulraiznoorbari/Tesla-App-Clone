import { FontAwesome } from "@expo/vector-icons";

export default [
    {
        name: "Energy",
        icon: () => <FontAwesome name="pie-chart" color="darkgray" size={22} />,
        href: "/EnergyConsumption",
    },
    {
        name: "Impact",
        icon: () => <FontAwesome name="leaf" color="darkgray" size={22} />,
        href: "/",
    },
    {
        name: "Settings",
        icon: () => <FontAwesome name="gear" color="darkgray" size={25} />,
        href: "/",
    },
];
