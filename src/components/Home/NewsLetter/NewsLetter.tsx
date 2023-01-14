import { useFormik } from "formik";
import React from "react";
import { useIntl } from "react-intl";
import Button from "src/components/Common/Button/Button";
import Input from "src/components/Common/Input/Input";
import { emailValidation } from "src/validations/emailValidation";
import {
    NewsLetterWrapper,
    NewsLetterTitle,
    NewsLetterDescription,
    NewsLetterForm,
    NewsLetterBlueText,
} from "./StyledNewsLetter";
import messages from "./messages";

interface IProps { }
interface NewsLetterForm {
    email: string;
}

function NewsLetter({ }: IProps) {
    const { formatMessage } = useIntl();

    // formik setup for login
    const initialValues: NewsLetterForm = {
        email: "",
    };
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: emailValidation,
        onSubmit: values => {
            FormSubmitHandler(values);
        },
    });

    const FormSubmitHandler = ({ email }: { email: string }) => {
        console.log(email);
    };
    return (
        <NewsLetterWrapper>
            <NewsLetterTitle>
                {formatMessage({ ...messages.TITLE })}
            </NewsLetterTitle>
            <NewsLetterDescription>
                {formatMessage({ ...messages.DESCRIPTION })}
                <NewsLetterBlueText> NFTMP.IO.</NewsLetterBlueText>
            </NewsLetterDescription>
            <NewsLetterForm onSubmit={formik.handleSubmit}>
                <Input
                    type="text"
                    value={formik.values.email}
                    onFocus={e => formik.setTouched({ email: true })}
                    onChange={e => {
                        formik.setValues(prev => ({
                            ...prev,
                            email: e.target.value,
                        }));
                    }}
                    placeholder={formatMessage({
                        ...messages.INPUT_PLACEHOLDER,
                    })}
                    error={
                        formik.errors.email && formik.touched.email
                            ? formik.errors.email
                            : ""
                    }
                />

                <Button
                    variant="normal"
                    size="sm"
                    //@ts-ignore
                    style={{ borderRadius: "8px" }}
                >
                    {formatMessage({ ...messages.SIGN_UP })}
                </Button>
            </NewsLetterForm>
        </NewsLetterWrapper>
    );
}

export default NewsLetter;
