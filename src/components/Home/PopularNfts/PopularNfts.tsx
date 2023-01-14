import React from "react";
import Card from "./Card/Card";
import {
    MobilePopularNftsWrapper,
    PopularNftsTitle,
    PopularNftsWrapper,
} from "./StyledPopularNft";
import { ExceptMobile, Mobile } from "src/utils/BreakPoints";
import Slider from "src/components/Common/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import { useIntl } from "react-intl";
import messages from "./messages";

// types
interface testNft {
    id: number;
    url: string;
    title: string;
    description: string;
}
type Props = {
    data: testNft[];
};

const PopularNfts = ({ data }: Props) => {
    const { formatMessage } = useIntl();
    return (
        <PopularNftsWrapper >
            <PopularNftsTitle>
                {formatMessage({ ...messages.Notable_Drops })}
            </PopularNftsTitle>
            <ExceptMobile>
                <Slider>
                    {data.map(nft => (
                        <SwiperSlide key={nft.id}>
                            <Card
                                src={nft.url}
                                title={nft.title}
                                description={nft.description}
                            />
                        </SwiperSlide>
                    ))}
                </Slider>
            </ExceptMobile>
            <Mobile>
                <MobilePopularNftsWrapper>
                    {data.slice(0, 4).map(nft => (
                        <Card
                            key={nft.id}
                            src={nft.url}
                            title={nft.title}
                            description={nft.description}
                        />
                    ))}
                </MobilePopularNftsWrapper>
            </Mobile>
        </PopularNftsWrapper>
    );
};

export default PopularNfts;
