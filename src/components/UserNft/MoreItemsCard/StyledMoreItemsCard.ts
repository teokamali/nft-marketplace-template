import styled from "styled-components";
import tw from "twin.macro";

export const StyleMoreItemsCardMainCardBox = styled.div`
${tw`flex flex-col  border-[1px] border-[#dcdcdc]  relative rounded-[10px] shadow-md `}
`;
export const StyleMoreItemsCardMainCardImage = styled.img`
${tw`w-full max-h-[230px] object-cover rounded-t-[10px] `}
`;
export const StyleMoreItemsCardMainCardSpanID = styled.span`
${tw`flex flex-row justify-center text-black items-center w-[61px] h-[25px] rounded-br-[10px] bg-[#F9F9F9] absolute text-[10px] `}
`;
export const StyleMoreItemsCardMainCardSpanItem = styled.span`
${tw`flex flex-row  items-center py-[10px]  
 border-b-[1px] border-[rgba(33, 33, 33, 0.3)] dark:border-[#dcdcdc] mx-[18px] text-[12px] text-black dark:text-[#dcdcdc]`}
`;
export const StyleMoreItemsCardMainCardUpdateBox = styled.div`
${tw`flex flex-row justify-between  items-center py-[10px] 
  mx-[18px] text-[10px] text-purple-6 `}
`;
export const StyleMoreItemsCardMainCardSeenBox = styled.div`
${tw`flex flex-row gap-[5px]  items-center `}`;
