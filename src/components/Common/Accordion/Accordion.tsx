import { Disclosure, Transition } from "@headlessui/react";
import ChevronDownIcon from "public/Icon/ChevronDownIcon";
import ChevronUpIcon from "public/Icon/ChevronUpIcon";
import { ReactNode } from "react";
import { ReactFC } from "src/types/types";
import {
    StyledAccordionWrapper,
    StyledAccordionButton,
    StyledAccordionTitle,
} from "./StyledAccordion";

interface IAccordionProps {
    disabled?: boolean;
    defaultOpen?: boolean;
    children: ({
        open,
        disabled,
    }: {
        open: boolean;
        disabled: boolean;
    }) => void;
}
interface IAccordionButtonProps {
    disabled?: boolean;
    open?: boolean;
}

export const Accordion = ({
    defaultOpen = false,
    disabled = false,
    children,
}: IAccordionProps) => {
    return (
        <Disclosure defaultOpen={defaultOpen}>
            {({ open }) => <>{children({ open, disabled })}</>}
        </Disclosure>
    );
};

export const AccordionButton: ReactFC<IAccordionButtonProps> = ({
    children,
    disabled,
    open = false,
}) => {
    return (
        <StyledAccordionButton hasBorderBottom={open} disabled={disabled}>
            {children}
        </StyledAccordionButton>
    );
};
export const AccordionPanel: ReactFC = ({ children }) => {
    return <Disclosure.Panel>{children}</Disclosure.Panel>;
};
