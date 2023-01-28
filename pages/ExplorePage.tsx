import DefaultExplore from "src/components/Explore/DefaultExplore/DefaultExplore"
import MobileExplore from "src/components/Explore/MobileExplore/MobileExplore"
import TabletExplore from "src/components/Explore/TabletExplore/TabletExplore"
import { Desktop, ExceptMobile, Mobile, Tablet } from "src/utils/BreakPoints"

const ExplorePage = () => {
    const optionsExplore = [
        {
            id: 1,
            url: "/images/nft-10.png",
            text: "Mortimer Crypto Mystic",
            checked: true

        },
        {
            id: 2,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 3,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 4,
            url: "/images/nft-7.png",
            text: "Mortimer Crypto Mystic",
            checked: true
        },
        {
            id: 5,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 6,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 7,
            url: "/images/nft-10.png",
            text: "Mortimer Crypto Mystic",
            checked: true
        },
        {
            id: 8,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 9,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 10,
            url: "/images/nft-10.png",
            text: "Mortimer Crypto Mystic",
            checked: true
        },
        {
            id: 11,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 12,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 13,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 14,
            url: "/images/nft-10.png",
            text: "Mortimer Crypto Mystic",
            checked: true
        },
        {
            id: 15,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 16,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 17,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 18,
            url: "/images/nft-10.png",
            text: "Mortimer Crypto Mystic",
            checked: true
        },
        {
            id: 19,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 20,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 21,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 22,
            url: "/images/nft-10.png",
            text: "Mortimer Crypto Mystic",
            checked: true
        },
        {
            id: 23,
            url: "/images/nft-8.png",
            text: "Mortimer Crypto Mystic",
        },
        {
            id: 24,
            url: "/images/nft-9.png",
            text: "Mortimer Crypto Mystic",
        },
    ]
    return (<>
        <Desktop>
            <DefaultExplore optionsExplore={optionsExplore} />
        </Desktop>
        <Tablet>
            <TabletExplore optionsExplore={optionsExplore} />
        </Tablet>
        <Mobile>
            <MobileExplore optionsExplore={optionsExplore} />
        </Mobile>
    </>
    )
}
export default ExplorePage