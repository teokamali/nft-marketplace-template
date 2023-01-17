import Head from "next/head";
import { useRouter } from "next/router";
import ChevronLeft from "public/Icon/ChevronLeft";
import ChevronRight from "public/Icon/ChevronRight";
import React, { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Category } from "src/types/types";
import { Container } from "../Layout/LayoutStyles";
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
} from "./StyledExplorePagesHeader";

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
        <Container>
            <Head>
                <title>Explore {category?.name}</title>
            </Head>

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
        </Container>
    );
};

export default ExplorePagesHeader;
