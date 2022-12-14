import styled from "styled-components";
import tw from "twin.macro";

export const LayoutWrapper = styled.div`
    ${tw`w-screen h-screen bg-layout-bg dark:bg-layout-bg-dark bg-no-repeat bg-center bg-cover`}
`;
export const LayoutMain = styled.main`
    ${tw`min-h-[100vh]`}
`;
