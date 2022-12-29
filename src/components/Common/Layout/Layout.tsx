import React, { FC, ReactNode, useEffect } from "react";
import { ReactFC } from "src/types/types";
import Header from "../Header/Header";
import { Container, LayoutMain, LayoutWrapper } from "./LayoutStyles";
import { ExceptMobile, Mobile } from "src/utils/BreakPoints";
import MobileHeader from "src/components/Header/MobileHeader/MobileHeader";
import DefaultHeader from "src/components/Header/DefaultHeader/DefaultHeader";
import DefaultFooter from "src/components/Footer/DefaultFooter/DefaultFooter";
import MobileFooter from "src/components/Footer/MobileFooter/MobileFooter";
const Layout: ReactFC = ({ children }) => {
    return (
        <LayoutWrapper>
            <header>
                <Header />
                <Container>
                    <Mobile>
                        <MobileHeader />
                    </Mobile>
                    <ExceptMobile>
                        <DefaultHeader />
                    </ExceptMobile>
                </Container>
            </header>
            <LayoutMain>{children}</LayoutMain>
            <footer>
                <ExceptMobile>
                    <DefaultFooter />
                </ExceptMobile>
                <Mobile>
                    <MobileFooter />
                </Mobile>
            </footer>
        </LayoutWrapper>
    );
};
export default Layout;
