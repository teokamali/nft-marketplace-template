import Image from "next/image";
import AddNote from "public/Icon/AddNote";
import AgendaIcon from "public/Icon/AgendaIcon";
import ChevronDownIcon from "public/Icon/ChevronDownIcon";
import ChevronUpIcon from "public/Icon/ChevronUpIcon";
import DiscordIcon from "public/Icon/DiscordIcon";
import EyeIcon from "public/Icon/EyeIcon";
import StickyNote from "public/Icon/StickyNote";
import TopTrend from "public/Icon/TopTrend";
import React from "react";
import {
    Accordion,
    AccordionButton,
    AccordionPanel,
} from "src/components/Common/Accordion/Accordion";
import Button from "src/components/Common/Button/Button";
import { StyledIconWrapper } from "src/components/Common/ExplorePagesHeader/StyledExplorePagesHeader";
import { ExceptMobile, Mobile } from "src/utils/BreakPoints";
import ImagePreview from "../ImagePreview/ImagePreview";
import ShareBox from "../ShareBox/ShareBox";
import {
    StyledAccordionContent,
    StyledAccordionGroupItem,
    StyledAccordionGroupWrapper,
    StyledAccordionTitle,
    StyledButtonContentWrapper,
    StyledInformationSection,
    StyledMobileShareBoxWrapper,
    StyledNFTDetailsButtonWrapper,
    StyledNftDetailWrapper,
    StyledNftID,
    StyledNFTColumn,
    StyledNFTTitle,
    StyledOwnerAndViewerWrapper,
    StyledOwnerText,
    StyledShareAndButtonsWrapper,
    StyledUserNFTRow,
    StyledViewIconWrapper,
    StyledViewWrapper,
    StyledUserNFTContainer,
} from "./StyledUserNFT";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

export default function UserNFT() {
    const options = {
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false,
                offsetX: 0,
                offsetY: 0,
                tools: {},
            },
            zoom: {
                enabled: false,
            },
        },
        tooltip: {
            enabled: false,
        },
        dataLabels: {
            enabled: false,
        },
        colors: ["#4858EF"],
    };

    const series = [
        {
            name: "series-1",
            data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
    ];

    return (
        <StyledUserNFTContainer>
            <StyledUserNFTRow>
                <Mobile>
                    <StyledMobileShareBoxWrapper>
                        <ShareBox />
                    </StyledMobileShareBoxWrapper>
                </Mobile>
                <StyledNFTColumn>
                    <ImagePreview image="/images/nft-4.png" alt="asdasd" />
                </StyledNFTColumn>
                <StyledNFTColumn>
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
                    <StyledAccordionGroupWrapper>
                        <StyledAccordionGroupItem>
                            <Accordion defaultOpen disabled>
                                {({ open, disabled }) => (
                                    <>
                                        <AccordionButton
                                            open={!!open}
                                            disabled={disabled}
                                        >
                                            <StyledButtonContentWrapper>
                                                <StyledAccordionTitle>
                                                    <StickyNote />
                                                    Description
                                                </StyledAccordionTitle>
                                                {!disabled && (
                                                    <>
                                                        {open ? (
                                                            <ChevronUpIcon />
                                                        ) : (
                                                            <ChevronDownIcon />
                                                        )}
                                                    </>
                                                )}
                                            </StyledButtonContentWrapper>
                                        </AccordionButton>
                                        <AccordionPanel>
                                            <StyledAccordionContent>
                                                By test name 100 absoluteli
                                                zooted nft getting backed .
                                            </StyledAccordionContent>
                                        </AccordionPanel>
                                    </>
                                )}
                            </Accordion>
                        </StyledAccordionGroupItem>
                        <StyledAccordionGroupItem>
                            <Accordion>
                                {({ open, disabled }) => (
                                    <>
                                        <AccordionButton
                                            open={!!open}
                                            disabled={disabled}
                                        >
                                            <StyledButtonContentWrapper>
                                                <StyledAccordionTitle>
                                                    <AgendaIcon />
                                                    About Untitled Collection
                                                    #6474856
                                                </StyledAccordionTitle>
                                                {!disabled && (
                                                    <>
                                                        {open ? (
                                                            <ChevronUpIcon />
                                                        ) : (
                                                            <ChevronDownIcon />
                                                        )}
                                                    </>
                                                )}
                                            </StyledButtonContentWrapper>
                                        </AccordionButton>
                                        <AccordionPanel>
                                            <StyledAccordionContent>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipisicing elit.
                                                Atque explicabo suscipit
                                                deleniti molestiae accusantium
                                                quidem esse ex, laudantium cum
                                                recusandae non necessitatibus
                                                ratione saepe amet! Cupiditate
                                                id fugiat modi ipsum.
                                            </StyledAccordionContent>
                                        </AccordionPanel>
                                    </>
                                )}
                            </Accordion>
                        </StyledAccordionGroupItem>
                        <StyledAccordionGroupItem>
                            <Accordion>
                                {({ open, disabled }) => (
                                    <>
                                        <AccordionButton
                                            open={!!open}
                                            disabled={disabled}
                                        >
                                            <StyledButtonContentWrapper>
                                                <StyledAccordionTitle>
                                                    <AddNote />
                                                    Details
                                                </StyledAccordionTitle>
                                                {!disabled && (
                                                    <>
                                                        {open ? (
                                                            <ChevronUpIcon />
                                                        ) : (
                                                            <ChevronDownIcon />
                                                        )}
                                                    </>
                                                )}
                                            </StyledButtonContentWrapper>
                                        </AccordionButton>
                                        <AccordionPanel>
                                            <StyledAccordionContent>
                                                Lorem ipsum dolor sit, amet
                                                consectetur adipisicing elit.
                                                Amet id quos saepe enim
                                                inventore? Recusandae, saepe
                                                excepturi ex voluptates fugiat
                                                commodi delectus culpa, cumque,
                                                voluptatem facilis alias
                                                inventore. Ea, quidem.
                                            </StyledAccordionContent>
                                        </AccordionPanel>
                                    </>
                                )}
                            </Accordion>
                        </StyledAccordionGroupItem>
                    </StyledAccordionGroupWrapper>
                </StyledNFTColumn>
            </StyledUserNFTRow>
            <StyledUserNFTRow>
                <StyledNFTColumn>
                    <StyledAccordionGroupWrapper>
                        <Accordion defaultOpen>
                            {({ open, disabled }) => (
                                <>
                                    <AccordionButton
                                        open={!!open}
                                        disabled={disabled}
                                    >
                                        <StyledButtonContentWrapper>
                                            <StyledAccordionTitle>
                                                <TopTrend />
                                                Price History
                                            </StyledAccordionTitle>
                                            {!disabled && (
                                                <>
                                                    {open ? (
                                                        <ChevronUpIcon />
                                                    ) : (
                                                        <ChevronDownIcon />
                                                    )}
                                                </>
                                            )}
                                        </StyledButtonContentWrapper>
                                    </AccordionButton>
                                    <AccordionPanel>
                                        <StyledAccordionContent>
                                            <Chart
                                                options={options}
                                                type="area"
                                                series={series}
                                            />
                                        </StyledAccordionContent>
                                    </AccordionPanel>
                                </>
                            )}
                        </Accordion>
                    </StyledAccordionGroupWrapper>
                </StyledNFTColumn>
                <StyledNFTColumn></StyledNFTColumn>
            </StyledUserNFTRow>
        </StyledUserNFTContainer>
    );
}
