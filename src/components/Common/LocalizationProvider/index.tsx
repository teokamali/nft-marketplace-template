import React from "react";
import { IntlProvider } from "react-intl";
import { useAppSelector } from "../../../redux/hooks";

export interface Props {
    messages: any;
    children?: React.ReactNode;
}

export default function LocalizationProvider(props: Props) {
    //@ts-ignore
    const locale = useAppSelector(state => state.localization.locale);
    return (
        <IntlProvider
            textComponent="span"
            locale={locale}
            key={locale}
            onError={() => {}} /*TDOD CHEK IT*/
            messages={props.messages[locale]}
        >
            {React.Children.only(props.children)}
        </IntlProvider>
    );
}
