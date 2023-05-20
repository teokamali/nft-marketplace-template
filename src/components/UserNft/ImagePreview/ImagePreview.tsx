import React from "react";
import { StyledNFTImage } from "./StyledImagePreview";

interface IImagePreviewProps {
    image: string;
    alt: string;
}

export default function ImagePreview({ image, alt }: IImagePreviewProps) {
    return <StyledNFTImage src={image} alt={alt} />;
}
