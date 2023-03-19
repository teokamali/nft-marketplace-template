import React, { useRef, ReactNode } from "react";
import { ReactFC } from "src/types/types";
import { createPortal } from "react-dom";
import {
    StyledCloseButton,
    StyledHeaderTitle,
    StyledModal,
    StyledModalContent,
    StyledModalHeader,
    StyledModalHeaderWrapper,
    StyledModalOverLay,
    StyledSlideDown,
} from "./StyledModal";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { createGlobalStyle } from "styled-components";
import { CSSTransition } from "react-transition-group";

interface IModalProps {
    animation?: "fade" | "slide-down";
    header?: ReactNode;
    isOpen: boolean;
    title?: string;
    closeOnBackDropClick?: boolean;
    onClose: () => void;
}

const Modal: ReactFC<IModalProps> = ({
    isOpen,
    onClose,
    animation,
    title,
    closeOnBackDropClick = true,
    children,
    header,
}) => {
    const modalRef = useRef(null);
    const GlobalStyle = createGlobalStyle`
    .core-modal-fade-enter {
    opacity: 0;
    }
    .core-modal-fade-enter-active {
    opacity: 1;
    transition: opacity 300ms;
    }
    .core-modal-fade-exit {
    opacity: 1;
    }
    .core-modal-fade-exit-active {
    opacity: 0;
    transition: opacity 300ms;
    }

    .core-modal-slide-down-enter {
    top: -200px;
    }
    .core-modal-slide-down-enter-active {
    top: 20px;
    transition: all 300ms;
    }
    .core-modal-slide-down-enter-done{
    top: 20px;

    }
    .core-modal-slide-down-exit {
    top: 20px;
    }
    .core-modal-slide-down-exit-active {
    top: -200px;
    transition: all 300ms;
    }
  `;

    useOnClickOutside(modalRef, () => {
        if (!closeOnBackDropClick) {
            return;
        }
        onClose();
    });

    return createPortal(
        <>
            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames={
                    animation === "fade"
                        ? "core-modal-fade"
                        : "core-modal-slide-down"
                }
                unmountOnExit
            >
                <>
                    <GlobalStyle />
                    {animation === "fade" && (
                        <StyledModalOverLay>
                            <StyledModal ref={modalRef}>
                                {header ? (
                                    header
                                ) : (
                                    <StyledModalHeader>
                                        <StyledModalHeaderWrapper>
                                            <StyledCloseButton
                                                className="close-button"
                                                onClick={onClose}
                                            >
                                                &times;
                                            </StyledCloseButton>
                                            <StyledHeaderTitle>
                                                {title}
                                            </StyledHeaderTitle>
                                            <div></div>
                                        </StyledModalHeaderWrapper>
                                    </StyledModalHeader>
                                )}
                                <StyledModalContent>
                                    {children}
                                </StyledModalContent>
                            </StyledModal>
                        </StyledModalOverLay>
                    )}
                    {animation === "slide-down" && (
                        <StyledSlideDown>
                            <StyledModal ref={modalRef}>
                                {header ? (
                                    header
                                ) : (
                                    <StyledModalHeader>
                                        <StyledModalHeaderWrapper>
                                            <StyledCloseButton
                                                className="close-button"
                                                onClick={onClose}
                                            >
                                                &times;
                                            </StyledCloseButton>
                                        </StyledModalHeaderWrapper>
                                    </StyledModalHeader>
                                )}
                                <StyledModalContent>
                                    {children}
                                </StyledModalContent>
                            </StyledModal>
                        </StyledSlideDown>
                    )}
                </>
            </CSSTransition>
        </>,
        document.body
    );
};

export default Modal;
