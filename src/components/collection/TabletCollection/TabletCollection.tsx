import { useIntl } from "react-intl";
import abbrNum from "src/utils/abbrNum";
import messages from "../messages";
import BallIcon from "../../../../public/Icon/BallIcon";
import {
    StyleItemFiltersSection,
    SearchBox,
    StyleCollectionHeaderAvatarSection,
    StyleCollectionHeaderBackground,
    StyleCollectionHeaderDesc,
    StyleCollectionHeaderInfoSection,
    StyleCollectionHeaderName,
    StyleCollectionHeaderProfileInfoBox,
    StyleCollectionHeaderProfileInfoItemCount,
    StyleCollectionHeaderProfileInfoItemName,
    StyleCollectionHeaderProfileInfoSection,
    StyleCollectionHeaderSection,
    StyleCollectionHeaderSocialBox,
    StyleCollectionHeaderSocialSection,
    StyleCollectionHeaderTitle,
    StyleCollectionMainWrapper,
    StyleCollectionSection,
    StyleItemFiltersBox,
    StyledCollectionIconWrapper,
    StyleSearchBoxSection,
    StyleCollectionMainHeaderLayoutBox,
    StyleCollectionMainHeaderLayout,
    StyleCollectionMainHeaderLayout2,
    StyleCollectionMainHeaderItemFilterBox,
    StyleCollectionMainHeaderItemFilterBoxHeader,
    StyleCollectionMainHeaderItemFilterName,
    StyleCollectionMainBodyFilter,
    StyleCollectionMainHeaderItemFilterBodyBox,
    StyleCollectionMainHeaderItemFilterBodyItemHeaderBox,
    StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox,
    StyleCollectionMainHeaderItemFilterBodyItemBoxStatus,
    StyleCollectionMainItemFilterBodyItemBox,
    StyleCollectionMainHeaderItemFilterBodyItemHeaderItemBox,
    StyleCollectionMainHeaderItemFilterBodyItemBoxQuantity,
    StyleCollectionMainHeaderItemFilterBodyItemBoxCurrency,
    StyleCollectionMainFilterPriceBodyItemBox,
    StyleCollectionMainHeaderItemFilterBodyPriceBox,
    StyleCollectionMainItemFilterBodyItemPriceInput,
    StyleCollectionCardSection,
    StyleCollectionMainCardBox,
    StyleCollectionMainCardImage,
    StyleCollectionMainCardSpanColor,
    StyleCollectionMainCardSpanItem,
    StyleCollectionMainCardUpdateBox,
    StyleCollectionMainCardSeenBox,
} from "./StyleTabletCollection";
import SocialIcon from "public/Icon/SocialIcon";
import FoxIcon from "public/Icon/FoxIcon";
import TwitterIcon from "public/Icon/TwitterIcon";
import TwitterSIcon from "public/Icon/TwitterSIcon";
import BeIcon from "public/Icon/BeIcon";
import ShareIcon from "public/Icon/ShareIcon";
import MoreIcon from "public/Icon/MoreIcon";
import { Mobile } from "src/utils/BreakPoints";
import { useState } from "react";
import Input from "src/components/Common/Input/Input";
import ChevronDownIcon from "public/Icon/ChevronDownIcon";
import ClassifyIcon from "public/Icon/ClassifyIcon";
import ClassifyIcon2 from "public/Icon/ClassifyIcon2";
import FilterIcon from "public/Icon/FilterIcon";
import ChevronUpIcon from "public/Icon/ChevronUpIcon";
import EyeBlueIcon from "public/Icon/EyeBlueIcon";

export interface ICollectionProps {
    profile: IProfileProps;
    collections: ICollectionsProps[];
}

export interface IProfileProps {
    name: string;
    avatarSrc: string;
    imgSrc: string;
    details: string;
    title: string;
    info: IProfileInfoProps[];
}
export interface IProfileInfoProps {
    item: string;
    numItem: number;
}
export interface ICollectionsProps {
    imgSrc: string;
    color: string;
    name: string;
    price: number;
    lastUpdate: number;
    seen: number;
}
const filterStatus = [
    {
        name: "Buy Now",
        id: 1,
        checked: false,
    },
    {
        name: "On Auction",
        id: 2,
        checked: false,
    },
    {
        name: "Buy With cards",
        id: 3,
        checked: false,
    },
];
const filterQuantity = [
    {
        name: "All Items",
        id: 4,
        checked: false,
    },
    {
        name: "Singel Items",
        id: 5,
        checked: false,
    },
    {
        name: "Budles",
        id: 6,
        checked: false,
    },
];
const filterCurrency = [
    {
        name: "ETH",
        id: 7,
        checked: false,
    },
    {
        name: "Weth",
        id: 8,
        checked: false,
    },
];
const TabletCollection = ({ profile, collections }: ICollectionProps) => {
    const { formatMessage } = useIntl();
    const [search, setSearch] = useState("");
    const [check, setCheck] = useState(false);
    const [statusVisible, setStatusVisible] = useState<boolean>(false);
    const [quantityVisible, setQuantityVisible] = useState<boolean>(false);
    const [currencyVisible, setCurrencyVisible] = useState<boolean>(false);
    const [filterVisible, setFilterVisible] = useState<boolean>(true);
    return (
        <StyleCollectionSection>
            <StyleCollectionHeaderSection>
                <StyleCollectionHeaderBackground
                    bgImage={profile.imgSrc}
                    style={{ backdropFilter: " blur(10px)" }}
                />
                <StyleCollectionHeaderInfoSection>
                    <StyleCollectionHeaderAvatarSection
                        src={profile.avatarSrc}
                    />
                    <StyleCollectionHeaderName>
                        {profile.name}
                    </StyleCollectionHeaderName>
                    <StyleCollectionHeaderTitle>
                        {profile.title}
                    </StyleCollectionHeaderTitle>
                    <StyleCollectionHeaderDesc>
                        {profile.details}
                    </StyleCollectionHeaderDesc>
                    <StyleCollectionHeaderProfileInfoSection>
                        {profile.info.map((value, index) => {
                            return (
                                <>
                                    <StyleCollectionHeaderProfileInfoBox
                                        key={index}
                                    >
                                        <StyleCollectionHeaderProfileInfoItemCount>
                                            {abbrNum({
                                                number: value.numItem,
                                                decPlaces: 0,
                                            })}
                                        </StyleCollectionHeaderProfileInfoItemCount>
                                        <StyleCollectionHeaderProfileInfoItemName>
                                            {value.item}
                                        </StyleCollectionHeaderProfileInfoItemName>
                                    </StyleCollectionHeaderProfileInfoBox>
                                </>
                            );
                        })}
                    </StyleCollectionHeaderProfileInfoSection>
                    <StyleCollectionHeaderSocialSection>
                        <StyleCollectionHeaderSocialBox href="">
                            <BallIcon />
                        </StyleCollectionHeaderSocialBox>
                        <StyleCollectionHeaderSocialBox href="">
                            <SocialIcon />
                        </StyleCollectionHeaderSocialBox>
                        <StyleCollectionHeaderSocialBox href="">
                            <FoxIcon />
                        </StyleCollectionHeaderSocialBox>
                        <StyleCollectionHeaderSocialBox href="">
                            <TwitterSIcon />
                        </StyleCollectionHeaderSocialBox>
                        <StyleCollectionHeaderSocialBox href="">
                            <BeIcon />
                        </StyleCollectionHeaderSocialBox>
                        <StyleCollectionHeaderSocialBox href="">
                            <ShareIcon />
                        </StyleCollectionHeaderSocialBox>
                        <StyleCollectionHeaderSocialBox href="">
                            <MoreIcon />
                        </StyleCollectionHeaderSocialBox>
                    </StyleCollectionHeaderSocialSection>
                </StyleCollectionHeaderInfoSection>
            </StyleCollectionHeaderSection>
            <StyleCollectionMainWrapper>
                <StyleSearchBoxSection>
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
                                    backgroundImage: "url(/images/search.png)",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: " 8px center",
                                    textIndent: "27px",
                                    fontSize: "12px",
                                    border: "1px solid rgba(33, 33, 33, 0.5)",
                                }}
                            />
                        </form>
                    </SearchBox>

                    <StyleCollectionMainHeaderLayoutBox>
                        <StyleCollectionMainHeaderLayout>
                            <ClassifyIcon />
                        </StyleCollectionMainHeaderLayout>
                        <StyleCollectionMainHeaderLayout2>
                            <ClassifyIcon2 />
                        </StyleCollectionMainHeaderLayout2>
                    </StyleCollectionMainHeaderLayoutBox>
                </StyleSearchBoxSection>

                <StyleItemFiltersSection>
                    <StyleItemFiltersBox>
                        <span className="line-clamp-1"> Price Low To High</span>
                        <StyledCollectionIconWrapper>
                            <ChevronDownIcon />
                        </StyledCollectionIconWrapper>
                    </StyleItemFiltersBox>
                    <StyleItemFiltersBox>
                        <span className="line-clamp-1">Rarity Low To high</span>
                    </StyleItemFiltersBox>
                    <StyleItemFiltersBox style={{ color: "#4858EF" }}>
                        <span className="line-clamp-1">
                            Make Collection Offer
                        </span>
                    </StyleItemFiltersBox>
                </StyleItemFiltersSection>
                <StyleCollectionMainHeaderItemFilterBox>
                    <StyleCollectionMainHeaderItemFilterBoxHeader
                        filterVisible={filterVisible}
                    >
                        <StyleCollectionMainHeaderItemFilterName>
                            <StyledCollectionIconWrapper>
                                <FilterIcon />
                            </StyledCollectionIconWrapper>
                            <span style={{ fontSize: "20px" }}>Filters</span>
                        </StyleCollectionMainHeaderItemFilterName>
                        <StyledCollectionIconWrapper
                            onClick={() => {
                                setFilterVisible(!filterVisible);
                            }}
                        >
                            {!filterVisible ? (
                                <ChevronUpIcon />
                            ) : (
                                <ChevronDownIcon />
                            )}
                        </StyledCollectionIconWrapper>
                    </StyleCollectionMainHeaderItemFilterBoxHeader>
                    <StyleCollectionMainBodyFilter
                        filterVisible={filterVisible}
                    >
                        <StyleCollectionMainHeaderItemFilterBodyBox>
                            <StyleCollectionMainHeaderItemFilterBodyItemHeaderBox>
                                <StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox>
                                    Status
                                </StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox>
                                <StyledCollectionIconWrapper
                                    onClick={() => {
                                        setStatusVisible(!statusVisible);
                                    }}
                                >
                                    {!statusVisible ? (
                                        <ChevronUpIcon />
                                    ) : (
                                        <ChevronDownIcon />
                                    )}
                                </StyledCollectionIconWrapper>
                            </StyleCollectionMainHeaderItemFilterBodyItemHeaderBox>
                            <StyleCollectionMainHeaderItemFilterBodyItemBoxStatus
                                statusVisible={statusVisible}
                            >
                                {filterStatus.map((status, index) => {
                                    return (
                                        <>
                                            <StyleCollectionMainItemFilterBodyItemBox
                                                key={index}
                                            >
                                                <StyleCollectionMainHeaderItemFilterBodyItemHeaderItemBox>
                                                    {status.name}
                                                </StyleCollectionMainHeaderItemFilterBodyItemHeaderItemBox>
                                                <input
                                                    type="checkbox"
                                                    name="rulesChecked"
                                                    id="rulesChecked"
                                                    onChange={() =>
                                                        setCheck(!check)
                                                    }
                                                    checked={status.checked}
                                                    className="check_box"
                                                    data-testId="check_box"
                                                />
                                                <label
                                                    className="check_box_label"
                                                    htmlFor="rulesChecked"
                                                />
                                            </StyleCollectionMainItemFilterBodyItemBox>
                                        </>
                                    );
                                })}
                            </StyleCollectionMainHeaderItemFilterBodyItemBoxStatus>
                        </StyleCollectionMainHeaderItemFilterBodyBox>

                        <StyleCollectionMainHeaderItemFilterBodyBox>
                            <StyleCollectionMainHeaderItemFilterBodyItemHeaderBox>
                                <StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox>
                                    Quantity
                                </StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox>
                                <StyledCollectionIconWrapper
                                    onClick={() => {
                                        setQuantityVisible(!quantityVisible);
                                    }}
                                >
                                    {!quantityVisible ? (
                                        <ChevronUpIcon />
                                    ) : (
                                        <ChevronDownIcon />
                                    )}
                                </StyledCollectionIconWrapper>
                            </StyleCollectionMainHeaderItemFilterBodyItemHeaderBox>
                            <StyleCollectionMainHeaderItemFilterBodyItemBoxQuantity
                                quantityVisible={quantityVisible}
                            >
                                {filterQuantity.map((Quantity, index) => {
                                    return (
                                        <>
                                            <StyleCollectionMainItemFilterBodyItemBox
                                                key={index}
                                            >
                                                <StyleCollectionMainHeaderItemFilterBodyItemHeaderItemBox>
                                                    {Quantity.name}
                                                </StyleCollectionMainHeaderItemFilterBodyItemHeaderItemBox>
                                                <input
                                                    type="checkbox"
                                                    name="rulesChecked"
                                                    id="rulesChecked"
                                                    onChange={() =>
                                                        setCheck(!check)
                                                    }
                                                    checked={Quantity.checked}
                                                    className="check_box"
                                                    data-testId="check_box"
                                                />
                                                <label
                                                    className="check_box_label"
                                                    htmlFor="rulesChecked"
                                                />
                                            </StyleCollectionMainItemFilterBodyItemBox>
                                        </>
                                    );
                                })}
                            </StyleCollectionMainHeaderItemFilterBodyItemBoxQuantity>
                        </StyleCollectionMainHeaderItemFilterBodyBox>
                        <StyleCollectionMainHeaderItemFilterBodyBox>
                            <StyleCollectionMainHeaderItemFilterBodyItemHeaderBox>
                                <StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox>
                                    Currency
                                </StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox>
                                <StyledCollectionIconWrapper
                                    onClick={() => {
                                        setCurrencyVisible(!currencyVisible);
                                    }}
                                >
                                    {!currencyVisible ? (
                                        <ChevronUpIcon />
                                    ) : (
                                        <ChevronDownIcon />
                                    )}
                                </StyledCollectionIconWrapper>
                            </StyleCollectionMainHeaderItemFilterBodyItemHeaderBox>
                            <StyleCollectionMainHeaderItemFilterBodyItemBoxCurrency
                                currencyVisible={currencyVisible}
                            >
                                {filterCurrency.map((Currency, index) => {
                                    return (
                                        <>
                                            <StyleCollectionMainItemFilterBodyItemBox
                                                key={index}
                                            >
                                                <StyleCollectionMainHeaderItemFilterBodyItemHeaderItemBox>
                                                    {Currency.name}
                                                </StyleCollectionMainHeaderItemFilterBodyItemHeaderItemBox>
                                                <input
                                                    type="checkbox"
                                                    name="rulesChecked"
                                                    id="rulesChecked"
                                                    onChange={() =>
                                                        setCheck(!check)
                                                    }
                                                    checked={Currency.checked}
                                                    className="check_box"
                                                    data-testId="check_box"
                                                />
                                                <label
                                                    className="check_box_label"
                                                    htmlFor="rulesChecked"
                                                />
                                            </StyleCollectionMainItemFilterBodyItemBox>
                                        </>
                                    );
                                })}
                            </StyleCollectionMainHeaderItemFilterBodyItemBoxCurrency>
                        </StyleCollectionMainHeaderItemFilterBodyBox>

                        <StyleCollectionMainHeaderItemFilterBodyBox
                            style={{ border: "none" }}
                        >
                            <StyleCollectionMainHeaderItemFilterBodyItemHeaderBox>
                                <StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox>
                                    {formatMessage({ ...messages.PRICE })}
                                </StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox>
                            </StyleCollectionMainHeaderItemFilterBodyItemHeaderBox>
                        </StyleCollectionMainHeaderItemFilterBodyBox>
                        <StyleCollectionMainFilterPriceBodyItemBox>
                            <StyleCollectionMainHeaderItemFilterBodyPriceBox
                                style={{ padding: "10px 10px" }}
                            >
                                <StyleCollectionMainItemFilterBodyItemPriceInput
                                    type="text"
                                    placeholder="USD"
                                    style={{ outline: "none", width: "30px" }}
                                />
                                <StyledCollectionIconWrapper>
                                    <ChevronDownIcon />
                                </StyledCollectionIconWrapper>
                            </StyleCollectionMainHeaderItemFilterBodyPriceBox>
                            <StyleCollectionMainHeaderItemFilterBodyPriceBox>
                                <StyleCollectionMainItemFilterBodyItemPriceInput
                                    type="number"
                                    placeholder="MIN"
                                    style={{ outline: "none", width: "30px" }}
                                />
                            </StyleCollectionMainHeaderItemFilterBodyPriceBox>
                            {formatMessage({ ...messages.TO })}
                            <StyleCollectionMainHeaderItemFilterBodyPriceBox>
                                <StyleCollectionMainItemFilterBodyItemPriceInput
                                    type="number"
                                    placeholder="MAX"
                                    style={{ outline: "none", width: "33px" }}
                                />
                            </StyleCollectionMainHeaderItemFilterBodyPriceBox>
                        </StyleCollectionMainFilterPriceBodyItemBox>
                    </StyleCollectionMainBodyFilter>
                </StyleCollectionMainHeaderItemFilterBox>
                <StyleCollectionCardSection>
                    {collections.map((dataCard, index) => {
                        return (
                            <>
                                <StyleCollectionMainCardBox>
                                    <StyleCollectionMainCardImage
                                        src={dataCard.imgSrc}
                                    />
                                    <StyleCollectionMainCardSpanColor>
                                        {dataCard.color}
                                    </StyleCollectionMainCardSpanColor>
                                    <StyleCollectionMainCardSpanItem>
                                        {dataCard.name}
                                    </StyleCollectionMainCardSpanItem>
                                    <StyleCollectionMainCardSpanItem>
                                        {formatMessage(
                                            { ...messages.PRICE_FORMAT },
                                            { price: dataCard.price }
                                        )}
                                    </StyleCollectionMainCardSpanItem>
                                    <StyleCollectionMainCardUpdateBox>
                                        <span>
                                            {formatMessage(
                                                { ...messages.LAST_UPDATE },
                                                { date: dataCard.lastUpdate }
                                            )}
                                        </span>
                                        <StyleCollectionMainCardSeenBox>
                                            <EyeBlueIcon />
                                            <span>{dataCard.seen}</span>
                                        </StyleCollectionMainCardSeenBox>
                                    </StyleCollectionMainCardUpdateBox>
                                </StyleCollectionMainCardBox>
                            </>
                        );
                    })}
                </StyleCollectionCardSection>
            </StyleCollectionMainWrapper>
        </StyleCollectionSection>
    );
};
export default TabletCollection;
