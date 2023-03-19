import styled, { css } from "styled-components";
import tw from "twin.macro";

export interface IBgImageProps {
    bgImage: string;
}
export const StyleExploreSection = styled.div`
    ${tw`flex mt-[40px] flex-col w-full max-w-[1640px] px-5 mx-auto   text-black dark:text-white`}
`;
export const StyleExploreHeaderSection = styled.div`
    ${tw`flex flex-col items-center gap-[10px]   `}
`;
export const StyleExploreHeaderTitle = styled.h4`
    ${tw`font-semibold  `}
`;
export const StyleExploreHeaderDesc = styled.span`
    ${tw`font-light text-title1 max-w-[695px] text-center opacity-60`}
`;
export const StyleExploreHeaderMobileTitle = styled.h4`
    ${tw`font-semibold text-title1 `}
`;
export const StyleExploreHeaderMobileDesc = styled.span`
    ${tw`font-light text-title3 max-w-[380px] text-center opacity-60`}
`;
export const StyleExploreMainSection = styled.div`
    ${tw`flex mt-[90px] mb-[20px] justify-center flex-wrap  gap-[50px]   `}
`;

export const StyleExploreCard = styled.div<IBgImageProps>(({ bgImage }) => [
    tw`  h-[554px]  rounded-[12px] flex flex-col justify-end min-w-[340px] pl-[28px] pb-[19px]`,
    css`
        background-image: url(${bgImage});
        background-size: 100% 100%;
        background-position: 100% 100%;
        background-repeat: no-repeat;
    `,
]);
export const StyleExploreImageTitle = styled.span`
    ${tw`font-semibold text-[#fff] text-title2`}
`;
export const StyleExploreImageDesc = styled.span`
    ${tw`font-medium text-[#F9F9F9] text-title3 opacity-80  `}
`;
export const StyleExploreMainMobileSection = styled.div`
    ${tw`flex flex-col items-center gap-[20px] mt-[90px] mb-[20px] justify-center     `}
`;

export const StyleExploreMobileCard = styled.div<IBgImageProps>(
    ({ bgImage }) => [
        tw`  h-[339px]  rounded-[12px] flex flex-col justify-end min-w-[280px] pl-[28px] pb-[19px]`,
        css`
            background-image: url(${bgImage});
            background-size: 100% 100%;
            background-position: 100% 100%;
            background-repeat: no-repeat;
        `,
    ]
);
