import { FontAwesome5 } from "@expo/vector-icons";

export default [
    {
        name: "Controls",
        iconName: "car",
        href: "/Controls",
    },
    {
        name: "Climate",
        iconName: "fan",
        href: "/Climate",
    },
    {
        name: "Location",
        iconName: "map-marker",
        href: "/Location",
    },
    {
        name: "Security",
        iconName: "shield-check",
        href: "/Security",
    },
    {
        name: "Updates",
        iconName: "update",
        href: "/Updates",
    },
    {
        name: "Power Stats",
        icon: () => <FontAwesome5 name="bolt" size={22} color="gray" />,
        href: "/PowerStats",
    },
];
