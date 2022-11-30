import { Fragment, useState } from "react"
import { useGetListPostsMutation } from 'src/api/updateUserInfo/updateUserInfo'
import { StyledInput, StyledBtn } from "./updateStyles"


const UserUpdate = () => {
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [sheba_number, setShebaNumber] = useState('')
    const [national_code, setNationalCode] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')

    const [updateUserInfo, {
        data: userData,
        endpointName,
        fulfilledTimeStamp,
        isError,
        isLoading,
        isSuccess
    }] = useGetListPostsMutation()

    const updateUser = () => {
        updateUserInfo({
            email: email,
            first_name: first_name,
            is_male: 0,
            last_name: last_name,
            mobile: mobile,
            national_code: national_code,
            sheba_number: sheba_number,
        })
    }
    return (
        <Fragment>
            <StyledInput type="text" placeholder="نام" onChange={(e) => setFirstName(e.target.value)} />
            <StyledInput type="text" placeholder="نام خانوادگی" onChange={(e) => setLastName(e.target.value)} />
            <StyledInput type="text" placeholder="شماره شبا" onChange={(e) => setShebaNumber(e.target.value)} />
            <StyledInput type="text" placeholder="کدملی" onChange={(e) => setNationalCode(e.target.value)} />
            <StyledInput type="text" placeholder="ایمیل " onChange={(e) => setEmail(e.target.value)} />
            <StyledInput type="text" placeholder="موبایل" onChange={(e) => setMobile(e.target.value)} />
            {isLoading ?
                <span>...loading</span>
                :
                <StyledBtn onClick={() => updateUser()}>
                    ارسال
                </StyledBtn>
            }
        </Fragment>
    )
}

export default UserUpdate