import React from "react";
import Modal from "src/components/Common/Modal/Modal";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import {
    openAddLevel,
    openAddProperty,
} from "src/redux/slices/modals/modalsSlice";
import AddableInput from "../../AddableInput/AddableInput";
import AddableLevel from "../../AddableLevel/AddableLevel";
import { Levels } from "../../types";
import { StyledInputsWrapper } from "./StyledAddLevelsModal";

export default function AddLevelsModal({
    onSaveHandler,
    values,
}: {
    onSaveHandler: (e: Levels[]) => void;
    values: Levels[];
}) {
    const { addLevel } = useAppSelector(state => state.modals);
    const dispatch = useAppDispatch();

    return (
        <Modal
            animation="fade"
            // header={<Header />}
            title="Add Level"
            isOpen={addLevel}
            onClose={() => dispatch(openAddLevel(false))}
        >
            <StyledInputsWrapper>
                <AddableLevel onSave={e => onSaveHandler(e)} values={values} />
            </StyledInputsWrapper>
        </Modal>
    );
}
