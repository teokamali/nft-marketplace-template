import Image from "next/image";
import EyeIcon from "public/Icon/EyeIcon";
import { CollapseProps } from "rc-collapse";
import React from "react";
import Button from "src/components/Common/Button/Button";
import { StyledIconWrapper } from "src/components/Common/ExplorePagesHeader/StyledExplorePagesHeader";
import { ExceptMobile, Mobile } from "src/utils/BreakPoints";
import ImagePreview from "../ImagePreview/ImagePreview";
import ShareBox from "../ShareBox/ShareBox";
import {
    StyledInformationSection,
    StyledMobileShareBoxWrapper,
    StyledNFTDetailsButtonWrapper,
    StyledNftDetailWrapper,
    StyledNftID,
    StyledNFTinformationColumn,
    StyledNFTTitle,
    StyledOwnerAndViewerWrapper,
    StyledOwnerText,
    StyledShareAndButtonsWrapper,
    StyledUserNFTRow,
    StyledViewIconWrapper,
    StyledViewWrapper,
} from "./StyledUserNFT";

export default function UserNFT() {
    return (
        <div>
            <StyledUserNFTRow>
                <Mobile>
                    <StyledMobileShareBoxWrapper>
                        <ShareBox />
                    </StyledMobileShareBoxWrapper>
                </Mobile>
                <StyledNFTinformationColumn>
                    <ImagePreview image="/images/nft-4.png" alt="asdasd" />
                </StyledNFTinformationColumn>
                <StyledNFTinformationColumn>
                    <StyledInformationSection>
                        <StyledNftDetailWrapper>
                            <StyledNFTTitle>Test</StyledNFTTitle>
                            <StyledNftID>#45365787</StyledNftID>
                            <StyledOwnerAndViewerWrapper>
                                <StyledOwnerText>owned by you</StyledOwnerText>
                                <StyledViewWrapper>
                                    <StyledViewIconWrapper>
                                        <EyeIcon />
                                    </StyledViewIconWrapper>
                                    <StyledOwnerText>0 View</StyledOwnerText>
                                </StyledViewWrapper>
                            </StyledOwnerAndViewerWrapper>
                        </StyledNftDetailWrapper>
                        <StyledShareAndButtonsWrapper>
                            <ExceptMobile>
                                <ShareBox />
                            </ExceptMobile>
                            <StyledNFTDetailsButtonWrapper>
                                <Button variant="outlined">Edit</Button>
                                <Button variant="normal">Sell</Button>
                            </StyledNFTDetailsButtonWrapper>
                        </StyledShareAndButtonsWrapper>
                    </StyledInformationSection>
                </StyledNFTinformationColumn>
            </StyledUserNFTRow>
        </div>
    );
}
