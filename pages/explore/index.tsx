import ExploreCollections, { IExploreDataProps } from "src/components/Common/ExploreCondition/ExploreCollections";
import DefaultExplore from "src/components/Explore/DefaultExplore/DefaultExplore";
import MobileExplore from "src/components/Explore/MobileExplore/MobileExplore";
import TabletExplore from "src/components/Explore/TabletExplore/TabletExplore";
import { Desktop, ExceptMobile, Mobile, Tablet } from "src/utils/BreakPoints";

const ExplorePage = () => {
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
        <>
            <ExploreCollections data={data} />
        </>
    );
};
export default ExplorePage;
