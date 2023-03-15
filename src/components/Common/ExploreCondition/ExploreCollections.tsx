import { useIntl } from "react-intl";
import { StyleExploreCard, StyleExploreHeaderDesc, StyleExploreHeaderMobileDesc, StyleExploreHeaderMobileTitle, StyleExploreHeaderSection, StyleExploreHeaderTitle, StyleExploreImageDesc, StyleExploreImageTitle, StyleExploreMainMobileSection, StyleExploreMainSection, StyleExploreMobileCard, StyleExploreSection } from "./StyleExploreCollections"
import messages from "./messages";
import abbrNum from "src/utils/abbrNum";
import { ExceptMobile, Mobile } from "src/utils/BreakPoints";
const imgSrc = "/images/explore.png"
export interface IExploreProps {
    data: IExploreDataProps[]
}
export interface IExploreDataProps {
    image: string;
    name: string
    collectionsCount: number
}



const ExploreCollections = ({ data }: IExploreProps) => {
    const { formatMessage } = useIntl();

    return (
        <StyleExploreSection>
            <ExceptMobile>
                <StyleExploreHeaderSection>
                    <StyleExploreHeaderTitle>
                        {formatMessage({ ...messages.EXPLORE_COLLECTIONS })}
                    </StyleExploreHeaderTitle>
                    <StyleExploreHeaderDesc>
                        {formatMessage({ ...messages.HEADER_DESC })}
                    </StyleExploreHeaderDesc>
                </StyleExploreHeaderSection>
                <StyleExploreMainSection>
                    {data.map((value, index) => {
                        return (
                            <StyleExploreCard key={index} bgImage={value.image}>
                                <StyleExploreImageTitle> {value.name}</StyleExploreImageTitle>
                                <StyleExploreImageDesc>
                                    {formatMessage({ ...messages.NUMBER_COLLECTIONS }, { number: abbrNum({ number: value.collectionsCount, decPlaces: 0 }) })}
                                </StyleExploreImageDesc>
                            </StyleExploreCard>
                        )
                    })}
                </StyleExploreMainSection>
            </ExceptMobile>
            <Mobile>
                <StyleExploreHeaderSection>
                    <StyleExploreHeaderMobileTitle>
                        {formatMessage({ ...messages.EXPLORE_COLLECTIONS })}
                    </StyleExploreHeaderMobileTitle>
                    <StyleExploreHeaderMobileDesc>
                        {formatMessage({ ...messages.HEADER_DESC })}
                    </StyleExploreHeaderMobileDesc>
                </StyleExploreHeaderSection>
                <StyleExploreMainMobileSection>
                    {data.map((value, index) => {
                        return (
                            <StyleExploreMobileCard key={index} bgImage={value.image}>
                                <StyleExploreImageTitle> {value.name}</StyleExploreImageTitle>
                                <StyleExploreImageDesc>
                                    {formatMessage({ ...messages.NUMBER_COLLECTIONS }, { number: abbrNum({ number: value.collectionsCount, decPlaces: 0 }) })}
                                </StyleExploreImageDesc>
                            </StyleExploreMobileCard>
                        )
                    })}

                </StyleExploreMainMobileSection>
            </Mobile>
        </StyleExploreSection>
    )
}
export default ExploreCollections