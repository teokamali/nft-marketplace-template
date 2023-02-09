import { StyleCollectionHeaderAvatarSection, StyleCollectionHeaderSection, StyleCollectionSection } from "./StyleCollection"
const imgSrc = "/images/collectionBg.png"
const avatarSrce = "/images/collectionAvatar.png"

const Collection = () => {
    return (
        <StyleCollectionSection>
            <StyleCollectionHeaderSection bgImage={imgSrc}>
                <StyleCollectionHeaderAvatarSection src={avatarSrce} />
            </StyleCollectionHeaderSection>
        </StyleCollectionSection>
    )
}
export default Collection 