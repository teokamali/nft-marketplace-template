import { useFormik } from "formik";
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import FileInput from "./FileInput/FileInput";
import Input from "./Input/Input";

import { StyledFormWrapper } from "./StyledCreateForm";
import { CreateFileState, FormState } from "./types";

const CreateForm = () => {
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
                value="adasdadada"
            />
        </StyledFormWrapper>
    );
};

export default CreateForm;
