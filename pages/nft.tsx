import {
    useContract,
    useActiveListings,
    MediaRenderer,
} from "@thirdweb-dev/react";
import { config } from "src/constants";

const NFTLists = () => {
    // Connect your marketplace smart contract here (replace this address)
    const { contract } = useContract(
        config.MARKETPLACE_CONTRACT,
        "marketplace"
    );

    const { data: nfts, isLoading: isReadingNfts } =
        useActiveListings(contract);
    return (
        <div>
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
