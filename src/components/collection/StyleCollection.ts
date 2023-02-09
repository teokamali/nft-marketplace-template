import styled, { css } from "styled-components";
import tw from "twin.macro";

export interface IBgImageProps {
    bgImage: string;
}
export const StyleCollectionSection = styled.div`
    ${tw`flex flex-col w-full   mx-auto   text-black dark:text-white mb-[30px]`}
`;
// export const StyleCollectionHeaderSection = styled.div`
//     ${tw`flex flex-col w-full   justify-center items-center h-[696px] bg-[#ff0000]`}
// `;
export const StyleCollectionHeaderSection = styled.div<IBgImageProps>(
    ({ bgImage }) => [
        tw`  flex flex-col w-full   justify-center items-center h-[696px] opacity-50`,
        css`
            background-image: url(${bgImage});
            background-size: 100% 100%;
            background-position: 100% 100%;
            background-repeat: no-repeat;
        `,
    ]
);
export const StyleCollectionHeaderAvatarSection = styled.img`
    ${tw`rounded-[100%] w-[276px] h-[276px]`}
`;
