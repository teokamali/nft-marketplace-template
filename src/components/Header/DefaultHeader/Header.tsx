import React from "react"
import Input from "../Input/Input"
import { MenuSection, SearchBox, Section, Title } from "./style"
import WalletIcon from "public/Icon/WalletIcon"
const Header = () => {


    return (
        <Section >
            <Title>NFTMarketplace</Title>
            <SearchBox>
                <form className="flex items-center">
                    <div className="relative w-full ">

                        <Input
                            value=""
                            onChange={() => { }}
                            placeholder="Search items , collections and accounts"
                            type="text"
                            inputMode="search"
                            style={{ backgroundImage: "url(/images/search.svg)", backgroundRepeat: "no-repeat", backgroundPosition: " 28px center", textIndent: "47px", backgroundColor: "#E8E8E8", fontSize: "12px" }}
                        />
                    </div>

                </form>
            </SearchBox>
            <MenuSection>
                <a >
                    Home
                </a>
                <a >
                    Create an item
                </a>
                <a >
                    Explore
                </a>
                <a >
                    Community
                </a>
                <a >
                    Resource
                </a>
                <a >
                    AR
                </a>
                <a style={{ width: "40px", height: "18px+++", display: "flex", flexDirection: "row-reverse", alignItems: "center", borderLeft: "1px solid green" }}>
                    <WalletIcon />
                </a>
            </MenuSection>
        </Section >
    )

}
export default Header