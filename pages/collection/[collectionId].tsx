import Collection from "src/components/collection/collection"
import MobileCollection from "src/components/collection/MobileCollection/MobileCollection"
import TabletCollection from "src/components/collection/TabletCollection/TabletCollection"
import { Mobile, ExceptMobile, Tablet, Desktop } from "src/utils/BreakPoints"
const profile = {
    name: "Seeing Green",
    avatarSrc: "/images/collectionAvatar.png",
    imgSrc: "/images/collectionBg.png",
    details: "The first NFT collection based on IP rights authorized by BAYC holders (#4555, #4372, #2420, #8648, #1769, #6582, #4695) supported by @sigroll. Just dope apes living in a parallel universe with their dope outfits.",
    title: "By Nedutheartist",
    info: [
        {
            item: "item",
            numItem: 10000,
        },
        {
            item: "owner",
            numItem: 32400,
        },
        {
            item: "Floor Price",
            numItem: 0.06,
        },
        {
            item: "Best Offer",
            numItem: 0.05,
        },
        {
            item: "followers",
            numItem: 10000,
        },
        {
            item: "Total Volumes",
            numItem: 1900,
        },
    ]
}
const collectionData = [
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },
    {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    }, {
        imgSrc: "/images/collection.png",
        color: "#65789",
        name: "Seeing Green",
        price: 0.05,
        lastUpdate: 3,
        seen: 88
    },

]
const collection = () => {
    return (
        <>
            <Mobile>
                <MobileCollection collections={collectionData} profile={profile} />
            </Mobile>
            <Tablet>
                <TabletCollection collections={collectionData} profile={profile} />
            </Tablet>
            <Desktop>
                <Collection profile={profile} collections={collectionData} />
            </Desktop>

        </>
    )
}
export default collection 