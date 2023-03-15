import styled, { css } from "styled-components";
import tw from "twin.macro";

export interface IBgImageProps {
    bgImage: string;
}
export interface IDisplay {
    statusVisible?: boolean
    quantityVisible?: boolean
    currencyVisible?: boolean
    filterVisible?: boolean
}
export const StyleCollectionSection = styled.div`
    ${tw`flex flex-col w-full   mx-auto   text-black dark:text-white mb-[30px]`}
`;
export const StyleCollectionHeaderSection = styled.div`
    ${tw`flex flex-col w-full   justify-center items-center h-[696px] relative`}
`;
export const StyleCollectionHeaderBackground = styled.div<IBgImageProps>(
    ({ bgImage }) => [
        tw`  w-full h-full opacity-60 absolute top-0`,
        css`
            background-image: url(${bgImage});
            background-size: 100% 100%;
            background-position: 100% 100%;
            background-repeat: no-repeat;
            filter: blur(8px);
        `,
    ]
);

export const StyleCollectionHeaderInfoSection = styled.div`
    ${tw`flex flex-col gap-[8px]  mt-[30px] justify-center items-center  absolute top-0`}
`;
export const StyleCollectionHeaderAvatarSection = styled.img`
    ${tw`rounded-[100%] w-[276px] h-[276px]`}
`;
export const StyleCollectionHeaderName = styled.h4`
    ${tw`font-bold `}
`;
export const StyleCollectionHeaderTitle = styled.span`
    ${tw`text-title1 font-normal `}
`;
export const StyleCollectionHeaderDesc = styled.span`
${tw`text-title2  text-[rgba(33, 33, 33, 0.6)]  font-light max-w-[600px] text-center `}
`;
export const StyleCollectionHeaderProfileInfoSection = styled.div`
${tw`flex flex-row gap-[27px] justify-between  mt-[10px] max-w-[590px]`}
`;
export const StyleCollectionHeaderProfileInfoBox = styled.div`
${tw`flex flex-col items-center justify-between  mt-[10px]`}
`;
export const StyleCollectionHeaderProfileInfoItemCount = styled.span`
${tw`text-title2 font-bold `}
`;
export const StyleCollectionHeaderProfileInfoItemName = styled.span`
${tw`text-title3 font-medium `}
`;
export const StyleCollectionHeaderSocialSection = styled.div`
${tw`flex flex-row gap-[36px] justify-between  mt-[10px] max-w-[500px] `}
`;
export const StyleCollectionHeaderSocialBox = styled.a`
${tw` flex flex-col justify-center   cursor-pointer`}
`;
export const StyleCollectionMainWrapper = styled.div`
${tw` flex flex-col justify-center   px-[100px] mt-[40px] `}
`;
export const StyleCollectionMainHeaderBox = styled.div`
${tw` flex flex-row   gap-[10px] items-center relative `}
`;
export const StyleCollectionMainHeaderItemFilterBox = styled.div`
${tw`flex flex-col absolute 
    top-0 left-0 border-[1px] border-[rgba(33, 33, 33, 0.5)]
    dark:border-[#dcdcdc] rounded-[8px] px-[10px] py-[10px]`
    }`;
export const StyleCollectionMainHeaderItemFilterBoxHeader = styled.div`
${tw`
    flex flex-row items-center gap-[80px] justify-between 
    cursor-pointer text-[20px] font-normal 
    border-b-[1px] border-[rgba(33, 33, 33, 0.3)]
    dark:border-[#dcdcdc]
`}`;
export const StyleCollectionMainHeaderItemFilterBodyBox = styled.div`
    ${tw`flex flex-col mt-[20px] pl-[7px] border-b-[1px] border-[rgba(33, 33, 33, 0.3)]
    dark:border-[#dcdcdc] gap-[10px] pb-[20px]`}`;
export const StyleCollectionMainHeaderItemFilterBodyItemHeaderBox = styled.div`
    ${tw`flex flex-row  items-center justify-between`}`;
export const StyleCollectionMainItemFilterBodyItemBox = styled.div`
    ${tw`flex flex-row  items-center justify-between pr-[7px]`}`;
export const StyleCollectionMainHeaderItemFilterBodyItemBox = styled.div`
    ${tw`flex flex-col gap-[13px] `}`;

export const StyleCollectionMainBodyFilter = styled.div<IDisplay>(
    ({ filterVisible }) => [
        tw` `,
        css`
                display: ${filterVisible ? "none" : null};
            `,
    ]
);


export const StyleCollectionMainHeaderItemFilterBodyItemBoxStatus = styled.div<IDisplay>(
    ({ statusVisible }) => [
        tw` flex flex-col gap-[13px]`,
        css`
                display: ${statusVisible ? "none" : null};
            `,
    ]
);
export const StyleCollectionMainHeaderItemFilterBodyItemBoxQuantity = styled.div<IDisplay>(
    ({ quantityVisible }) => [
        tw` flex flex-col gap-[13px]`,
        css`
                display: ${quantityVisible ? "none" : null};
            `,
    ]
);
export const StyleCollectionMainHeaderItemFilterBodyItemBoxCurrency = styled.div<IDisplay>(
    ({ currencyVisible }) => [
        tw` flex flex-col gap-[13px]`,
        css`
                display: ${currencyVisible ? "none" : null};
            `,
    ]
);
export const StyleCollectionMainFilterPriceBodyItemBox = styled.div`
    ${tw`flex flex-row items-center gap-[10px]`}`;
export const StyleCollectionMainHeaderItemFilterBodyItemHeaderNameBox = styled.h6`
    ${tw`font-normal`}`;
export const StyleCollectionMainHeaderItemFilterBodyItemHeaderItemBox = styled.span`
    ${tw`  font-normal text-[#717374] text-[15px]`}`;
export const StyleCollectionMainHeaderItemFilterBodyPriceBox = styled.div`
    ${tw` flex flex-row items-center justify-center border-[1px] border-[rgba(33, 33, 33, 0.3)]
    dark:border-[#dcdcdc] gap-[8px] pb-[20px] px-[15px] py-[10px] rounded-[8px]  `
    }`;
export const StyleCollectionMainItemFilterBodyItemPriceInput = styled.input`
    ${tw`  font-normal text-[#717374] text-[15px]`}`;

export const StyledCollectionIconWrapper = styled.div`
    ${tw`w-6 h-6 text-black dark:text-smokeWhite cursor-pointer`}
`;
export const StyleCollectionMainHeaderItemFilterName = styled.div`
${tw` flex flex-row items-center px-[10px] gap-[10px] text-[16px] min-w-[155px]`}
`;
export const SearchBox = styled.form`
    ${tw`w-[564px] h-[40px] mx-[10px] ml-[290px]  `}`;
export const StyleCollectionMainHeaderItemBox = styled.div`
${tw` flex flex-row items-center justify-center gap-[10px] dark:border-[#dcdcdc] border-[1px] border-[rgba(33, 33, 33, 0.5)] rounded-[8px] px-[27px] py-[10px] text-[14px] font-normal cursor-pointer`}
`;
export const StyleCollectionMainHeaderLayoutBox = styled.div`
${tw` flex flex-row items-center justify-center border-[1px] dark:border-[#dcdcdc] border-[rgba(33, 33, 33, 0.5)] rounded-[8px] px-[10px]  `}
`;
export const StyleCollectionMainHeaderLayout = styled.div`
${tw`pr-[5px] cursor-pointer py-[2px] border-r-[1px] dark:border-[#dcdcdc] w-6 h-6 text-black dark:text-smokeWhite border-[rgba(33, 33, 33, 0.5)] `}
`;
export const StyleCollectionMainHeaderLayout2 = styled.div`
${tw`px-[5px] cursor-pointer py-[2px] w-6 h-6 text-black dark:text-smokeWhite`}
`;
export const StyleCollectionMain = styled.div`
${tw`flex  flex-wrap  justify-center  ml-[330px] mt-[40px] gap-[20px]`}
`;
export const StyleCollectionMainCardBox = styled.div`
${tw`flex flex-col  border-[1px] border-[#dcdcdc]  relative rounded-[10px] shadow-md `}
`;
export const StyleCollectionMainCardImage = styled.img`
${tw`w-[212px] h-[230px] rounded-t-[10px] `}
`;
export const StyleCollectionMainCardSpanColor = styled.span`
${tw`flex flex-row justify-center items-center w-[61px] h-[25px] rounded-br-[10px] bg-[#F9F9F9] absolute text-[10px] `}
`;
export const StyleCollectionMainCardSpanItem = styled.span`
${tw`flex flex-row  items-center py-[10px]  
 border-b-[1px] border-[rgba(33, 33, 33, 0.3)] dark:border-[#dcdcdc] mx-[18px] text-[12px] text-black dark:text-[#dcdcdc]`}
`;
export const StyleCollectionMainCardUpdateBox = styled.div`
${tw`flex flex-row justify-between  items-center py-[10px] 
  mx-[18px] text-[10px] text-purple-6 `}
`;
export const StyleCollectionMainCardSeenBox = styled.div`
${tw`flex flex-row gap-[5px]  items-center `}`;
