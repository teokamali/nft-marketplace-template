import { useFormik } from "formik";
import PlusIcon from "public/Icon/PlusIcon";
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import Button from "src/components/Common/Button/Button";
import CheckboxToggleSlider from "src/components/Common/CheckboxToggleSlider/CheckboxToggleSlider";
import Progressbar from "src/components/Common/Progressbar/Progressbar";
import { useAppDispatch } from "src/redux/hooks";
import {
    openAddLevel,
    openAddProperty,
    openAddStat,
} from "src/redux/slices/modals/modalsSlice";
import AddableInput from "./AddableInput/AddableInput";
import FileInput from "./FileInput/FileInput";
import Input from "./Input/Input";
import { StyledInputDescription, StyledInputLabel } from "./Input/StyledInput";
import AddLevelsModal from "./Modals/AddLevelsModal/AddLevelsModal";
import AddPropertyModal from "./Modals/AddPropertyModal/AddPropertyModal";
import AddStatsModal from "./Modals/AddStatsModal/AddStatsModal";
import SelectInput from "./SelectInput/SelectInput";

import {
    StyledFormWrapper,
    StyledInputTitleAndDescriptionWrapper,
    StyledInputWrapper,
    StyledLevel,
    StyledLevelInfo,
    StyledLevelsPreview,
    StyledLevelsWrapper,
    StyledPropertiesWrapper,
    StyledProperty,
    StyledPropertyText,
    StyledStat,
    StyledViewPropertiesWrapper,
} from "./StyledCreateForm";
import { CreateFileState, FormState, Levels, Properties, Stats } from "./types";

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
    const handleSaveLevels: (levels: Levels[]) => void = levels => {
        const validLevels = levels.filter(
            level => level.value !== 0 && level.name !== ""
        );
        setValues(prev => ({
            ...prev,
            levels: validLevels,
        }));
    };
    const handleSaveStats: (stats: Stats[]) => void = stats => {
        const validStats = stats.filter(
            stat => stat.value !== 0 && stat.name !== ""
        );
        setValues(prev => ({
            ...prev,
            stats: validStats,
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
                            <StyledPropertyText>
                                {property.type}
                            </StyledPropertyText>
                            <StyledPropertyText>
                                {property.value}
                            </StyledPropertyText>
                        </StyledProperty>
                    ))}
                </StyledViewPropertiesWrapper>
            </StyledPropertiesWrapper>

            <StyledLevelsWrapper>
                <StyledInputWrapper>
                    <StyledInputTitleAndDescriptionWrapper>
                        <StyledInputLabel>Levels</StyledInputLabel>
                        <StyledInputDescription>
                            Numerical traits that show as a progress bar
                        </StyledInputDescription>
                    </StyledInputTitleAndDescriptionWrapper>
                    <Button
                        size="sm"
                        variant="outlined"
                        onClick={() => dispatch(openAddLevel(true))}
                    >
                        <PlusIcon />
                    </Button>
                </StyledInputWrapper>
                <StyledLevelsPreview>
                    {values.levels.map((level, index) => (
                        <StyledLevel key={index}>
                            <StyledLevelInfo>
                                <span>{level.name}</span>
                                <span>
                                    {level.value} of {level.of}
                                </span>
                            </StyledLevelInfo>
                            <Progressbar
                                value={level.value}
                                maxValue={level.of}
                            />
                        </StyledLevel>
                    ))}
                </StyledLevelsPreview>
            </StyledLevelsWrapper>

            <StyledLevelsWrapper>
                <StyledInputWrapper>
                    <StyledInputTitleAndDescriptionWrapper>
                        <StyledInputLabel>Stats</StyledInputLabel>
                        <StyledInputDescription>
                            Numerical traits that just show as numbers
                        </StyledInputDescription>
                    </StyledInputTitleAndDescriptionWrapper>
                    <Button
                        size="sm"
                        variant="outlined"
                        onClick={() => dispatch(openAddStat(true))}
                    >
                        <PlusIcon />
                    </Button>
                </StyledInputWrapper>
                <StyledLevelsPreview>
                    {values.stats.map((stat, index) => (
                        <StyledStat key={index}>
                            <span>{stat.name}</span>
                            <span>
                                {stat.value} of {stat.of}
                            </span>
                        </StyledStat>
                    ))}
                </StyledLevelsPreview>

                <CheckboxToggleSlider
                    isChecked={values.isUnlockableContent}
                    setIsChecked={checked => {
                        setValues(prev => ({
                            ...prev,
                            isUnlockableContent: checked,
                        }));
                    }}
                />
            </StyledLevelsWrapper>

            <AddPropertyModal
                onSaveHandler={properties => handleSaveProperties(properties)}
                values={values.properties}
            />

            <AddLevelsModal
                onSaveHandler={levels => handleSaveLevels(levels)}
                values={values.levels}
            />
            <AddStatsModal
                onSaveHandler={stats => handleSaveStats(stats)}
                values={values.stats}
            />
        </StyledFormWrapper>
    );
};

export default CreateForm;
