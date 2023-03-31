import React from "react";
import {
    StyledUserTable,
    StyledUserTableHead,
    StyledUserTableTD,
    StyledUserTableTH,
    StyledUserTableBody,
    StyledUserTableTR,
    StyledFromPersonText,
} from "./StyledOffersTable";

function OffersTable() {
    return (
        <StyledUserTable>
            <StyledUserTableHead>
                <StyledUserTableTH>Price</StyledUserTableTH>
                <StyledUserTableTH>USD Price</StyledUserTableTH>
                <StyledUserTableTH>Floor Difference</StyledUserTableTH>
                <StyledUserTableTH>Expiration</StyledUserTableTH>
                <StyledUserTableTH>From</StyledUserTableTH>
            </StyledUserTableHead>
            <StyledUserTableBody>
                <StyledUserTableTR>
                    <StyledUserTableTD>0.02 WETH</StyledUserTableTD>
                    <StyledUserTableTD>$33.43</StyledUserTableTD>
                    <StyledUserTableTD>100% below</StyledUserTableTD>
                    <StyledUserTableTD>about 1 month</StyledUserTableTD>
                    <StyledFromPersonText href="#">
                        theolagendijk
                    </StyledFromPersonText>
                </StyledUserTableTR>
                <StyledUserTableTR>
                    <StyledUserTableTD>0.02 WETH</StyledUserTableTD>
                    <StyledUserTableTD>$33.43</StyledUserTableTD>
                    <StyledUserTableTD>100% below</StyledUserTableTD>
                    <StyledUserTableTD>about 1 month</StyledUserTableTD>
                    <StyledFromPersonText href="#">
                        theolagendijk
                    </StyledFromPersonText>
                </StyledUserTableTR>
                <StyledUserTableTR>
                    <StyledUserTableTD>0.02 WETH</StyledUserTableTD>
                    <StyledUserTableTD>$33.43</StyledUserTableTD>
                    <StyledUserTableTD>100% below</StyledUserTableTD>
                    <StyledUserTableTD>about 1 month</StyledUserTableTD>
                    <StyledFromPersonText href="#">
                        theolagendijk
                    </StyledFromPersonText>
                </StyledUserTableTR>
            </StyledUserTableBody>
        </StyledUserTable>
    );
}

export default OffersTable;
