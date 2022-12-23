import Image from "next/image";
import React from "react";
import {
    CardBadge,
    CardContent,
    CardWrapper,
    CarOverLay,
    ImageContainer,
    NftDescription,
    NftInfoWrapper,
    NftTitle,
} from "./StyledCard";

interface Props {
    src: string;
    title: string;
    description: string;
}

const Card = ({ src, title, description }: Props) => {
    return (
        <CardWrapper>
            <CarOverLay url={src} />
            <CardContent>
                <CardBadge>live</CardBadge>
                <ImageContainer>
                    <Image
                        src={src}
                        alt={title}
                        width={150}
                        height={225}
                        style={{
                            width: "100%",
                            position: "absolute",
                            top: 0,
                            left: 0,
                        }}
                    />
                </ImageContainer>
                <NftInfoWrapper>
                    <NftTitle>{title}</NftTitle>
                    <NftDescription>{description}</NftDescription>
                </NftInfoWrapper>
            </CardContent>
        </CardWrapper>
    );
};

export default Card;
// <div
//     style={{
//         width: "100%",
//         // position: "relative",
//         // flexDirection: "column",
//         // display: "flex",
//         // justifyContent: "center",
//         // alignItems: "center",
//     }}
// >
//     <div
//         className="overlay"
//         style={{
//             // position: "absolute",
//             // width: "275px",
//             // height: "300px",
//             // backgroundImage: `url(${src})`,
//             // backgroundRepeat: "no-repeat",
//             // backgroundSize: "contain",
//             // filter: "blur(5px)",
//             zIndex: "2",
//         }}
//     >
//         <Image
//             src={src}
//             alt={title}
//             width={150}
//             height={225}
//             style={{
//                 objectFit: "contain",
//             }}
//         />
//     </div>
//     {/* <div
//         className="content"
//         style={{
//             flexDirection: "column",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: "3",
//         }}
//     >
//         <Image src={src} alt={title} width={150} height={225} />
//     </div> */}
//     {/* <div
//         style={{
//             width: "100%",
//             textAlign: "left",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "start",
//             zIndex: "3",
//         }}
//     >
//         <span>{title}</span>
//         <p>{description}</p>
//     </div> */}
// </div>
