import ChevronDownIcon from "public/Icon/ChevronDownIcon";
import React, { useRef, useState } from "react";
import { useIntl } from "react-intl";
import { useOnClickOutside } from "src/hooks/useOnClickOutside";
import messages from "./messages";
import {
    StyledTopCollectionContent,
    StyledTopCollectionDropdownButton,
    StyledTopCollectionDropdownItem,
    StyledTopCollectionDropdownList,
    StyledTopCollectionDropdownWrapper,
    StyledTopCollectionIconWrapper,
    StyledTopCollectionMainTitle,
    StyledTopCollectionSubTitle,
    StyledTopCollectionsWrapper,
    StyledTopCollectionTitleWrapper,
} from "./StyledTopCollections";
import TopCollectionItem from "./TopCollectionItem/TopCollectionItem";

interface IProps {
    data: {
        avatar: string;
        name: string;
        floor_price: number;
        items: number;
        pump: string;
    }[];
}

const TopCollections = ({ data }: IProps) => {
    const { formatMessage } = useIntl();
    const [dropDown, setDropDown] = useState("last 24 hours");
    const [showDropDown, setShowDropDown] = useState(false);

    const dropdownRef = useRef<any>(null);

    const toggleDropdown = () => {
        setShowDropDown(prev => !prev);
    };
    useOnClickOutside(dropdownRef, () => {
        setShowDropDown(false);
    });

    return (
        <StyledTopCollectionsWrapper>
            <StyledTopCollectionTitleWrapper>
                <StyledTopCollectionMainTitle>
                    {formatMessage({ ...messages.TITLE })}
                </StyledTopCollectionMainTitle>
                <StyledTopCollectionDropdownWrapper ref={dropdownRef}>
                    <StyledTopCollectionDropdownButton onClick={toggleDropdown}>
                        {dropDown}
                        <StyledTopCollectionIconWrapper>
                            <ChevronDownIcon />
                        </StyledTopCollectionIconWrapper>
                    </StyledTopCollectionDropdownButton>
                    <StyledTopCollectionDropdownList show={showDropDown}>
                        <StyledTopCollectionDropdownItem
                            onClick={e => {
                                setDropDown(e.currentTarget.innerText);
                                toggleDropdown();
                            }}
                        >
                            last 24 hours
                        </StyledTopCollectionDropdownItem>
                        <StyledTopCollectionDropdownItem
                            onClick={e => {
                                setDropDown(e.currentTarget.innerText);
                                toggleDropdown();
                            }}
                        >
                            last 7 days
                        </StyledTopCollectionDropdownItem>
                        <StyledTopCollectionDropdownItem
                            onClick={e => {
                                setDropDown(e.currentTarget.innerText);
                                toggleDropdown();
                            }}
                        >
                            last 30 days
                        </StyledTopCollectionDropdownItem>
                    </StyledTopCollectionDropdownList>
                </StyledTopCollectionDropdownWrapper>
            </StyledTopCollectionTitleWrapper>
            <StyledTopCollectionSubTitle>
                {formatMessage({ ...messages.SUBTITLE })}
            </StyledTopCollectionSubTitle>
            <StyledTopCollectionContent>
                {data.map((item, i) => (
                    <TopCollectionItem key={i} itemData={item} rank={i + 1} />
                ))}
            </StyledTopCollectionContent>
        </StyledTopCollectionsWrapper>
    );
};

export default TopCollections;
