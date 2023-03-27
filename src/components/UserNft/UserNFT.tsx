import Image from "next/image";
import EyeIcon from "public/Icon/EyeIcon";
import React from "react";
import Button from "../Common/Button/Button";
import { StyledIconWrapper } from "../Common/ExplorePagesHeader/StyledExplorePagesHeader";
import {
    StyledInformationSection,
    StyledNftDetailWrapper,
    StyledNftID,
    StyledNFTImage,
    StyledNFTinformationColumn,
    StyledNFTTitle,
    StyledOwnerAndViewerWrapper,
    StyledUserNFTRow,
    StyledViewWrapper,
} from "./StyledUserNFT";

export default function UserNFT() {
    return (
        <div>
            <StyledUserNFTRow>
                <StyledNFTinformationColumn>
                    <StyledNFTImage src="/images/nft-6.png" alt="" />
                </StyledNFTinformationColumn>
                <StyledNFTinformationColumn>
                    <StyledInformationSection>
                        <StyledNftDetailWrapper>
                            <StyledNFTTitle>Test</StyledNFTTitle>
                            <StyledNftID>#45365787</StyledNftID>
                            <StyledOwnerAndViewerWrapper>
                                <span>owned by you</span>
                                <StyledViewWrapper>
                                    <StyledIconWrapper>
                                        <EyeIcon />
                                    </StyledIconWrapper>
                                    | View
                                </StyledViewWrapper>
                            </StyledOwnerAndViewerWrapper>
                        </StyledNftDetailWrapper>
                        <div>
                            <div>Share box</div>
                            <div>
                                <Button size="sm" variant="outlined">
                                    Edit
                                </Button>
                                <Button size="sm" variant="normal">
                                    Sell
                                </Button>
                            </div>
                        </div>
                    </StyledInformationSection>
                </StyledNFTinformationColumn>
            </StyledUserNFTRow>
        </div>
    );
}
