import React from "react";
import Modal from "src/components/Common/Modal/Modal";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { openAddProperty } from "src/redux/slices/modals/modalsSlice";
import AddableInput from "../../AddableInput/AddableInput";
import { Properties } from "../../types";
import { StyledInputsWrapper } from "./StyledAddPropertyModal";

export default function AddPropertyModal({
    onSaveHandler,
    values,
}: {
    onSaveHandler: (e: Properties[]) => void;
    values: Properties[];
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
                <AddableInput onSave={e => onSaveHandler(e)} values={values} />
            </StyledInputsWrapper>
        </Modal>
    );
}
