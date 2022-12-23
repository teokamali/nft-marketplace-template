import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { SelectTheme } from "./HeaderStyles";

type Props = {};

const Header = (props: Props) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme === "system" ? systemTheme : theme;
        return (
            <SelectTheme onChange={e => setTheme(e.target.value)}>
                <option disabled={currentTheme === "system"} value="system">
                    System
                </option>
                <option disabled={currentTheme === "dark"} value="dark">
                    Dark
                </option>
                <option disabled={currentTheme === "light"} value="light">
                    Light
                </option>
            </SelectTheme>
        );
    };

    return <header>{renderThemeChanger()}</header>;
};

export default Header;
