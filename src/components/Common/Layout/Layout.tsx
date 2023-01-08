import React, { FC, ReactNode, useEffect } from "react";
import { ReactFC } from "src/types/types";
import Header from "../Header/Header";
import {
    Container,
    LayoutFooter,
    LayoutMain,
    LayoutWrapper,
} from "./LayoutStyles";
import { Desktop, ExceptMobile, Mobile, Tablet } from "src/utils/BreakPoints";
import MobileHeader from "src/components/Header/MobileHeader/MobileHeader";
import DefaultHeader from "src/components/Header/DefaultHeader/DefaultHeader";
import DefaultFooter from "src/components/Footer/DefaultFooter/DefaultFooter";
import MobileFooter from "src/components/Footer/MobileFooter/MobileFooter";
import { useAppSelector } from "src/redux/hooks";
import { useDispatch } from "react-redux";
import { openWalletDropDown } from "src/redux/slices/modals/modalsSlice";
const Layout: ReactFC = ({ children }) => {
    const { wallet } = useAppSelector(state => state.modals);
    const dispatch = useDispatch();
    const walletCloseHandler = () => {
        dispatch(openWalletDropDown(false));
    };

    return (
        <LayoutWrapper>
            <header>
                <Header />
                <Container>
                    <Mobile>
                        <MobileHeader />
                    </Mobile>
                    <Tablet>
                        <MobileHeader />
                    </Tablet>
                    <Desktop>
                        <DefaultHeader />
                    </Desktop>
                </Container>
            </header>

            <LayoutMain
                isWalletDropDownOpen={wallet}
                onClick={walletCloseHandler}
            >
                {children}
            </LayoutMain>

            <LayoutFooter isWalletDropDownOpen={wallet}>
                <ExceptMobile>
                    <DefaultFooter />
                </ExceptMobile>
                <Mobile>
                    <MobileFooter />
                </Mobile>
            </LayoutFooter>
        </LayoutWrapper>
    );
};
export default Layout;
