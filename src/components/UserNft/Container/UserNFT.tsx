import Image from "next/image";
import AddNote from "public/Icon/AddNote";
import AgendaIcon from "public/Icon/AgendaIcon";
import ChevronDownIcon from "public/Icon/ChevronDownIcon";
import ChevronUpIcon from "public/Icon/ChevronUpIcon";
import DiscordIcon from "public/Icon/DiscordIcon";
import EyeIcon from "public/Icon/EyeIcon";
import StickyNote from "public/Icon/StickyNote";
import TopTrend from "public/Icon/TopTrend";
import React, { useEffect, useState } from "react";
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
    StyledChartDescriptionWrapper,
    StyledChartDescriptionItem,
    StyledCartAverageContentWrapper,
    StyledAverageText,
    StyledNFTDescription,
    StyledOffersAndListingTableWrapper,
    StyledActivityContentWrapper,
    StyledMoreItemsContentWrapper,
} from "./StyledUserNFT";
import dynamic from "next/dynamic";
import moment from "moment";
import SelectInput from "src/components/Common/SelectInput/SelectInput";
import ChartColumnIcon from "public/Icon/ChartColumnIcon";
import OffersTable from "../OffersTable/OffersTable";
import ListingTable from "../ListingTable/ListingTable";
import TransferIcon from "public/Icon/TransferIcon";
import ActivityTable from "../ActivityTable/ActivityTable";
import DashboardAltIcon from "public/Icon/DashboardAltIcon";
import { MoreItemsCard } from "../MoreItemsCard/MoreItemsCard";
import Slider from "src/components/Common/Slider/Slider";
import { SwiperSlide } from "swiper/react";

const Chart = dynamic(() => import("react-apexcharts"), {
    ssr: false,
});

export default function UserNFT() {
    const [state, setState] = useState({
        chartFilter: "all",
    });

    const lastThirtyDays = [...new Array(30)]
        .map((i, idx) =>
            moment().startOf("day").subtract(idx, "days").format("DD")
        )
        .reverse();
    const lastSevenDays = [...new Array(7)]
        .map((i, idx) =>
            moment().startOf("day").subtract(idx, "days").format("DD")
        )
        .reverse();

    const priceHistory = () => {
        if (state.chartFilter === "all") {
            return lastThirtyDays.map(day => Math.floor(Math.random() * 10));
        }
        if (state.chartFilter === "30d") {
            return lastThirtyDays.map(day => Math.floor(Math.random() * 10));
        }
        return lastSevenDays.map(day => Math.floor(Math.random() * 10));
    };

    const averagePrice = () => {
        let total = 0;
        let count = 0;
        priceHistory().forEach(function (item, index) {
            total += item;
            count++;
        });
        return total / count;
    };

    const options = {
        xaxis: {
            categories:
                state.chartFilter === "7d" ? lastSevenDays : lastThirtyDays,

            labels: {
                show: true,
                style: {
                    colors: "#ffffffb5",
                    fontSize: "12px",
                },
            },

            axisBorder: {
                show: true,
                color: "#ffffffb5",
                height: 1,
                width: "100%",
                offsetX: 0,
                offsetY: 0,
            },
            axisTicks: {
                show: true,
                borderType: "solid",
                color: "#ffffffb5",
                height: 6,
                offsetX: 0,
                offsetY: 0,
            },
        },
        yaxis: {
            labels: {
                show: true,
                style: {
                    colors: "#ffffffb5",
                    fontSize: "12px",
                },
            },
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
            data: priceHistory(),
        },
    ];
    const chartFilterOptions = [
        {
            label: "All Time",
            value: "all",
        },
        {
            label: "Last 7 Days",
            value: "7d",
        },
        {
            label: "Last 30 Days",
            value: "30d",
        },
    ];
    const ActivityFilterOptions = [
        {
            label: "Filter",
            value: "none",
        },
        {
            label: "Transfer",
            value: "transfer",
        },
        {
            label: "Sales",
            value: "sales",
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
                                <Button onClick={() => {}} variant="outlined">
                                    Edit
                                </Button>
                                <Button onClick={() => {}} variant="normal">
                                    Sell
                                </Button>
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
                                                <StyledNFTDescription>
                                                    By test name 100 absoluteli
                                                    zooted nft getting backed .
                                                </StyledNFTDescription>
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
                                                <StyledNFTDescription>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Atque explicabo
                                                    suscipit deleniti molestiae
                                                    accusantium quidem esse ex,
                                                    laudantium cum recusandae
                                                    non necessitatibus ratione
                                                    saepe amet! Cupiditate id
                                                    fugiat modi ipsum.
                                                </StyledNFTDescription>
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
                                                <StyledNFTDescription>
                                                    Lorem ipsum dolor sit, amet
                                                    consectetur adipisicing
                                                    elit. Amet id quos saepe
                                                    enim inventore? Recusandae,
                                                    saepe excepturi ex
                                                    voluptates fugiat commodi
                                                    delectus culpa, cumque,
                                                    voluptatem facilis alias
                                                    inventore. Ea, quidem.
                                                </StyledNFTDescription>
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
                                            <StyledChartDescriptionWrapper>
                                                <StyledChartDescriptionItem>
                                                    <SelectInput
                                                        isSearchable={false}
                                                        defaultValue={
                                                            chartFilterOptions[0]
                                                        }
                                                        onChange={filter => {
                                                            setState(prev => ({
                                                                ...prev,
                                                                chartFilter:
                                                                    //@ts-ignore
                                                                    filter.value,
                                                            }));
                                                        }}
                                                        options={
                                                            chartFilterOptions
                                                        }
                                                    />
                                                </StyledChartDescriptionItem>
                                                <StyledChartDescriptionItem>
                                                    <StyledCartAverageContentWrapper>
                                                        <span>
                                                            All time avg . price
                                                        </span>
                                                        <StyledAverageText>
                                                            {averagePrice().toFixed(
                                                                2
                                                            )}
                                                        </StyledAverageText>
                                                    </StyledCartAverageContentWrapper>
                                                </StyledChartDescriptionItem>
                                            </StyledChartDescriptionWrapper>
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
                <StyledNFTColumn>
                    <StyledOffersAndListingTableWrapper>
                        <StyledAccordionGroupWrapper>
                            <StyledAccordionGroupItem>
                                <Accordion defaultOpen>
                                    {({ open, disabled }) => (
                                        <>
                                            <AccordionButton
                                                open={!!open}
                                                disabled={disabled}
                                            >
                                                <StyledButtonContentWrapper>
                                                    <StyledAccordionTitle>
                                                        <ChartColumnIcon />
                                                        Offers
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
                                                    <OffersTable />
                                                </StyledAccordionContent>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </Accordion>
                            </StyledAccordionGroupItem>
                        </StyledAccordionGroupWrapper>

                        <StyledAccordionGroupWrapper>
                            <StyledAccordionGroupItem>
                                <Accordion defaultOpen>
                                    {({ open, disabled }) => (
                                        <>
                                            <AccordionButton
                                                open={!!open}
                                                disabled={disabled}
                                            >
                                                <StyledButtonContentWrapper>
                                                    <StyledAccordionTitle>
                                                        <ChartColumnIcon />
                                                        Offers
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
                                                    <ListingTable />
                                                </StyledAccordionContent>
                                            </AccordionPanel>
                                        </>
                                    )}
                                </Accordion>
                            </StyledAccordionGroupItem>
                        </StyledAccordionGroupWrapper>
                    </StyledOffersAndListingTableWrapper>
                </StyledNFTColumn>
            </StyledUserNFTRow>
            <StyledUserNFTRow>
                <StyledAccordionGroupWrapper>
                    <StyledAccordionGroupItem>
                        <Accordion defaultOpen>
                            {({ open, disabled }) => (
                                <>
                                    <AccordionButton
                                        open={!!open}
                                        disabled={disabled}
                                    >
                                        <StyledButtonContentWrapper>
                                            <StyledAccordionTitle>
                                                <TransferIcon />
                                                Item Activity
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
                                            <StyledActivityContentWrapper>
                                                <SelectInput
                                                    options={
                                                        ActivityFilterOptions
                                                    }
                                                    defaultValue={
                                                        ActivityFilterOptions[0]
                                                    }
                                                />
                                                <ActivityTable />
                                            </StyledActivityContentWrapper>
                                        </StyledAccordionContent>
                                    </AccordionPanel>
                                </>
                            )}
                        </Accordion>
                    </StyledAccordionGroupItem>
                </StyledAccordionGroupWrapper>
            </StyledUserNFTRow>
            <StyledUserNFTRow>
                <StyledAccordionGroupWrapper>
                    <StyledAccordionGroupItem>
                        <Accordion defaultOpen>
                            {({ open, disabled }) => (
                                <>
                                    <AccordionButton
                                        open={!!open}
                                        disabled={disabled}
                                    >
                                        <StyledButtonContentWrapper>
                                            <StyledAccordionTitle>
                                                <DashboardAltIcon />
                                                More From This Collection
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
                                            <StyledMoreItemsContentWrapper>
                                                <Slider>
                                                    <SwiperSlide>
                                                        <MoreItemsCard />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <MoreItemsCard />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <MoreItemsCard />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <MoreItemsCard />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <MoreItemsCard />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <MoreItemsCard />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <MoreItemsCard />
                                                    </SwiperSlide>
                                                    <SwiperSlide>
                                                        <MoreItemsCard />
                                                    </SwiperSlide>
                                                </Slider>
                                            </StyledMoreItemsContentWrapper>
                                        </StyledAccordionContent>
                                    </AccordionPanel>
                                </>
                            )}
                        </Accordion>
                    </StyledAccordionGroupItem>
                </StyledAccordionGroupWrapper>
            </StyledUserNFTRow>
        </StyledUserNFTContainer>
    );
}
