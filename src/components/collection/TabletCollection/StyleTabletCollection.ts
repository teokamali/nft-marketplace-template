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
    ${tw`flex flex-col w-full   justify-center items-center h-[466px] relative`}
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
    ${tw`rounded-[100%] w-[156px] h-[156px]`}
`;
export const StyleCollectionHeaderName = styled.h6`
    ${tw`font-bold `}
`;
export const StyleCollectionHeaderTitle = styled.span`
    ${tw`text-title2 font-normal `}
`;
export const StyleCollectionHeaderDesc = styled.span`
${tw`text-title3  text-[rgba(33, 33, 33, 0.6)]  font-light max-w-[350px] text-center `}
`;
export const StyleCollectionHeaderProfileInfoSection = styled.div`
${tw`flex flex-row gap-[13px] justify-between  mt-[5px] max-w-[290px]`}
`;
export const StyleCollectionHeaderProfileInfoBox = styled.div`
${tw`flex flex-col items-center justify-between  mt-[5px]`}
`;
export const StyleCollectionHeaderProfileInfoItemCount = styled.span`
${tw`text-title3 font-bold `}
`;
export const StyleCollectionHeaderProfileInfoItemName = styled.span`
${tw`flex-col  text-[8px] font-medium text-center `}
`;
export const StyleCollectionHeaderSocialSection = styled.div`
${tw`flex flex-row gap-[16px] justify-between  mt-[10px] max-w-[300px] `}
`;
export const StyleCollectionHeaderSocialBox = styled.a`
${tw` flex flex-col justify-center   cursor-pointer`}
`;
export const StyleCollectionMainWrapper = styled.div`
${tw` flex flex-col justify-center   px-[30px] mt-[30px]  gap-[20px] `}
`;
export const StyleSearchBoxSection = styled.div`
    ${tw`flex flex-row w-full `}
`;
export const SearchBox = styled.form`
    ${tw`w-full h-[40px]  `}
`;
export const StyleCollectionMainHeaderLayoutBox = styled.div`
${tw` flex flex-row items-center justify-center h-[40px] border-[1px] dark:border-[#dcdcdc] border-[rgba(33, 33, 33, 0.5)] rounded-[8px] px-[10px]  `}
`;
export const StyleCollectionMainHeaderLayout = styled.div`
${tw`pr-[5px] cursor-pointer py-[2px] border-r-[1px] dark:border-[#dcdcdc] w-6 h-6 text-black dark:text-smokeWhite border-[rgba(33, 33, 33, 0.5)] `}
`;
export const StyleCollectionMainHeaderLayout2 = styled.div`
${tw`px-[5px] cursor-pointer py-[2px] w-6 h-6 text-black dark:text-smokeWhite`}
`;
export const StyleItemFiltersSection = styled.div`
    ${tw`flex flex-row justify-between items-center gap-[5px] ml-[10px] `}
`;
export const StyleItemFiltersBox = styled.div`
${tw`flex min-h-[25px] flex-row gap-[5px] items-center  px-[5px] rounded-[8px]
border-[1px] border-[rgba(33, 33, 33, 0.3)] dark:border-[#dcdcdc] text-[8px] `}
`;
export const StyledCollectionIconWrapper = styled.div`
    ${tw`w-5 h-5 text-black dark:text-smokeWhite cursor-pointer`}
`;
export const StyleCollectionMainHeaderItemFilterBox = styled.div`
${tw`flex flex-col  w-full 
    top-0  border-[1px] border-[rgba(33, 33, 33, 0.5)]
    dark:border-[#dcdcdc] rounded-[8px] px-[20px] py-[10px]`
    }`;
// export const StyleCollectionMainHeaderItemFilterBoxHeader = styled.div`
// ${tw`
//     flex flex-row items-center  justify-between 
//     cursor-pointer text-[20px] font-normal 
//     border-b-[1px] border-[rgba(33, 33, 33, 0.3)]
//     dark:border-[#dcdcdc]
// `}`;

export const StyleCollectionMainHeaderItemFilterBoxHeader = styled.div<IDisplay>(
    ({ filterVisible }) => [
        tw`flex flex-row items-center  justify-between 
        cursor-pointer text-[20px] font-normal 
        border-b-[1px] border-[rgba(33, 33, 33, 0.3)]
        dark:border-[#dcdcdc] `,
        css`
        border-bottom: ${filterVisible ? "none" : ""};
        `,
    ]
);

export const StyleCollectionMainHeaderItemFilterName = styled.div`
${tw` flex flex-row items-center px-[10px] gap-[10px] text-[16px] min-w-[155px]`}
`;
export const StyleCollectionMainBodyFilter = styled.div<IDisplay>(
    ({ filterVisible }) => [
        tw` `,
        css`
            display: ${filterVisible ? "none" : null};
        `,
    ]
);
export const StyleCollectionMainHeaderItemFilterBodyBox = styled.div`
    ${tw`flex flex-col mt-[20px] pl-[7px] border-b-[1px] border-[rgba(33, 33, 33, 0.3)]
    dark:border-[#dcdcdc] gap-[10px] pb-[20px]`}`;
export const StyleCollectionMainHeaderItemFilterBodyItemHeaderBox = styled.div`
    ${tw`flex flex-row  items-center justify-between`}`;
export const StyleCollectionMainItemFilterBodyItemBox = styled.div`
    ${tw`flex flex-row  items-center justify-between pr-[7px]`}`;
export const StyleCollectionMainHeaderItemFilterBodyItemBox = styled.div`
    ${tw`flex flex-col gap-[13px] `}`;
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

export const StyleCollectionCardSection = styled.div`
    ${tw`flex  flex-wrap  justify-center mt-[10px] gap-[10px]`}
    `;

export const StyleCollectionMainCardBox = styled.div`
${tw`flex flex-col min-w-[250px] border-[1px] border-[#dcdcdc]  relative rounded-[10px] shadow-md `}
`;
export const StyleCollectionMainCardImage = styled.img`
${tw`w-[250px] h-[270px] rounded-t-[10px] `}
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