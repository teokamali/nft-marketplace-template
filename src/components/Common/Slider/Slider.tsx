import React, { useCallback, useState } from "react";
import { ReactFC } from "src/types/types";
import { Swiper, useSwiper } from "swiper/react";
import { Navigation } from "swiper";
import { ButtonNext, ButtonPrev, SliderWrapper } from "./styledSlider";

const SwiperButtonNext = ({ onClick }: { onClick: () => void }) => {
    return;
};
const SwiperButtonPrev = ({ onClick }: { onClick: () => void }) => {
    return;
};

const Slider: ReactFC = ({ children, ...props }) => {
    const [swiperRef, setSwiperRef] = useState<any>();
    const swiper = useSwiper();

    return (
        <SliderWrapper>
            <Swiper
                className="mySlider"
                slidesPerView={2}
                spaceBetween={20}
                navigation={{
                    enabled: true,
                }}
                grabCursor
                modules={[Navigation]}
                onSwiper={s => {
                    setSwiperRef(s);
                }}
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
                {...props}
            >
                {children}
            </Swiper>
            <ButtonNext onClick={() => swiperRef.slideNext()}></ButtonNext>
            <ButtonPrev onClick={() => swiperRef.slidePrev()}></ButtonPrev>
        </SliderWrapper>
    );
};

export default Slider;
