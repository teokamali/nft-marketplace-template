import VerifiedIcon from "public/Icon/VerifiedIcon";
import React from "react";
import {
    StyleTradingCategoriesCardBox,
    StyleTradingCategoriesCardImage,
    StyleTradingCategoriesCardText,
    StyleTradingCategoriesCardTextBox,
    StyleTradingCategoriesThumbnailBox,
} from "./StyledTrendingCard";

interface IProps {
    data: {
        checked: boolean;
        id: number;
        text: string;
        url: string;
    };
}

const TrendingCard = ({ data }: IProps) => {
    return (
        <StyleTradingCategoriesCardBox style={{ paddingBottom: "20px" }}>
            <StyleTradingCategoriesCardImage src={data.url} alt="" />
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
                    <span>{data.text}</span>
                    {data.checked ? <VerifiedIcon /> : null}
                </StyleTradingCategoriesCardText>
            </StyleTradingCategoriesCardTextBox>
        </StyleTradingCategoriesCardBox>
    );
};

export default TrendingCard;
