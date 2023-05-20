import React from "react";
import {
    StyledUserTable,
    StyledUserTableHead,
    StyledUserTableTD,
    StyledUserTableTH,
    StyledUserTableBody,
    StyledUserTableTR,
    StyledFromPersonText,
} from "./StyledActivityTable";

function ActivityTable() {
    return (
        <StyledUserTable>
            <StyledUserTableHead>
                <StyledUserTableTH>Events</StyledUserTableTH>
                <StyledUserTableTH>From</StyledUserTableTH>
                <StyledUserTableTH>To</StyledUserTableTH>
                <StyledUserTableTH>Price</StyledUserTableTH>
                <StyledUserTableTH>Dates</StyledUserTableTH>
            </StyledUserTableHead>
            <StyledUserTableBody>
                <StyledUserTableTR>
                    <StyledUserTableTD>Transfer</StyledUserTableTD>
                    <StyledUserTableTD>
                        <StyledFromPersonText href="#">
                            F243564
                        </StyledFromPersonText>
                    </StyledUserTableTD>
                    <StyledUserTableTD>
                        <StyledFromPersonText href="#">
                            C0B1246
                        </StyledFromPersonText>
                    </StyledUserTableTD>
                    <StyledUserTableTD>26.75 ETH</StyledUserTableTD>
                    <StyledUserTableTD>3 months ago</StyledUserTableTD>
                </StyledUserTableTR>
                <StyledUserTableTR>
                    <StyledUserTableTD>Transfer</StyledUserTableTD>
                    <StyledUserTableTD>
                        <StyledFromPersonText href="#">
                            F243564
                        </StyledFromPersonText>
                    </StyledUserTableTD>
                    <StyledUserTableTD>
                        <StyledFromPersonText href="#">
                            C0B1246
                        </StyledFromPersonText>
                    </StyledUserTableTD>
                    <StyledUserTableTD>26.75 ETH</StyledUserTableTD>
                    <StyledUserTableTD>3 months ago</StyledUserTableTD>
                </StyledUserTableTR>
                <StyledUserTableTR>
                    <StyledUserTableTD>Sales</StyledUserTableTD>
                    <StyledUserTableTD>
                        <StyledFromPersonText href="#">
                            F243564
                        </StyledFromPersonText>
                    </StyledUserTableTD>
                    <StyledUserTableTD>
                        <StyledFromPersonText href="#">
                            C0B1246
                        </StyledFromPersonText>
                    </StyledUserTableTD>
                    <StyledUserTableTD>26.75 ETH</StyledUserTableTD>
                    <StyledUserTableTD>3 months ago</StyledUserTableTD>
                </StyledUserTableTR>
                <StyledUserTableTR>
                    <StyledUserTableTD>Transfer</StyledUserTableTD>
                    <StyledUserTableTD>
                        <StyledFromPersonText href="#">
                            F243564
                        </StyledFromPersonText>
                    </StyledUserTableTD>
                    <StyledUserTableTD>
                        <StyledFromPersonText href="#">
                            C0B1246
                        </StyledFromPersonText>
                    </StyledUserTableTD>
                    <StyledUserTableTD>26.75 ETH</StyledUserTableTD>
                    <StyledUserTableTD>3 months ago</StyledUserTableTD>
                </StyledUserTableTR>
            </StyledUserTableBody>
        </StyledUserTable>
    );
}

export default ActivityTable;
