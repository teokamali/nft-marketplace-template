import { Disclosure } from "@headlessui/react";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledAccordionWrapper = styled.div`
${tw`w-full border-b border-gray-300/50`}
`
export const StyledAccordionButton = styled(Disclosure.Button) <{ hasBorderBottom: boolean }>`
${tw`w-full flex justify-between items-center p-2`}
${props => props.hasBorderBottom && tw`border-b border-b-gray-300/50`}
`

export const StyledAccordionTitle = styled.div`
${tw`flex justify-between items-center gap-2`}
`
