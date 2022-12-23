import React, { FC, ReactNode, useEffect } from "react";
import Header from "../Header/Header";
import { Container, LayoutMain, LayoutWrapper } from "./LayoutStyles";

interface IProps {
    children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
    return (
        <LayoutWrapper>
            <Container>
                <Header />
            </Container>
            <LayoutMain>
                <Container>{children}</Container>
            </LayoutMain>
            <footer>
                <Container>Footer</Container>
            </footer>
        </LayoutWrapper>
    );
};
export default Layout;
