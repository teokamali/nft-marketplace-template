import { useIntl } from "react-intl";
import {
    StyleExploreHeaderCenterTitleText,
    StyleExploreHeaderOpratorBox,
    StyleExploreHeaderOpratorSection,
    StyleExploreHeaderOpratorTextBox,
    StyleExploreHeaderSection,
    StyleExploreHeaderSLeftDesc,
    StyleExploreHeaderSLeftTextDesc,
    StyleExploreHeaderSLeftTextTitle,
    StyleExploreMainSection,
    StyleExploreWraper,
    StyleTradingCategoriesCardBox,
    StyleTradingCategoriesCardImage,
    StyleTradingCategoriesCardText,
    StyleTradingCategoriesCardTextBox,
    StyleTradingCategoriesThumbnailBox,
} from "./StyleMobileExplore";
import ChevronLeftIcon from "public/Icon/ChevronLeftIcon";
import ChevronRightIcon from "public/Icon/ChevronRightIcon";
import VerifiedIcon from "public/Icon/VerifiedIcon";
import messages from "../messages";
import ChevronLeftSmallIcon from "public/Icon/ChevronLeftSmallIcon ";
import ChevronRightSmallIcon from "public/Icon/ChevronRightSmallIcon";

interface IExplpreProps {
    id: number;
    url: string;
    text: string;
    checked?: boolean;
}
type Props = {
    optionsExplore: IExplpreProps[];
};

const MobileExplore = ({ optionsExplore }: Props) => {
    const { formatMessage } = useIntl();

    return (
        <StyleExploreWraper>
            <StyleExploreHeaderSection>
                <StyleExploreHeaderSLeftTextTitle>
                    {formatMessage({ ...messages.EXPLORE_ART })}
                </StyleExploreHeaderSLeftTextTitle>
                <StyleExploreHeaderSLeftTextDesc>
                    {formatMessage({ ...messages.DESC_EXPLORE_PHTOGRAPHY })}
                </StyleExploreHeaderSLeftTextDesc>
            </StyleExploreHeaderSection>
            <StyleExploreHeaderOpratorSection>
                <StyleExploreHeaderOpratorBox>
                    <ChevronLeftSmallIcon />
                    <StyleExploreHeaderOpratorTextBox>
                        <StyleExploreHeaderCenterTitleText>
                            {formatMessage({ ...messages.PHOTOGRAPHY })}
                        </StyleExploreHeaderCenterTitleText>
                        <StyleExploreHeaderSLeftDesc>
                            {formatMessage({ ...messages.BEFORE })}
                        </StyleExploreHeaderSLeftDesc>
                    </StyleExploreHeaderOpratorTextBox>
                </StyleExploreHeaderOpratorBox>
                <StyleExploreHeaderOpratorBox>
                    <StyleExploreHeaderOpratorTextBox>
                        <StyleExploreHeaderCenterTitleText>
                            {formatMessage({ ...messages.MUSIC })}
                        </StyleExploreHeaderCenterTitleText>
                        <StyleExploreHeaderSLeftDesc>
                            {formatMessage({ ...messages.NEXT })}
                        </StyleExploreHeaderSLeftDesc>
                    </StyleExploreHeaderOpratorTextBox>
                    <ChevronRightSmallIcon />
                </StyleExploreHeaderOpratorBox>
            </StyleExploreHeaderOpratorSection>
            <StyleExploreMainSection>
                {optionsExplore.map((data, index) => {
                    return (
                        <StyleTradingCategoriesCardBox
                            key={index}
                            style={{ paddingBottom: "20px" }}
                        >
                            <StyleTradingCategoriesCardImage
                                src={data.url}
                                alt=""
                            />
                            <StyleTradingCategoriesCardTextBox>
                                <div style={{ width: "40px", height: "40px" }}>
                                    <StyleTradingCategoriesThumbnailBox
                                        style={{
                                            backgroundImage: `url(${data.url})`,
                                        }}
                                    />
                                </div>
                                <StyleTradingCategoriesCardText>
                                    <span>{data.text}</span>
                                    {data.checked ? <VerifiedIcon /> : null}
                                </StyleTradingCategoriesCardText>
                            </StyleTradingCategoriesCardTextBox>
                        </StyleTradingCategoriesCardBox>
                    );
                })}
            </StyleExploreMainSection>
        </StyleExploreWraper>
    );
};
export default MobileExplore;
