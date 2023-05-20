import React, { useCallback, useState } from "react";
import { ReactFC } from "src/types/types";
import { Swiper, useSwiper,SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ButtonNext, ButtonPrev, SliderWrapper } from "./styledSlider";

interface ISlider {
    children: any;
    breakpoints?: any;
}
const SwiperButtonNext = ({ onClick }: { onClick: () => void }) => {
    return;
};
const SwiperButtonPrev = ({ onClick }: { onClick: () => void }) => {
    return;
};
const defaultBreakpoints = {
    768: {
        slidesPerView: 3,
        spaceBetween: 20,
    },
    1024: {
        slidesPerView: 4,
        spaceBetween: 50,
    },
}
const Slider = ({ children, breakpoints = defaultBreakpoints, ...props }: ISlider) => {
    const [swiperRef, setSwiperRef] = useState<any>();
    const swiper = useSwiper();

    return (
        <SliderWrapper>
            <Swiper
                className="mySlider"
                slidesPerView={2}
                spaceBetween={20}
                grabCursor
                modules={[Navigation]}
                onSwiper={s => {
                    setSwiperRef(s);
                }}
                breakpoints={breakpoints}
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
