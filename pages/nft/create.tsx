import { FormikValues, useFormik } from "formik";
import React from "react";
import { Container } from "src/components/Common/Layout/LayoutStyles";
import CreatePageTitle from "src/components/Create/CreatePageTitle/CreatePageTitle";

const CreatePage = () => {
    return (
        <Container>
            <CreatePageTitle />
        </Container>
    );
};

export default CreatePage;
