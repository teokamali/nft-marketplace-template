import React from "react";
import { StyledTestContainer } from "./styles";
import { ITodosListData } from 'src/types/types'

interface IProps {
    data: ITodosListData
}



const Test: React.FC<IProps> = ({ data }) => {
    return <StyledTestContainer>aaaaaaaaaaaa{data.title}</StyledTestContainer>;
}

export default Test