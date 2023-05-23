import { useIntl } from "react-intl";
import {
    StyleTradingCategorieDropDown,
    StyleTradingCategorieDropDownText,
    StyleTradingCategoriesButton,
    StyleTradingCategoriesCardMobile,
    StyleTradingCategoriesSection,
    StyleTradingCategoriesSectionMobile,
    StyleTradingCategoriesSliderSection,
    StyleTradingCategoriesTitleBox,
    StyleTradingCategoriesTitleDesc,
    StyleTradingCategoriesTitleDescMobile,
    StyleTradingCategoriesTitleText,
    StyleTradingCategoriesTitleTextMobile,
    StyleTradingCategoriesTitleTextone,
    StyleTradingCategoriesTitleTextoneMobile,
    StyleTradingCategoriesTitleTextTow,
} from "./StyleTradingCategories";
import messages from "./messages";
import Slider from "src/components/Common/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import Card from "../../../../public/Images/images/nft-2.png";
import { ExceptMobile, Mobile } from "src/utils/BreakPoints";
import OrginalIcon from "public/Icon/VerifiedIcon";
import { useAppSelector } from "src/redux/hooks";
import { useDispatch } from "react-redux";
import { openTradingCategories } from "src/redux/slices/modals/modalsSlice";
import TrendingCard from "src/components/Common/TrendingCard/TrendingCard";
import { TradingCategoriesType } from "src/types/types";
import { useRef, useState } from "react";
import {
    StyledTopCollectionDropdownButton,
    StyledTopCollectionDropdownItem,
    StyledTopCollectionDropdownList,
    StyledTopCollectionDropdownWrapper,
    StyledTopCollectionIconWrapper,
} from "../TopCollections/StyledTopCollections";
import ChevronDownIcon from "public/Icon/ChevronDownIcon";
import useOnClickOutside from "src/hooks/useOnClickOutside";

type Props = {
    TradingCategoriesData: TradingCategoriesType[];
};

const TradingCategories = ({ TradingCategoriesData }: Props) => {
    const itemDropdown: string[] = [
        "All categories",
        "solana NFTs",
        "Collectibles",
        "Domain names ",
        "Music",
        "Sports",
        "Virual worlds",
        "Sports",
        "Utility",
        "Trending cards",
    ];
    const { formatMessage } = useIntl();

    const [dropDown, setDropDown] = useState("All categories");
    const [showDropDown, setShowDropDown] = useState(false);
    const dropdownRef = useRef<any>(null);
    const toggleDropdown = () => {
        setShowDropDown(prev => !prev);
    };
    useOnClickOutside(dropdownRef, () => {
        setShowDropDown(false);
    });
    return (
        <>
            <ExceptMobile>
                <StyleTradingCategoriesSection>
                    <StyleTradingCategoriesTitleBox>
                        <StyleTradingCategoriesTitleText>
                            <StyleTradingCategoriesTitleTextone>
                                {formatMessage({ ...messages.TRENDING_IN })}
                            </StyleTradingCategoriesTitleTextone>

                            <StyledTopCollectionDropdownWrapper
                                ref={dropdownRef}
                            >
                                <StyledTopCollectionDropdownButton
                                    onClick={toggleDropdown}
                                >
                                    {dropDown}
                                    <StyledTopCollectionIconWrapper>
                                        <ChevronDownIcon />
                                    </StyledTopCollectionIconWrapper>
                                </StyledTopCollectionDropdownButton>
                                <StyledTopCollectionDropdownList
                                    show={showDropDown}
                                >
                                    {itemDropdown.map((item, index) => (
                                        <StyledTopCollectionDropdownItem
                                            key={index}
                                            onClick={e => {
                                                setDropDown(item);
                                                toggleDropdown();
                                            }}
                                        >
                                            {item}
                                        </StyledTopCollectionDropdownItem>
                                    ))}
                                </StyledTopCollectionDropdownList>
                            </StyledTopCollectionDropdownWrapper>
                        </StyleTradingCategoriesTitleText>
                        <StyleTradingCategoriesTitleDesc>
                            {formatMessage({
                                ...messages.COLLECTING_DIGITAL_ART,
                            })}
                        </StyleTradingCategoriesTitleDesc>
                    </StyleTradingCategoriesTitleBox>
                    <Slider
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                    >
                        <StyleTradingCategoriesSliderSection>
                            {TradingCategoriesData.map(data => (
                                <SwiperSlide key={data.id}>
                                    <TrendingCard data={data} />
                                </SwiperSlide>
                            ))}
                        </StyleTradingCategoriesSliderSection>
                    </Slider>
                    <StyleTradingCategoriesButton>
                        {formatMessage({ ...messages.EXPLORE })}
                    </StyleTradingCategoriesButton>
                </StyleTradingCategoriesSection>
            </ExceptMobile>
            <Mobile>
                <StyleTradingCategoriesSectionMobile>
                    <StyleTradingCategoriesTitleBox>
                        <StyleTradingCategoriesTitleText>
                            <StyleTradingCategoriesTitleTextone>
                                {formatMessage({ ...messages.TRENDING_IN })}
                            </StyleTradingCategoriesTitleTextone>
                            <StyledTopCollectionDropdownWrapper
                                ref={dropdownRef}
                            >
                                <StyledTopCollectionDropdownButton
                                    onClick={toggleDropdown}
                                >
                                    {dropDown}
                                    <StyledTopCollectionIconWrapper>
                                        <ChevronDownIcon />
                                    </StyledTopCollectionIconWrapper>
                                </StyledTopCollectionDropdownButton>
                                <StyledTopCollectionDropdownList
                                    show={showDropDown}
                                >
                                    {itemDropdown.map((item, index) => (
                                        <StyledTopCollectionDropdownItem
                                            key={index}
                                            onClick={e => {
                                                setDropDown(item);
                                                toggleDropdown();
                                            }}
                                        >
                                            {item}
                                        </StyledTopCollectionDropdownItem>
                                    ))}
                                </StyledTopCollectionDropdownList>
                            </StyledTopCollectionDropdownWrapper>
                        </StyleTradingCategoriesTitleText>
                        <StyleTradingCategoriesTitleDescMobile>
                            {formatMessage({
                                ...messages.COLLECTING_DIGITAL_ART,
                            })}
                        </StyleTradingCategoriesTitleDescMobile>
                    </StyleTradingCategoriesTitleBox>
                    {TradingCategoriesData.map((data, index) => (
                        <TrendingCard data={data} key={index} />
                    ))}
                    <StyleTradingCategoriesButton>
                        {formatMessage({ ...messages.EXPLORE })}
                    </StyleTradingCategoriesButton>
                </StyleTradingCategoriesSectionMobile>
            </Mobile>
        </>
    );
};
export default TradingCategories;
