import React from "react";
import Modal from "src/components/Common/Modal/Modal";
import { useAppDispatch, useAppSelector } from "src/redux/hooks";
import { openAddStat } from "src/redux/slices/modals/modalsSlice";
import AddableStat from "../../AddableStat/AddableStat";

import { Stats } from "../../types";
import { StyledInputsWrapper } from "./StyledAddStatsModal";

export default function AddStatsModal({
    onSaveHandler,
    values,
}: {
    onSaveHandler: (e: Stats[]) => void;
    values: Stats[];
}) {
    const { addStat } = useAppSelector(state => state.modals);
    const dispatch = useAppDispatch();

    return (
        <Modal
            animation="fade"
            title="Add Level"
            isOpen={addStat}
            onClose={() => dispatch(openAddStat(false))}
        >
            <StyledInputsWrapper>
                <AddableStat onSave={e => onSaveHandler(e)} values={values} />
            </StyledInputsWrapper>
        </Modal>
    );
}
