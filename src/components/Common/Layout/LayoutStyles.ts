import styled from "styled-components";
import tw from "twin.macro";

export const LayoutWrapper = styled.div`
    ${tw` min-h-screen bg-layout-bg dark:bg-layout-bg-dark bg-no-repeat bg-center bg-cover`}
`;
export const LayoutMain = styled.main`
    ${tw`w-full`}
`;
export const Container = styled.div`
    ${tw`w-full max-w-[1640px] px-7 mx-auto `}
`;
