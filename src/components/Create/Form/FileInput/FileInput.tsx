import FilePlaceholder from "public/Icon/FilePlaceholder";
import { Times } from "public/Icon/Times";
import React, {
    useRef,
    useEffect,
    ChangeEvent,
    InputHTMLAttributes,
    useState,
} from "react";
import Button from "src/components/Common/Button/Button";
import {
    InputError,
    StyledInputDescription,
    StyledInputLabel,
    StyledInputWrapper,
} from "../Input/StyledInput";
import { FileInputState, IFileInputProps } from "./FileInputType";

import {
    StyledAudioPreviewWrapper,
    StyledDeleteIconWrapper,
    StyledFileInput,
    StyledFileInputWrapper,
    StyledFilePlaceHolderText,
    StyledFilePlaceHolderWrapper,
    StyledImageInputOverlay,
    StyledImagePreview,
    StyledImagePreviewWrapper,
    StyledPreviewFileWrapper,
    StyledSVGWrapper,
    StyledVideoPreviewWrapper,
    VideoElement,
} from "./StyledFileInput";

const FileInput = ({
    title,
    description,
    file,
    onFileChange,
    onDeleteFileHandler,
    ...props
}: IFileInputProps) => {
    const [state, setState] = useState<FileInputState>({
        fileType: null,
        error: null,
        draggedInto: false,
    });

    const onDeleteFile = () => {
        onDeleteFileHandler();
    };
    const supportedImageTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/svg",
    ];
    const supportedAudioTypes = ["audio/mpeg", "audio/wav", "audio/ogg"];
    const supportedVideoTypes = ["video/mp4", "video/webm"];

    const isValidFileType = (file: File) => {
        const fileType = file.type;
        if (supportedImageTypes.includes(fileType)) {
            return "image";
        } else if (supportedAudioTypes.includes(fileType)) {
            return "audio";
        } else if (supportedVideoTypes.includes(fileType)) {
            return "video";
        } else {
            return null;
        }
    };

    const onFileChangeHandler = (selectedFile: File) => {
        if (selectedFile) {
            const fileType = isValidFileType(selectedFile);
            if (!fileType) {
                return setState({
                    ...state,
                    fileType: null,
                    error: "Format Not Supported",
                });
            }

            onFileChange(selectedFile);
            return setState({
                ...state,
                fileType: fileType,
                error: null,
            });
        }
    };
    useEffect(() => {
        setState(prev => ({
            ...prev,
            draggedInto: false,
        }));
    }, [file]);

    const { fileType } = state;
    return (
        <StyledInputWrapper>
            <StyledInputLabel htmlFor={props.name}>{title}</StyledInputLabel>
            <StyledInputDescription>{description}</StyledInputDescription>
            {!file && (
                <StyledFileInputWrapper isDraggedIn={state.draggedInto}>
                    <StyledFileInput
                        onDragEnter={() => {
                            setState(prev => ({ ...prev, draggedInto: true }));
                        }}
                        onDragLeave={() => {
                            setState(prev => ({
                                ...prev,
                                draggedInto: false,
                            }));
                        }}
                        type="file"
                        name=""
                        id=""
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            if (e.target.files) {
                                onFileChangeHandler(e.target.files[0]);
                                return;
                            }
                            return null;
                        }}
                    />
                    <StyledFilePlaceHolderWrapper>
                        <StyledSVGWrapper>
                            <FilePlaceholder />
                        </StyledSVGWrapper>
                        <StyledFilePlaceHolderText>
                            Click to select file or drag and drop files
                        </StyledFilePlaceHolderText>
                    </StyledFilePlaceHolderWrapper>
                </StyledFileInputWrapper>
            )}
            <>
                {file && (
                    <StyledPreviewFileWrapper>
                        {fileType === "image" && (
                            <StyledImagePreviewWrapper>
                                <StyledImageInputOverlay>
                                    <StyledDeleteIconWrapper
                                        onClick={onDeleteFile}
                                    >
                                        <Times />
                                    </StyledDeleteIconWrapper>
                                </StyledImageInputOverlay>
                                <StyledImagePreview
                                    src={URL.createObjectURL(file)}
                                />
                            </StyledImagePreviewWrapper>
                        )}
                        {fileType === "audio" && (
                            <StyledAudioPreviewWrapper>
                                <audio controls>
                                    <source
                                        src={URL.createObjectURL(file)}
                                        type={file.type}
                                    />
                                </audio>
                                <Button
                                    size="sm"
                                    variant="normal"
                                    onClick={onDeleteFile}
                                >
                                    Change
                                </Button>
                            </StyledAudioPreviewWrapper>
                        )}
                        {fileType === "video" && (
                            <StyledVideoPreviewWrapper>
                                <VideoElement controls>
                                    <source
                                        src={URL.createObjectURL(file)}
                                        type={file.type}
                                    />
                                </VideoElement>
                                <Button
                                    size="sm"
                                    variant="normal"
                                    onClick={onDeleteFile}
                                >
                                    Change
                                </Button>
                            </StyledVideoPreviewWrapper>
                        )}
                    </StyledPreviewFileWrapper>
                )}
            </>
            {state.error && <InputError>{state.error}</InputError>}
        </StyledInputWrapper>
    );
};

export default FileInput;
