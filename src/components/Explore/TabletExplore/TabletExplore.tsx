import { useIntl } from "react-intl";
import { StyleExploreHeaderSection, StyleExploreHeaderOpratorSection, StyleExploreHeaderLeftTextBox, StyleExploreHeaderSLeftTextDesc, StyleExploreHeaderSLeftTextTitle, StyleExploreWraper, StyleExploreHeaderCenterSection, StyleExploreHeaderCenterTitleText, StyleExploreHeaderCenterDecsText, StyleExploreMainSection, StyleTradingCategoriesCardBox, StyleTradingCategoriesCardImage, StyleTradingCategoriesCardTextBox, StyleTradingCategoriesThumbnailBox, StyleTradingCategoriesCardText } from "./StyleTabletExplore"
import messages from "../messages";
import ChevronLeftIcon from "public/Icon/ChevronLeftIcon";
import ChevronRightIcon from "public/Icon/ChevronRightIcon";
import OrginalIcon from "public/Icon/OrginalIcon";


interface IExplpreProps {
    id: number;
    url: string;
    text: string;
    checked?: boolean
}
type Props = {
    optionsExplore: IExplpreProps[];
};


const TabletExplore = ({ optionsExplore }: Props) => {
    const { formatMessage } = useIntl();

    return (
        <StyleExploreWraper>
            <StyleExploreHeaderSection>
                <StyleExploreHeaderOpratorSection>
                    <ChevronLeftIcon />
                    <StyleExploreHeaderLeftTextBox>
                        <StyleExploreHeaderSLeftTextTitle>{formatMessage({ ...messages.ART })}</StyleExploreHeaderSLeftTextTitle>
                        <StyleExploreHeaderSLeftTextDesc>{formatMessage({ ...messages.BEFORE })}</StyleExploreHeaderSLeftTextDesc>
                    </StyleExploreHeaderLeftTextBox>
                </StyleExploreHeaderOpratorSection>
                <StyleExploreHeaderCenterSection>
                    <StyleExploreHeaderCenterTitleText>
                        {formatMessage({ ...messages.EXPLORE_PHTOGRAPHY })}
                    </StyleExploreHeaderCenterTitleText>
                    <StyleExploreHeaderCenterDecsText>
                        {formatMessage({ ...messages.DESC_EXPLORE_PHTOGRAPHY })}
                    </StyleExploreHeaderCenterDecsText>
                </StyleExploreHeaderCenterSection>
                <StyleExploreHeaderOpratorSection >
                    <StyleExploreHeaderLeftTextBox >
                        <StyleExploreHeaderSLeftTextTitle>{formatMessage({ ...messages.MUSIC })}</StyleExploreHeaderSLeftTextTitle>
                        <StyleExploreHeaderSLeftTextDesc>{formatMessage({ ...messages.NEXT })}</StyleExploreHeaderSLeftTextDesc>
                    </StyleExploreHeaderLeftTextBox>
                    <ChevronRightIcon />
                </StyleExploreHeaderOpratorSection>
            </StyleExploreHeaderSection>
            <StyleExploreMainSection>
                {optionsExplore.map((data, index) => {
                    return (
                        <StyleTradingCategoriesCardBox key={index} style={{ paddingBottom: "20px" }}    >
                            <StyleTradingCategoriesCardImage src={data.url} alt="" />
                            <StyleTradingCategoriesCardTextBox>
                                <div style={{ width: "112px", height: "80px", }}>
                                    <StyleTradingCategoriesThumbnailBox style={{ backgroundImage: `url(${data.url})` }} />
                                </div>
                                <StyleTradingCategoriesCardText >
                                    {data.text}
                                    {data.checked ? <OrginalIcon /> : null}

                                </StyleTradingCategoriesCardText>
                            </StyleTradingCategoriesCardTextBox>
                        </StyleTradingCategoriesCardBox>
                    )
                })}
            </StyleExploreMainSection>

        </StyleExploreWraper>
    )
}
export default TabletExplore