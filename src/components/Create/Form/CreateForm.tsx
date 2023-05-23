import { useFormik } from "formik";
import { useRouter } from "next/router";
import DotIcon from "public/Icon/DotIcon";
import ExclamationMarkIcon from "public/Icon/ExclamationMarkIcon";
import LockIcon from "public/Icon/LockIcon";
import PlusIcon from "public/Icon/PlusIcon";
import PropertyListIcon from "public/Icon/PropertyListIcon";
import StarIcon from "public/Icon/StarIcon";
import WifiSignalIcon from "public/Icon/WifiSignalIcon";
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import Button from "src/components/Common/Button/Button";
import CheckboxToggleSlider from "src/components/Common/CheckboxToggleSlider/CheckboxToggleSlider";
import { InputWrapper } from "src/components/Common/Input/StyledInput";
import Progressbar from "src/components/Common/Progressbar/Progressbar";
import { useAppDispatch } from "src/redux/hooks";
import {
    openAddLevel,
    openAddProperty,
    openAddStat,
} from "src/redux/slices/modals/modalsSlice";
import { createNftValidation } from "src/validations/createNftValidation";
import AddableInput from "./AddableInput/AddableInput";
import FileInput from "./FileInput/FileInput";
import Input from "./Input/Input";
import {
    InputError,
    StyledInputDescription,
    StyledInputLabel,
} from "./Input/StyledInput";
import AddLevelsModal from "./Modals/AddLevelsModal/AddLevelsModal";
import AddPropertyModal from "./Modals/AddPropertyModal/AddPropertyModal";
import AddStatsModal from "./Modals/AddStatsModal/AddStatsModal";
import SelectInput from "../../Common/SelectInput/SelectInput";

import {
    StyledDisabledFreezeMetaDataDescription,
    StyledFormWrapper,
    StyledIconAndTextWrapper,
    StyledInputHolder,
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
    StyledSwitchableInputsContent,
    StyledSwitchableInputsContentTextWrapper,
    StyledSwitchableInputsWrapper,
    StyledTextArea,
    StyledViewPropertiesWrapper,
} from "./StyledCreateForm";
import { FormState, Levels, Properties, Stats } from "./types";

const CreateForm = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const initialFormState: FormState = {
        file: null,
        name: "",
        externalLink: "",
        description: "",
        collection: "",
        supply: "",
        blockChain: "",
        properties: [],
        levels: [],
        stats: [],
        isUnlockableContent: false,
        unlockableContent: "",
        isExplicit: false,
    };

    const onSubmitHandler = () => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: initialFormState,
        validationSchema: createNftValidation,
        onSubmit: onSubmitHandler,
    });
    const { errors, handleSubmit, values, setValues } = formik;

    const handleFileProcess = (file: File) => {
        if (file) {
            const selectedFile: File = file;
            setValues(prev => ({
                ...prev,
                file: selectedFile,
            }));
        }
    };

    const handleDelete = () => {
        if (values.file) {
            setValues(prev => ({
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
    console.log(errors);
    return (
        <StyledFormWrapper onSubmit={handleSubmit}>
            {/* file input */}
            <StyledInputHolder>
                <FileInput
                    title="Image, Video, Audio, or 3D Model"
                    description="File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB"
                    onFileChange={file => handleFileProcess(file)}
                    file={values.file}
                    onDeleteFileHandler={handleDelete}
                    icon={<DotIcon />}
                />
                {errors.file && <InputError>{errors.file}</InputError>}
            </StyledInputHolder>

            {/* name input */}
            <StyledInputHolder>
                <Input
                    onChange={event => {
                        setValues({ ...values, name: event.target.value });
                    }}
                    title="Name"
                    value={values.name}
                    icon={<DotIcon />}
                />
                {errors.name && <InputError>{errors.name}</InputError>}
            </StyledInputHolder>

            {/* external Link */}

            <StyledInputHolder>
                <Input
                    onChange={event => {
                        setValues({
                            ...values,
                            externalLink: event.target.value,
                        });
                    }}
                    title="External link"
                    description="NFT MP will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details."
                    value={values.externalLink}
                    icon={<DotIcon />}
                />
                {errors.externalLink && (
                    <InputError>{errors.externalLink}</InputError>
                )}
            </StyledInputHolder>

            {/* description input */}
            <StyledInputHolder>
                <Input
                    onChange={event => {
                        setValues({
                            ...values,
                            description: event.target.value,
                        });
                    }}
                    title="Description"
                    description=" The description will be included on the item's detail page underneath its image. Markdown syntax is supported."
                    value={values.description}
                    icon={<DotIcon />}
                />
                {errors.description && (
                    <InputError>{errors.description}</InputError>
                )}
            </StyledInputHolder>

            {/* collection select */}

            <StyledInputHolder>
                <SelectInput
                    title="Collection"
                    description="This is the collection where your item will appear"
                    icon={<DotIcon />}
                />
                {errors.collection && (
                    <InputError>{errors.collection}</InputError>
                )}
            </StyledInputHolder>

            {/* supply input*/}
            <StyledInputHolder>
                <Input
                    onChange={event => {
                        setValues({ ...values, supply: event.target.value });
                    }}
                    title="Supply"
                    description="The number of items that can be minted. No gas cost to you!"
                    value={values.supply}
                    icon={<DotIcon />}
                />
                {errors.supply && <InputError>{errors.supply}</InputError>}
            </StyledInputHolder>
            {/* blockchain select */}
            <StyledInputHolder>
                <SelectInput
                    title="Blockchain"
                    description=" Ethereum chain image"
                    icon={<DotIcon />}
                />
                {errors.blockChain && (
                    <InputError>{errors.blockChain}</InputError>
                )}
            </StyledInputHolder>

            {/* properties */}
            <StyledPropertiesWrapper>
                <StyledInputHolder>
                    <StyledInputWrapper>
                        <StyledInputTitleAndDescriptionWrapper>
                            <StyledInputLabel>
                                <StyledIconAndTextWrapper>
                                    <PropertyListIcon />
                                    <span>Properties</span>
                                </StyledIconAndTextWrapper>
                            </StyledInputLabel>
                            <StyledInputDescription>
                                Textual traits that show up as rectangles
                            </StyledInputDescription>
                        </StyledInputTitleAndDescriptionWrapper>
                        <Button
                            variant="outlined"
                            onClick={() => dispatch(openAddProperty(true))}
                        >
                            <PlusIcon />
                        </Button>
                    </StyledInputWrapper>
                    {errors.properties && (
                        <InputError>{errors.properties.length > 1}</InputError>
                    )}
                </StyledInputHolder>

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
                        <StyledInputLabel>
                            <StyledIconAndTextWrapper>
                                <StarIcon />
                                Levels
                            </StyledIconAndTextWrapper>
                        </StyledInputLabel>
                        <StyledInputDescription>
                            Numerical traits that show as a progress bar
                        </StyledInputDescription>
                    </StyledInputTitleAndDescriptionWrapper>
                    <Button
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
                        <StyledInputLabel>
                            <StyledIconAndTextWrapper>
                                <WifiSignalIcon />
                                Stats
                            </StyledIconAndTextWrapper>
                        </StyledInputLabel>
                        <StyledInputDescription>
                            Numerical traits that just show as numbers
                        </StyledInputDescription>
                    </StyledInputTitleAndDescriptionWrapper>
                    <Button
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
            </StyledLevelsWrapper>

            {/* unLockable Content */}

            <StyledSwitchableInputsWrapper>
                <StyledSwitchableInputsContent>
                    <StyledSwitchableInputsContentTextWrapper>
                        <StyledInputLabel>
                            <StyledIconAndTextWrapper>
                                <LockIcon />
                                Unlockable Content
                            </StyledIconAndTextWrapper>
                        </StyledInputLabel>
                        <StyledInputDescription>
                            Include unlockable content that can only be revealed
                            by the owner of the item.
                        </StyledInputDescription>
                    </StyledSwitchableInputsContentTextWrapper>
                    <CheckboxToggleSlider
                        isChecked={values.isUnlockableContent}
                        disabled={false}
                        setIsChecked={checked => {
                            setValues(prev => ({
                                ...prev,
                                isUnlockableContent: checked,
                            }));
                        }}
                    />
                </StyledSwitchableInputsContent>
                {values.isUnlockableContent && (
                    <StyledTextArea
                        name=""
                        id=""
                        placeholder="Enter content (access key, code to redeem, link to a file, etc.)"
                        onChange={e => {
                            setValues(prev => ({
                                ...prev,
                                unlockableContent: e.target.value,
                            }));
                        }}
                    ></StyledTextArea>
                )}
            </StyledSwitchableInputsWrapper>

            {/* Explicit & Sensitive Content */}
            <StyledSwitchableInputsWrapper>
                <StyledSwitchableInputsContent>
                    <StyledSwitchableInputsContentTextWrapper>
                        <StyledInputLabel>
                            <StyledIconAndTextWrapper>
                                <ExclamationMarkIcon />
                                Explicit & Sensitive Content
                            </StyledIconAndTextWrapper>
                        </StyledInputLabel>
                        <StyledInputDescription>
                            Set this item as explicit and sensitive content
                        </StyledInputDescription>
                    </StyledSwitchableInputsContentTextWrapper>
                    <CheckboxToggleSlider
                        isChecked={values.isExplicit}
                        disabled={false}
                        setIsChecked={checked => {
                            setValues(prev => ({
                                ...prev,
                                isExplicit: checked,
                            }));
                        }}
                    />
                </StyledSwitchableInputsContent>
            </StyledSwitchableInputsWrapper>

            {/* Freeze metadata */}
            <StyledSwitchableInputsWrapper>
                <StyledSwitchableInputsContent>
                    <StyledSwitchableInputsContentTextWrapper>
                        <StyledInputLabel>
                            <StyledIconAndTextWrapper>
                                <DotIcon />
                                Freeze metadata
                            </StyledIconAndTextWrapper>
                        </StyledInputLabel>
                    </StyledSwitchableInputsContentTextWrapper>

                    <CheckboxToggleSlider
                        isChecked={false}
                        disabled={true}
                        setIsChecked={checked => null}
                    />
                </StyledSwitchableInputsContent>
                <StyledDisabledFreezeMetaDataDescription>
                    To freeze your metadata, you must create your item first.
                </StyledDisabledFreezeMetaDataDescription>
            </StyledSwitchableInputsWrapper>

            <Button
                variant="normal"
                onClick={() => {}}
                type="submit"
            >
                Create
            </Button>

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
