import React from "react"
import Input from "../../Input/Input"
import { LanguageVsWalletSection, MenuItem, MenuSection, Section, Title } from "./StyleMobileHeader"
import WalletBlackIcon from "public/Icon/WalletBlackIcon"
import WalletWhiteIcon from "public/Icon/WalletWhiteIcon"
import SearchIcon from "public/Icon/SearchIcon"

const DefaultHeader = () => {


    return (
        <Section >
            <Title>NFTMarketplace</Title>

            <MenuSection>
                <MenuItem >
                    <svg width="13" height="13" viewBox="0 0 48 48" fill="inherent" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M22 7.5C13.9919 7.5 7.5 13.9919 7.5 22C7.5 30.0081 13.9919 36.5 22 36.5C25.9213 36.5 29.4791 34.9434 32.0891 32.4144C32.134 32.3532 32.1841 32.2947 32.2394 32.2394C32.2947 32.1841 32.3532 32.134 32.4144 32.0891C34.9434 29.4791 36.5 25.9213 36.5 22C36.5 13.9919 30.0081 7.5 22 7.5ZM35.3898 33.2684C37.9546 30.224 39.5 26.2925 39.5 22C39.5 12.335 31.665 4.5 22 4.5C12.335 4.5 4.5 12.335 4.5 22C4.5 31.665 12.335 39.5 22 39.5C26.2925 39.5 30.224 37.9546 33.2684 35.3898L40.9394 43.0607C41.5252 43.6465 42.4749 43.6465 43.0607 43.0607C43.6465 42.4749 43.6465 41.5252 43.0607 40.9394L35.3898 33.2684Z"
                            fill="inherent" />
                    </svg>
                </MenuItem>
                <MenuItem>
                    <svg width="13px" height="13px" viewBox="0 0 48 48" fill="inherent" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.5 12C4.5 11.1716 5.17157 10.5 6 10.5H42C42.8284 10.5 43.5 11.1716 43.5 12C43.5 12.8284 42.8284 13.5 42 13.5H6C5.17157 13.5 4.5 12.8284 4.5 12ZM4.5 24C4.5 23.1716 5.17157 22.5 6 22.5H42C42.8284 22.5 43.5 23.1716 43.5 24C43.5 24.8284 42.8284 25.5 42 25.5H6C5.17157 25.5 4.5 24.8284 4.5 24ZM4.5 36C4.5 35.1716 5.17157 34.5 6 34.5H42C42.8284 34.5 43.5 35.1716 43.5 36C43.5 36.8284 42.8284 37.5 42 37.5H6C5.17157 37.5 4.5 36.8284 4.5 36Z" fill="inherent" />
                    </svg>
                </MenuItem>
                <MenuItem>
                    <svg width="13px" height="13px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 16V20C20 20.2652 19.8946 20.5196 19.7071 20.7071C19.5196 20.8946 19.2652 21 19 21H4C3.73478 21 3.48043 20.8946 3.29289 20.7071C3.10536 20.5196 3 20.2652 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289C3.48043 7.10536 3.73478 7 4 7H19C19.2652 7 19.5196 7.10536 19.7071 7.29289C19.8946 7.48043 20 7.73478 20 8V12" stroke="inherent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M20 12H17C16.4477 12 16 12.4477 16 13V15C16 15.5523 16.4477 16 17 16H20C20.5523 16 21 15.5523 21 15V13C21 12.4477 20.5523 12 20 12Z" stroke="inherent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 6.99999L14.13 3.38999C14.3643 3.28516 14.63 3.27444 14.872 3.36007C15.114 3.4457 15.3138 3.62111 15.43 3.84999L17 6.99999" stroke="inherent" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </MenuItem>
            </MenuSection>
        </Section >
    )

}
export default DefaultHeader