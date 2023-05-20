import CursorIcon from "public/Icon/CursorIcon";
import MoreVerticalIcon from "public/Icon/MoreVerticalIcon";
import ShareIcon from "public/Icon/ShareIcon";
import TurnBack from "public/Icon/TurnBack";
import React from "react";
import { StyledShareBoxWrapper, StyledShareBoxItem } from "./StyledShareBox";

export default function ShareBox() {
    return (
        <StyledShareBoxWrapper>
            <StyledShareBoxItem>
                <TurnBack />
            </StyledShareBoxItem>
            <StyledShareBoxItem>
                <CursorIcon />
            </StyledShareBoxItem>
            <StyledShareBoxItem>
                <ShareIcon />
            </StyledShareBoxItem>
            <StyledShareBoxItem>
                <MoreVerticalIcon />
            </StyledShareBoxItem>
        </StyledShareBoxWrapper>
    );
}
