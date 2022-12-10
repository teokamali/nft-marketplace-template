import React from "react";
import { StyledTestContainer } from "./styles";
import { ITodosListData } from "src/types/types";
import { FormattedMessage, useIntl } from "react-intl";
import messages from "./messages";
interface IProps {
    data: ITodosListData;
}

const Test: React.FC<IProps> = ({ data }) => {
    const { formatMessage } = useIntl();

    return (
        <StyledTestContainer>
            <h2>{data.title}</h2>
            {/* Multilang sample */}
            <FormattedMessage {...messages.HELLO_WORLD} />
            <h2>{formatMessage({ ...messages.TEST })}</h2>
            <h3>
                <FormattedMessage
                    {...messages.TESTـWITH_VALUE}
                    values={{ value: Math.floor(Math.random() * 100) }}
                />
            </h3>
        </StyledTestContainer>
    );
};

export default Test;
