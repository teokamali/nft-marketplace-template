import { useFormik } from "formik";
import PlusIcon from "public/Icon/PlusIcon";
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import Button from "src/components/Common/Button/Button";
import { useAppDispatch } from "src/redux/hooks";
import { openAddProperty } from "src/redux/slices/modals/modalsSlice";
import AddableInput from "./AddableInput/AddableInput";
import FileInput from "./FileInput/FileInput";
import Input from "./Input/Input";
import { StyledInputDescription, StyledInputLabel } from "./Input/StyledInput";
import AddPropertyModal from "./Modals/AddPropertyModal/AddPropertyModal";
import SelectInput from "./SelectInput/SelectInput";

import {
    StyledFormWrapper,
    StyledInputTitleAndDescriptionWrapper,
    StyledInputWrapper,
    StyledPropertiesWrapper,
    StyledProperty,
    StyledViewPropertiesWrapper,
} from "./StyledCreateForm";
import { CreateFileState, FormState, Properties } from "./types";

const CreateForm = () => {
    const dispatch = useAppDispatch();

    const [state, setState] = useState<CreateFileState>({
        file: null,
    });

    const initialFormState: FormState = {
        file: null,
        name: "",
        externalLink: "",
        description: "",
        collection: "",
        supply: "",
        blockChain: "",
        freezeMetaData: "",
        properties: [],
        levels: [],
        stats: [],
        isUnlockableContent: false,
        unlockableContent: "",
        isExplicit: false,
    };

    const formik = useFormik({
        initialValues: initialFormState,
        onSubmit: (values: FormState) => {
            onSubmitHandler(values);
        },
    });

    const onSubmitHandler: (values: FormState) => void = values => {
        console.log(values);
    };
    const handleFileProcess = (file: File) => {
        if (file) {
            const selectedFile: File = file;
            setState(prev => ({
                ...prev,
                file: selectedFile,
            }));
        }
    };

    const handleDelete = () => {
        if (state.file) {
            setState(prev => ({
                ...prev,
                file: null,
            }));
        }
    };

    const handleSaveProperties: (
        properties: Properties[]
    ) => void = properties => {
        const validProperties = properties.filter(
            property => property.value !== ""
        );
        setValues(prev => ({
            ...prev,
            properties: validProperties,
        }));
    };

    const { errors, handleSubmit, values, setValues } = formik;

    return (
        <StyledFormWrapper onSubmit={handleSubmit}>
            <FileInput
                title="Image, Video, Audio, or 3D Model"
                description="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB"
                onFileChange={file => handleFileProcess(file)}
                file={state.file}
                onDeleteFileHandler={handleDelete}
            />
            <Input
                onChange={event => {
                    setValues({ ...values, name: event.target.value });
                }}
                title="Name"
                value={values.name}
            />
            <Input
                onChange={event => {
                    setValues({ ...values, externalLink: event.target.value });
                }}
                title="External link"
                description="NFT MP will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."
                value={values.externalLink}
            />
            <Input
                onChange={event => {
                    setValues({ ...values, description: event.target.value });
                }}
                title="Description"
                description=" The description will be included on the item's detail page underneath its image. Markdown syntax is supported."
                value={values.description}
            />
            <SelectInput
                title="Collection"
                description="This is the collection where your item will appear"
            />
            <Input
                onChange={event => {
                    setValues({ ...values, supply: event.target.value });
                }}
                title="Supply"
                description="The number of items that can be minted. No gas cost to you!"
                value={values.supply}
            />
            <SelectInput
                title="Blockchain"
                description=" Ethereum chain image"
            />
            <StyledPropertiesWrapper>
                <StyledInputWrapper>
                    <StyledInputTitleAndDescriptionWrapper>
                        <StyledInputLabel>Properties</StyledInputLabel>
                        <StyledInputDescription>
                            Textual traits that show up as rectangles
                        </StyledInputDescription>
                    </StyledInputTitleAndDescriptionWrapper>
                    <Button
                        size="sm"
                        variant="outlined"
                        onClick={() => dispatch(openAddProperty(true))}
                    >
                        <PlusIcon />
                    </Button>
                </StyledInputWrapper>
                <StyledViewPropertiesWrapper>
                    {values.properties.map((property, index) => (
                        <StyledProperty key={index}>
                            <span>{property.type}</span>
                            <span>{property.value}</span>
                        </StyledProperty>
                    ))}
                </StyledViewPropertiesWrapper>
            </StyledPropertiesWrapper>

            <AddPropertyModal
                onSaveHandler={properties => handleSaveProperties(properties)}
                values={values.properties}
            />
        </StyledFormWrapper>
    );
};

export default CreateForm;
