import Head from "next/head";
import { useRouter } from "next/router";
import ChevronLeft from "public/Icon/ChevronLeft";
import ChevronRight from "public/Icon/ChevronRight";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Category } from "src/types/types";
import messages from "./messages";
import {
    StyledExplorePagesHeaderWrapper,
    StyledMainContentWrapper,
    StyledNavigationWrapper,
    StyledIconWrapper,
    StyledNavigationCategoryName,
    StyledButtonInfoText,
    StyledNavigationLink,
    StyledMainContentTitle,
    StyledMainContentDescription,
    StyledMobileExplorePagesHeaderWrapper,
    StyledMobileMainContentWrapper,
    StyledMobileHeaderWrapper,
} from "./StyledExplorePagesHeader";
import { Mobile, ExceptMobile } from "../../../utils/BreakPoints";

interface IProps {
    categories: Category[];
}
const ExplorePagesHeader = ({ categories }: IProps) => {
    const { query } = useRouter();
    const { formatMessage } = useIntl();
    const [category, setCategory] = useState<Category>();
    const [prevCategory, setPrevCategory] = useState<Category | null>();
    const [nextCategory, setNextCategory] = useState<Category | null>();
    const currentCategoryIndex = categories.findIndex(
        item => item.slug === query.category
    );
    useEffect(() => {
        if (query.category) {
            setCategory(categories[currentCategoryIndex]);
            if (currentCategoryIndex - 1 !== -1) {
                setPrevCategory(categories[currentCategoryIndex - 1]);
            } else {
                setPrevCategory(categories[categories.length - 1]);
            }
            if (currentCategoryIndex + 1 === categories.length) {
                setNextCategory(categories[0]);
            } else {
                setNextCategory(categories[currentCategoryIndex + 1]);
            }
        }
    }, [query]);

    return (
        <>
            <Head>
                <title>Explore {category?.name}</title>
            </Head>
            <Mobile>
                <StyledMobileExplorePagesHeaderWrapper>
                    <StyledMobileMainContentWrapper>
                        <StyledMainContentTitle>
                            {formatMessage(
                                { ...messages.ExploreCategory },
                                { category: category?.name }
                            )}
                        </StyledMainContentTitle>
                        <StyledMainContentDescription>
                            {formatMessage({
                                ...messages.ExploreCategoryDescription,
                            })}
                        </StyledMainContentDescription>
                    </StyledMobileMainContentWrapper>
                    <StyledMobileHeaderWrapper>
                        <StyledNavigationLink href={prevCategory?.slug || ""}>
                            <StyledIconWrapper>
                                <ChevronLeft />
                            </StyledIconWrapper>
                            <StyledNavigationWrapper>
                                <StyledNavigationCategoryName>
                                    {prevCategory?.name}
                                </StyledNavigationCategoryName>
                                <StyledButtonInfoText>
                                    {formatMessage({ ...messages.Before })}
                                </StyledButtonInfoText>
                            </StyledNavigationWrapper>
                        </StyledNavigationLink>
                        <StyledNavigationLink href={nextCategory?.slug || ""}>
                            <StyledNavigationWrapper>
                                <StyledNavigationCategoryName>
                                    {nextCategory?.name}
                                </StyledNavigationCategoryName>
                                <StyledButtonInfoText>
                                    {formatMessage({ ...messages.NEXT })}
                                </StyledButtonInfoText>
                            </StyledNavigationWrapper>
                            <StyledIconWrapper>
                                <ChevronRight />
                            </StyledIconWrapper>
                        </StyledNavigationLink>
                    </StyledMobileHeaderWrapper>
                </StyledMobileExplorePagesHeaderWrapper>
            </Mobile>
            <ExceptMobile>
                <StyledExplorePagesHeaderWrapper>
                    <StyledNavigationLink href={prevCategory?.slug || ""}>
                        <StyledIconWrapper>
                            <ChevronLeft />
                        </StyledIconWrapper>
                        <StyledNavigationWrapper>
                            <StyledNavigationCategoryName>
                                {prevCategory?.name}
                            </StyledNavigationCategoryName>
                            <StyledButtonInfoText>
                                {formatMessage({ ...messages.Before })}
                            </StyledButtonInfoText>
                        </StyledNavigationWrapper>
                    </StyledNavigationLink>
                    <StyledMainContentWrapper>
                        <StyledMainContentTitle>
                            {formatMessage(
                                { ...messages.ExploreCategory },
                                { category: category?.name }
                            )}
                        </StyledMainContentTitle>
                        <StyledMainContentDescription>
                            {formatMessage({
                                ...messages.ExploreCategoryDescription,
                            })}
                        </StyledMainContentDescription>
                    </StyledMainContentWrapper>
                    <StyledNavigationLink href={nextCategory?.slug || ""}>
                        <StyledNavigationWrapper>
                            <StyledNavigationCategoryName>
                                {nextCategory?.name}
                            </StyledNavigationCategoryName>
                            <StyledButtonInfoText>
                                {formatMessage({ ...messages.NEXT })}
                            </StyledButtonInfoText>
                        </StyledNavigationWrapper>
                        <StyledIconWrapper>
                            <ChevronRight />
                        </StyledIconWrapper>
                    </StyledNavigationLink>
                </StyledExplorePagesHeaderWrapper>
            </ExceptMobile>
        </>
    );
};

export default ExplorePagesHeader;
