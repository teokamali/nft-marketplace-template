import ExploreCollections, { IExploreDataProps, IExploreProps } from "src/components/Common/ExploreCondition/ExploreCollections"

const explore = () => {
    const data: IExploreDataProps[] = [
        {
            image: "/images/explore.png",
            name: "PHOTOGRAPHY",
            collectionsCount: 200000,
        },
        {
            image: "/images/explore.png",
            name: "PHOTOGRAPHY",
            collectionsCount: 200000
        },
        {
            image: "/images/explore.png",
            name: "PHOTOGRAPHY",
            collectionsCount: 200000
        },
        {
            image: "/images/explore.png",
            name: "PHOTOGRAPHY",
            collectionsCount: 200000
        },
        {
            image: "/images/explore.png",
            name: "PHOTOGRAPHY",
            collectionsCount: 200000
        },
        {
            image: "/images/explore.png",
            name: "PHOTOGRAPHY",
            collectionsCount: 200000
        },
        {
            image: "/images/explore.png",
            name: "PHOTOGRAPHY",
            collectionsCount: 200000
        },
        {
            image: "/images/explore.png",
            name: "PHOTOGRAPHY",
            collectionsCount: 200000
        },
    ]
    return (
        <ExploreCollections data={data} />
    )
}
export default explore