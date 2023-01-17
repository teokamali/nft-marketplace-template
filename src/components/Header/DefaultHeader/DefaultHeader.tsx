import React, { useState } from "react";
import Input from "../../Input/Input";
import {
    ButtonWallet,
    DescriptionDropDoun,
    DropDounBox,
    LanguageVsWalletSection,
    MenuDropDoun,
    MenuDropDounItem,
    MenuDropDounItemImg,
    MenuDropDounItemText,
    MenuItem,
    MenuSection,
    RoundedButton,
    SearchBox,
    Section,
    Title,
    TitleDropDounBox,
    TitleDropDounText,
} from "./StyleDefaultHeader";
import WalletBlackIcon from "public/Icon/WalletBlackIcon";
import WalletWhiteIcon from "public/Icon/WalletWhiteIcon";
const walletconnect = "/Images/walletconnect.svg";
const Group = "/Images/Group.svg";
const Group2 = "/Images/Group2.svg";
const walletlinkalternative = "/Images/walletlinkalternative .svg";
import { useTheme } from "next-themes";
import { openWalletDropDown } from "src/redux/slices/modals/modalsSlice";
import { useDispatch } from "react-redux";
import { useAppSelector } from "src/redux/hooks";
import { useIntl } from "react-intl";
import messages from "../messages";

const DefaultHeader = () => {
    const { formatMessage } = useIntl();
    const [search, setSearch] = useState("");
    const { wallet } = useAppSelector(state => state.modals);
    const dispatch = useDispatch();
    const handleOpen = () => {
        dispatch(openWalletDropDown(!wallet));
    };
    const { theme } = useTheme();

    return (
        <Section>
            <Title>{formatMessage({ ...messages.NFT_MARKETPLACE })}</Title>
            <SearchBox>
                <form className="flex items-center">
                    <Input
                        value={search}
                        onChange={e => {
                            setSearch(e.target.value);
                        }}
                        placeholder="Search items , collections and accounts"
                        type="text"
                        inputMode="search"
                        style={{
                            backgroundImage: "url(/images/search.svg)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: " 28px center",
                            textIndent: "47px",
                            backgroundColor: "#E8E8E8",
                            fontSize: "12px",
                        }}
                    />
                </form>
            </SearchBox>
            <MenuSection>
                <MenuItem>{formatMessage({ ...messages.HOME })}</MenuItem>
                <MenuItem
                    style={{
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                    }}
                >
                    {" "}
                    {formatMessage({ ...messages.CREATE_AN_ITEM })}
                </MenuItem>
                <MenuItem>{formatMessage({ ...messages.EXPLORE })}</MenuItem>
                <MenuItem>{formatMessage({ ...messages.COMMUNITY })}</MenuItem>
                <MenuItem>{formatMessage({ ...messages.RESOURECE })}</MenuItem>
                <LanguageVsWalletSection>
                    <MenuItem>{formatMessage({ ...messages.AR })}</MenuItem>
                    <div
                        style={{
                            width: "1px",
                            height: "18px",
                            background: "#C0BABA",
                        }}
                    />
                    <ButtonWallet onClick={handleOpen}>
                        <WalletWhiteIcon />
                    </ButtonWallet>
                    <MenuItem>
                        {wallet && (
                            <DropDounBox>
                                <TitleDropDounBox>
                                    <svg
                                        width="31"
                                        height="31"
                                        viewBox="0 0 31 31"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M25.8333 20.6667V25.8334C25.8333 26.1759 25.6972 26.5045 25.455 26.7467C25.2128 26.9889 24.8842 27.125 24.5417 27.125H5.16667C4.8241 27.125 4.49555 26.9889 4.25332 26.7467C4.01109 26.5045 3.875 26.1759 3.875 25.8334V10.3334C3.875 9.99078 4.01109 9.66224 4.25332 9.42001C4.49555 9.17777 4.8241 9.04169 5.16667 9.04169H24.5417C24.8842 9.04169 25.2128 9.17777 25.455 9.42001C25.6972 9.66224 25.8333 9.99078 25.8333 10.3334V15.5"
                                            stroke="inherent"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M25.8337 15.5H21.9587C21.2453 15.5 20.667 16.0783 20.667 16.7917V19.375C20.667 20.0884 21.2453 20.6667 21.9587 20.6667H25.8337C26.547 20.6667 27.1253 20.0884 27.1253 19.375V16.7917C27.1253 16.0783 26.547 15.5 25.8337 15.5Z"
                                            stroke="inherent"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M7.75 9.04166L18.2513 4.37874C18.5539 4.24333 18.8971 4.22949 19.2096 4.3401C19.5222 4.4507 19.7803 4.67727 19.9304 4.9729L21.9583 9.04166"
                                            stroke="inherent"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <TitleDropDounText>
                                        {formatMessage({
                                            ...messages.MY_WALLET,
                                        })}
                                    </TitleDropDounText>
                                </TitleDropDounBox>
                                <DescriptionDropDoun>
                                    {formatMessage({
                                        ...messages.TEXT_DESC_WALLET_DEROP_DOWN,
                                    })}
                                </DescriptionDropDoun>
                                <MenuDropDoun>
                                    <MenuDropDounItem>
                                        <MenuDropDounItemImg>
                                            <img src={walletconnect} alt="" />
                                        </MenuDropDounItemImg>
                                        <MenuDropDounItemText>
                                            {formatMessage({
                                                ...messages.WALLET_CONNECT,
                                            })}
                                        </MenuDropDounItemText>
                                    </MenuDropDounItem>
                                    <MenuDropDounItem>
                                        <MenuDropDounItemImg>
                                            <img src={Group} alt="" />
                                        </MenuDropDounItemImg>
                                        <MenuDropDounItemText>
                                            {formatMessage({
                                                ...messages.META_MASK,
                                            })}
                                        </MenuDropDounItemText>
                                    </MenuDropDounItem>
                                    <MenuDropDounItem>
                                        <MenuDropDounItemImg>
                                            <img src={Group2} alt="" />
                                        </MenuDropDounItemImg>
                                        <MenuDropDounItemText>
                                            {formatMessage({
                                                ...messages.COINBASE,
                                            })}
                                        </MenuDropDounItemText>
                                    </MenuDropDounItem>
                                    <MenuDropDounItem
                                        style={{ cursor: "pointer" }}
                                    >
                                        <MenuDropDounItemImg>
                                            <img
                                                src={walletlinkalternative}
                                                alt=""
                                            />
                                        </MenuDropDounItemImg>
                                        <MenuDropDounItemText>
                                            {formatMessage({
                                                ...messages.PHANTOM,
                                            })}
                                        </MenuDropDounItemText>
                                    </MenuDropDounItem>
                                </MenuDropDoun>
                            </DropDounBox>
                        )}
                    </MenuItem>
                </LanguageVsWalletSection>
            </MenuSection>
            <RoundedButton />
        </Section>
    );
};
export default DefaultHeader;
