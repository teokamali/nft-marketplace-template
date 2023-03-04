import React from "react";
import Modal from "src/components/Common/Modal/Modal";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { openAddProperty } from "src/redux/slices/modals/modalsSlice";
import AddableInput from "../../AddableInput/AddableInput";
import { AddableInputValue } from "../../AddableInput/AddableInputTypes";
import { StyledInputsWrapper } from "./StyledAddPropertyModal";

export default function AddPropertyModal({
    onSaveHandler,
}: {
    onSaveHandler: (e: AddableInputValue[]) => void;
}) {
    const { addProperty } = useAppSelector(state => state.modals);
    const dispatch = useAppDispatch();

    return (
        <Modal
            animation="fade"
            // header={<Header />}
            title="Add Properties"
            isOpen={addProperty}
            onClose={() => dispatch(openAddProperty(false))}
        >
            <StyledInputsWrapper>
                <AddableInput onSave={e => onSaveHandler(e)} />
            </StyledInputsWrapper>
        </Modal>
    );
}
