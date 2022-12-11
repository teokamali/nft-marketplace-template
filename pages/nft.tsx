import {
    ThirdwebNftMedia,
    useContract,
    useActiveListings,
    MediaRenderer,
    Web3Button,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

const NFTLists = () => {
    // Connect your marketplace smart contract here (replace this address)
    const { contract } = useContract(
        "0x993b187dFe816F501C6D93715Bc7be2eA2e49822",
        "marketplace"
    );

    const { data: nfts, isLoading: isReadingNfts } =
        useActiveListings(contract);
    console.log(nfts);
    return (
        <div>
            {" "}
            {isReadingNfts ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div className="flex w-full gap-10">
                        {nfts?.map(nft => (
                            <div className="flex flex-col" key={nft.id}>
                                <MediaRenderer
                                    src={nft.asset.image}
                                    style={{
                                        borderRadius: 16,
                                        border: "1px solid red",
                                        // Fit the image to the container
                                        width: "200px",
                                        height: "200px",
                                    }}
                                />
                                <h5>{nft.asset.name}</h5>
                                <p>{nft.asset.description}</p>
                                <span>
                                    {
                                        nft.buyoutCurrencyValuePerToken
                                            .displayValue
                                    }
                                    $
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default NFTLists;
