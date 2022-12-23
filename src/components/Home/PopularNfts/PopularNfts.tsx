import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Card from "./Card/Card";
import {
    MobilePopularNftsWrapper,
    PopularNftsTitle,
    PopularNftsWrapper,
} from "./StyledPopularNft";
import { ExceptMobile, Mobile } from "src/utils/BreakPoints";

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
    return (
        <PopularNftsWrapper>
            <PopularNftsTitle>Notable Drops</PopularNftsTitle>
            <ExceptMobile>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={20}
                    navigation={{
                        enabled: true,
                    }}
                    grabCursor
                    modules={[Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {data.map(nft => (
                        <SwiperSlide key={nft.id}>
                            <Card
                                src={nft.url}
                                title={nft.title}
                                description={nft.description}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
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
