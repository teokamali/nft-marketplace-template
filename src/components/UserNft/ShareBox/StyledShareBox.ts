import styled from "styled-components";
import tw from "twin.macro";

export const StyledShareBoxWrapper = styled.ul`
    ${tw`bg-white dark:(bg-black) flex cursor-pointer border border-[#212121] rounded-[10px]`}
`
export const StyledShareBoxItem = styled.li`
    ${tw`w-full flex justify-center p-2 text-black dark:text-white hover:text-purple-5 transition-colors duration-200 border-r border-[#212121] last:border-0 `}
`