import VerifiedIcon from "public/Icon/VerifiedIcon";
import React from "react";
import {
    StyleTradingCategoriesCardBox,
    StyleTradingCategoriesCardText,
    StyleTradingCategoriesCardTextBox,
    StyleTradingCategoriesThumbnailBox,
    StyledTradingCategoriesCardBoxImageWrapper,
} from "./StyledTrendingCard";
import Image from "next/image";

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
        <StyleTradingCategoriesCardBox>
            <StyledTradingCategoriesCardBoxImageWrapper>
                <Image
                    src={data.url}
                    alt=""
                    fill
                    style={{
                        position: "absolute",
                        aspectRatio: "16/9",
                        top: "0",
                        left: "0",
                        right: "0",
                    }}
                />
            </StyledTradingCategoriesCardBoxImageWrapper>
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
