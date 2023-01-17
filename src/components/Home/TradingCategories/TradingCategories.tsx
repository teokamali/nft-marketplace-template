import { useIntl } from "react-intl";
import {
    StyleTradingCategorieDropDown,
    StyleTradingCategorieDropDownText,
    StyleTradingCategoriesButton,
    StyleTradingCategoriesCardBox,
    StyleTradingCategoriesCardImage,
    StyleTradingCategoriesCardMobile,
    StyleTradingCategoriesCardText,
    StyleTradingCategoriesCardTextBox,
    StyleTradingCategoriesSection,
    StyleTradingCategoriesSectionMobile,
    StyleTradingCategoriesSliderSection,
    StyleTradingCategoriesThumbnailBox,
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
import OrginalIcon from "public/Icon/OrginalIcon";
import { useAppSelector } from "src/redux/hooks";
import { useDispatch } from "react-redux";
import { openTradingCategories } from "src/redux/slices/modals/modalsSlice";
interface TradingCategoriesProps {
    id: number;
    url: string;
    text: string;
    checked?: boolean;
}
type Props = {
    TradingCategoriesData: TradingCategoriesProps[];
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
    const { TradingCategoriesd } = useAppSelector(state => state.modals);
    const dispatch = useDispatch();
    const handleOpen = (e: any) => {
        e.stopPropagation();
        dispatch(openTradingCategories(!TradingCategoriesd));
    };
    return (
        <>
            <ExceptMobile>
                <StyleTradingCategoriesSection>
                    <StyleTradingCategoriesTitleBox>
                        <StyleTradingCategoriesTitleText>
                            <StyleTradingCategoriesTitleTextone>
                                {formatMessage({ ...messages.TRENDING_IN })}
                            </StyleTradingCategoriesTitleTextone>
                            <StyleTradingCategoriesTitleTextTow
                                onClick={handleOpen}
                            >
                                {formatMessage({ ...messages.ALL_CATEGORIES })}
                                <svg
                                    width="16"
                                    height="8"
                                    viewBox="0 0 16 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.33301 0.666992L7.99967 7.33366L14.6663 0.666993"
                                        stroke="#5F6DF1"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </StyleTradingCategoriesTitleTextTow>
                            {TradingCategoriesd && (
                                <StyleTradingCategorieDropDown
                                    style={{ zIndex: "11" }}
                                >
                                    {itemDropdown.map((item, index) => {
                                        return (
                                            <StyleTradingCategorieDropDownText
                                                key={index}
                                            >
                                                {item}
                                            </StyleTradingCategorieDropDownText>
                                        );
                                    })}
                                </StyleTradingCategorieDropDown>
                            )}
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
                                    <StyleTradingCategoriesCardBox
                                        style={{ paddingBottom: "20px" }}
                                    >
                                        <StyleTradingCategoriesCardImage
                                            src={data.url}
                                            alt=""
                                        />
                                        <StyleTradingCategoriesCardTextBox>
                                            <div
                                                style={{
                                                    width: "112px",
                                                    height: "80px",
                                                }}
                                            >
                                                <StyleTradingCategoriesThumbnailBox
                                                    style={{
                                                        backgroundImage: `url(${data.url})`,
                                                    }}
                                                />
                                            </div>
                                            <StyleTradingCategoriesCardText>
                                                {data.text}
                                                {data.checked ? (
                                                    <OrginalIcon />
                                                ) : null}
                                            </StyleTradingCategoriesCardText>
                                        </StyleTradingCategoriesCardTextBox>
                                    </StyleTradingCategoriesCardBox>
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
                            <StyleTradingCategoriesTitleTextoneMobile>
                                {formatMessage({ ...messages.TRENDING_IN })}
                            </StyleTradingCategoriesTitleTextoneMobile>
                            <StyleTradingCategoriesTitleTextMobile
                                onClick={handleOpen}
                            >
                                {formatMessage({ ...messages.ALL_CATEGORIES })}
                                <svg
                                    width="16"
                                    height="8"
                                    viewBox="0 0 16 8"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.33301 0.666992L7.99967 7.33366L14.6663 0.666993"
                                        stroke="#5F6DF1"
                                        strokeWidth="1.25"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </StyleTradingCategoriesTitleTextMobile>
                            {TradingCategoriesd && (
                                <StyleTradingCategorieDropDown
                                    style={{ zIndex: "11" }}
                                >
                                    {itemDropdown.map((item, index) => {
                                        return (
                                            <StyleTradingCategorieDropDownText
                                                key={index}
                                            >
                                                {item}
                                            </StyleTradingCategorieDropDownText>
                                        );
                                    })}
                                </StyleTradingCategorieDropDown>
                            )}
                        </StyleTradingCategoriesTitleText>
                        <StyleTradingCategoriesTitleDescMobile>
                            {formatMessage({
                                ...messages.COLLECTING_DIGITAL_ART,
                            })}
                        </StyleTradingCategoriesTitleDescMobile>
                    </StyleTradingCategoriesTitleBox>
                    {TradingCategoriesData.map(data => (
                        <StyleTradingCategoriesCardBox
                            style={{ paddingBottom: "20px" }}
                            key={data.id}
                        >
                            <StyleTradingCategoriesCardImage
                                src={data.url}
                                alt=""
                            />
                            <StyleTradingCategoriesCardTextBox>
                                <div style={{ width: "112px", height: "50px" }}>
                                    <StyleTradingCategoriesThumbnailBox
                                        style={{
                                            backgroundImage: `url(${data.url})`,
                                        }}
                                    />
                                </div>
                                <StyleTradingCategoriesCardMobile>
                                    {data.text}
                                    {data.checked ? <OrginalIcon /> : null}
                                </StyleTradingCategoriesCardMobile>
                            </StyleTradingCategoriesCardTextBox>
                        </StyleTradingCategoriesCardBox>
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
