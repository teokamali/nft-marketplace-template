import { useIntl } from "react-intl";
import { StyledPumpOrDumpWrapper, StyledRankingCollectionName, StyledRankingCollectionWrapper, StyledRankingImage, StyledRankingNormalTd, StyledRankingNumber, StyledRankingTable, StyledRankingTableBody, StyledRankingTableRow, StyledRankingTableThead, StyledRankingTableTheadTH, StyledRankingTd, StyledVerifiedIconWrapper, StyleRankingFilterButton, StyleRankingFilterItemBox, StyleRankingFilterSection, StyleRankingHeaderSection, StyleRankingHeaderTitleSection, StyleRankingHeaderTitleText, StyleRankingHeaderTitleTextDesc, StyleRankingWrapper } from "./StyleRanking"
import messages from "./messages";
import FilterListIcon from "public/Icon/FilterListIcon";
import MenuIcon from "public/Icon/MenuIcon";
import MenuBlueIcon from "public/Icon/MenuBlueIcon";
import CheckCircleIcon from "public/Icon/CheckCircleIcon";
import PumpOrDump from "../Common/PumpOrDump/PumpOrDump";
import abbrNum from "src/utils/abbrNum";
import { useDispatch } from "react-redux";
import { useAppSelector } from "src/redux/hooks";
import { openShowFilter } from "src/redux/slices/modals/modalsSlice";
import ChevronDownBlueIcon from "public/Icon/ChevronDownBlueIcon";


interface IProps {
    data: {
        avatar: string;
        name: string;
        isVerified: boolean;
        volume: number;
        last_24h: string;
        last_7D: string;
        floorPrice: number;
        Owner: number;
        items: number;
        Followers?: number;
    }[];
}

const Ranking = ({ data }: IProps) => {
    const { formatMessage } = useIntl();
    const dispatch = useDispatch();
    const { showFilter } = useAppSelector(state => state.modals);
    const handleOpenFilter = (e: any) => {
        e.stopPropagation()
        dispatch(openShowFilter(!showFilter));
    };
    const handleCloseFilter = () => {
        dispatch(openShowFilter(false));
    };
    return (
        <StyleRankingWrapper >
            <StyleRankingHeaderSection onClick={handleCloseFilter}>
                <StyleRankingFilterButton onClick={handleOpenFilter} style={{ zIndex: "100" }}>
                    <MenuBlueIcon />
                    {formatMessage({ ...messages.FILTERS })}
                </StyleRankingFilterButton>
                <StyleRankingHeaderTitleSection onClick={handleCloseFilter}>
                    <StyleRankingHeaderTitleText>
                        {formatMessage({ ...messages.RANKING })}
                    </StyleRankingHeaderTitleText>
                    <StyleRankingHeaderTitleTextDesc>
                        {formatMessage({ ...messages.RANKING_DESC })}
                    </StyleRankingHeaderTitleTextDesc>
                </StyleRankingHeaderTitleSection>
                <div onClick={handleCloseFilter}></div>
            </StyleRankingHeaderSection>
            <StyledRankingTable onClick={handleCloseFilter} isShowFilter={showFilter}>
                <StyledRankingTableThead >
                    <tr>
                        <StyledRankingTableTheadTH>#</StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.COLLECTIONS })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.VOLUME })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.LAST_24H })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.LAST_7D })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.FLOOR_PRICE })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.OWNER })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.ITEMS })}
                        </StyledRankingTableTheadTH>
                        <StyledRankingTableTheadTH>
                            {formatMessage({ ...messages.FOLLOWERS })}
                        </StyledRankingTableTheadTH>
                    </tr>
                </StyledRankingTableThead>
                <StyledRankingTableBody>
                    {data.map((item, i) => {
                        return (
                            <StyledRankingTableRow key={i}>
                                <StyledRankingTd>
                                    <StyledRankingNumber>
                                        {i + 1}
                                    </StyledRankingNumber>
                                </StyledRankingTd>
                                <StyledRankingTd>
                                    <StyledRankingCollectionWrapper>
                                        <StyledRankingImage
                                            src={item.avatar}
                                            alt={item.name}
                                        />
                                        <StyledRankingCollectionName>
                                            {item.name}
                                        </StyledRankingCollectionName>
                                        {item.isVerified && (
                                            <StyledVerifiedIconWrapper>
                                                <CheckCircleIcon />
                                            </StyledVerifiedIconWrapper>
                                        )}
                                    </StyledRankingCollectionWrapper>
                                </StyledRankingTd>
                                <StyledRankingNormalTd>
                                    {abbrNum({
                                        number: item.volume,
                                        decPlaces: 0,
                                    })}
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd>
                                    <StyledPumpOrDumpWrapper>
                                        <PumpOrDump data={item.last_24h} />
                                    </StyledPumpOrDumpWrapper>
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd>
                                    <StyledPumpOrDumpWrapper>
                                        <PumpOrDump data={item.last_7D} />
                                    </StyledPumpOrDumpWrapper>
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd>
                                    {item.floorPrice} Eth
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd>
                                    {abbrNum({
                                        number: item.Owner,
                                        decPlaces: 0,
                                    })}
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd>
                                    {abbrNum({
                                        number: item.items,
                                        decPlaces: 0,
                                    })}
                                </StyledRankingNormalTd>
                                <StyledRankingNormalTd style={{ paddingLeft: "20px" }}>
                                    {abbrNum({
                                        number: item.Followers,
                                        decPlaces: 0,
                                    })}
                                </StyledRankingNormalTd>
                            </StyledRankingTableRow>
                        );
                    })}
                </StyledRankingTableBody>
            </StyledRankingTable>
            {showFilter && (
                <StyleRankingFilterSection>
                    <StyleRankingFilterItemBox>
                        {formatMessage({ ...messages.LAST_HOURS })}
                        <button>
                            <ChevronDownBlueIcon />
                        </button>
                    </StyleRankingFilterItemBox>
                    <StyleRankingFilterItemBox>
                        {formatMessage({ ...messages.ALL_CATEGORIES })}
                        <button>
                            <ChevronDownBlueIcon />
                        </button>
                    </StyleRankingFilterItemBox>
                    <StyleRankingFilterItemBox>
                        {formatMessage({ ...messages.ALL_CHAIN })}
                        <button>
                            <ChevronDownBlueIcon />
                        </button>
                    </StyleRankingFilterItemBox>
                </StyleRankingFilterSection>
            )}
        </StyleRankingWrapper>
    )
}
export default Ranking