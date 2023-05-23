/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import Input from "../../Input/Input";
import {
    LanguageVsWalletSection,
    MenuItem,
    MenuSection,
    SearchBox,
    Section,
    Title,
} from "./StyleMobileHeader";
import WalletBlackIcon from "public/Icon/WalletBlackIcon";
import WalletWhiteIcon from "public/Icon/WalletWhiteIcon";
import SearchIcon from "public/Icon/SearchIcon";
import { useIntl } from "react-intl";
import messages from "../messages";
import { useAppSelector } from "src/redux/hooks";
import { useDispatch } from "react-redux";
import {
    openMenuDropDown,
    openSearchInput,
    openWalletDropDown,
} from "src/redux/slices/modals/modalsSlice";
import {
    DescriptionDropDoun,
    DropDounBox,
    MenuDropDoun,
    MenuDropDounItem,
    MenuDropDounItemImg,
    MenuDropDounItemText,
    TitleDropDounBox,
    TitleDropDounText,
} from "./StyleMobileHeader";

export interface IItemProps {
    id?: string;
    item?: string;
}
const walletconnectSmall = "/Images/walletconnectSmall.svg";
const GroupSmall = "/Images/GroupSmall.svg";
const GroupSmall2 = "/Images/GroupSmall2.svg";
const walletlinkalternativeSmall = "/Images/walletlinkalternativeSmall.svg";

const DefaultHeader = () => {
    const items: IItemProps[] = [
        {
            id: "1",
            item: "Home",
        },
        {
            id: "2",
            item: "Create an item ",
        },
        {
            id: "3",
            item: "Explore",
        },
        {
            id: "4",
            item: "Community",
        },
        {
            id: "5",
            item: "Resource",
        },
        {
            id: "6",
            item: "AR",
        },
    ];
    const [search, setSearch] = useState("");
    // const [showSearch, setShowSearch] = useState<boolean>(false)
    const { formatMessage } = useIntl();
    const { wallet } = useAppSelector(state => state.modals);
    const { menu } = useAppSelector(state => state.modals);
    const { showsearch } = useAppSelector(state => state.modals);
    const dispatch = useDispatch();
    // const handleOpen = () => {
    //     dispatch(openWalletDropDown(!wallet));
    //     dispatch(openMenuDropDown(false));
    //     dispatch(openSearchInput(false));
    // };
    // const handleOpenMenu = () => {
    //     dispatch(openMenuDropDown(!menu));
    //     dispatch(openWalletDropDown(false));
    //     dispatch(openSearchInput(false));
    // };
    // const handleShowSearch = () => {
    //     dispatch(openSearchInput(!showsearch));
    //     dispatch(openMenuDropDown(false));
    //     dispatch(openWalletDropDown(false));
    // };
    return (
        <Section>
            <Title>{formatMessage({ ...messages.NFT_MARKETPLACE })}</Title>
            <MenuSection>
                <MenuItem>
                    <svg
                        width="13"
                        height="13"
                        viewBox="0 0 48 48"
                        fill="inherent"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M22 7.5C13.9919 7.5 7.5 13.9919 7.5 22C7.5 30.0081 13.9919 36.5 22 36.5C25.9213 36.5 29.4791 34.9434 32.0891 32.4144C32.134 32.3532 32.1841 32.2947 32.2394 32.2394C32.2947 32.1841 32.3532 32.134 32.4144 32.0891C34.9434 29.4791 36.5 25.9213 36.5 22C36.5 13.9919 30.0081 7.5 22 7.5ZM35.3898 33.2684C37.9546 30.224 39.5 26.2925 39.5 22C39.5 12.335 31.665 4.5 22 4.5C12.335 4.5 4.5 12.335 4.5 22C4.5 31.665 12.335 39.5 22 39.5C26.2925 39.5 30.224 37.9546 33.2684 35.3898L40.9394 43.0607C41.5252 43.6465 42.4749 43.6465 43.0607 43.0607C43.6465 42.4749 43.6465 41.5252 43.0607 40.9394L35.3898 33.2684Z"
                            fill="inherent"
                        />
                    </svg>
                </MenuItem>
                <MenuItem>
                    <svg
                        width="13px"
                        height="13px"
                        viewBox="0 0 48 48"
                        fill="inherent"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 12C4.5 11.1716 5.17157 10.5 6 10.5H42C42.8284 10.5 43.5 11.1716 43.5 12C43.5 12.8284 42.8284 13.5 42 13.5H6C5.17157 13.5 4.5 12.8284 4.5 12ZM4.5 24C4.5 23.1716 5.17157 22.5 6 22.5H42C42.8284 22.5 43.5 23.1716 43.5 24C43.5 24.8284 42.8284 25.5 42 25.5H6C5.17157 25.5 4.5 24.8284 4.5 24ZM4.5 36C4.5 35.1716 5.17157 34.5 6 34.5H42C42.8284 34.5 43.5 35.1716 43.5 36C43.5 36.8284 42.8284 37.5 42 37.5H6C5.17157 37.5 4.5 36.8284 4.5 36Z"
                            fill="inherent"
                        />
                    </svg>
                </MenuItem>
                <MenuItem>
                    <svg
                        width="13px"
                        height="13px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M20 16V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V12"
                            stroke="inherent"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M20 12H17C16.4477 12 16 12.4477 16 13V15C16 15.5523 16.4477 16 17 16H20C20.5523 16 21 15.5523 21 15V13C21 12.4477 20.5523 12 20 12Z"
                            stroke="inherent"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M6 6.99999L14.13 3.38999C14.3643 3.28516 14.63 3.27444 14.872 3.36007C15.114 3.4457 15.3138 3.62111 15.43 3.84999L17 6.99999"
                            stroke="inherent"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </MenuItem>
                {wallet && (
                    <DropDounBox>
                        <TitleDropDounBox>
                            <svg
                                width="21"
                                height="21"
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
                                {formatMessage({ ...messages.MY_WALLET })}
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
                                    <img src={walletconnectSmall} alt="" />
                                </MenuDropDounItemImg>
                                <MenuDropDounItemText>
                                    {formatMessage({
                                        ...messages.WALLET_CONNECT,
                                    })}
                                </MenuDropDounItemText>
                            </MenuDropDounItem>
                            <MenuDropDounItem>
                                <MenuDropDounItemImg>
                                    <img src={GroupSmall} alt="" />
                                </MenuDropDounItemImg>
                                <MenuDropDounItemText>
                                    {formatMessage({ ...messages.META_MASK })}
                                </MenuDropDounItemText>
                            </MenuDropDounItem>
                            <MenuDropDounItem>
                                <MenuDropDounItemImg>
                                    <img src={GroupSmall2} alt="" />
                                </MenuDropDounItemImg>
                                <MenuDropDounItemText>
                                    {formatMessage({ ...messages.COINBASE })}
                                </MenuDropDounItemText>
                            </MenuDropDounItem>
                            <MenuDropDounItem style={{ cursor: "pointer" }}>
                                <MenuDropDounItemImg>
                                    <img
                                        src={walletlinkalternativeSmall}
                                        alt=""
                                    />
                                </MenuDropDounItemImg>
                                <MenuDropDounItemText>
                                    {formatMessage({ ...messages.PHANTOM })}
                                </MenuDropDounItemText>
                            </MenuDropDounItem>
                        </MenuDropDoun>
                    </DropDounBox>
                )}
                {menu && (
                    <DropDounBox>
                        <TitleDropDounText>
                            {formatMessage({ ...messages.MENU })}
                        </TitleDropDounText>
                        <MenuDropDoun style={{ paddingRight: "30px" }}>
                            {items.map(ic => (
                                <MenuDropDounItemText>
                                    {ic.item}
                                </MenuDropDounItemText>
                            ))}
                        </MenuDropDoun>
                    </DropDounBox>
                )}

                {showsearch && (
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
                                    height: "35px",
                                    backgroundImage: "url(/images/search.png)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: " 28px center",
                                    textIndent: "47px",
                                    backgroundColor: "#E8E8E8",
                                    fontSize: "12px",
                                }}
                            />
                        </form>
                    </SearchBox>
                )}
            </MenuSection>
        </Section>
    );
};
export default DefaultHeader;
