import { ContainerState as LocalizationProviderState } from "../redux/slices/localization/localizationSlice";

export interface ApplicationRootState {
    readonly localization: LocalizationProviderState;
}
export interface Response {
    data: string;
    message: string;
    status: boolean;
}
export interface NFT {
    asset: {
        attributes: {
            trait_type: string;
            value: string;
        }[];
        description: string;
        id: string;
        image: string;
        name: string;
        uri: string;
    };
    assetContractAddress: string;
    buyoutCurrencyValuePerToken: {
        decimals: number;
        displayValue: string;
        name: string;
        symbol: string;
        value: {
            _hex: string;
            _isBigNumber: boolean;
        };
    };
    buyoutPrice: {
        _hex: string;
        _isBigNumber: boolean;
    };
    currencyContractAddress: string;
    id: string;
    quantity: {
        _hex: string;
        _isBigNumber: boolean;
    };
    secondsUntilEnd: {
        _hex: string;
        _isBigNumber: boolean;
    };
    sellerAddress: string;
    startTimeInSeconds: {
        _hex: string;
        _isBigNumber: boolean;
    };
    tokenId: {
        _hex: string;
        _isBigNumber: boolean;
    };
    type: number;
}
