import { FormikValues, useFormik } from "formik";
import React from "react";
import { Container } from "src/components/Common/Layout/LayoutStyles";
import CreatePageTitle from "src/components/Create/CreatePageTitle/CreatePageTitle";
import CreateForm from "src/components/Create/Form/CreateForm";

const CreatePage = () => {
    return (
        <Container>
            <CreatePageTitle />
            <CreateForm />
        </Container>
    );
};

export default CreatePage;
