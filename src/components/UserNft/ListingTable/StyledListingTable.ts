import Link from "next/link";
import styled from "styled-components";
import tw from "twin.macro";

export const StyledUserTable = styled.table`
    ${tw`w-full`}
`
export const StyledUserTableHead = styled.thead`
    ${tw`text-left border-b border-gray-300`}
`
export const StyledUserTableBody = styled.tbody`
    ${tw``}
`
export const StyledUserTableTH = styled.th`
    ${tw``}
`
export const StyledUserTableTR = styled.tr`
    ${tw`w-[90%] border-b border-gray-300 last:border-0`}
`
export const StyledUserTableTD = styled.td`
    ${tw``}
`
export const StyledFromPersonText = styled(Link)`
    ${tw`text-purple-5 dark:text-purple-5`}

`