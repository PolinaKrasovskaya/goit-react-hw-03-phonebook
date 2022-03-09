import styled from '@emotion/styled';

export const FormWrapper = styled.form`
    display: inline-flex;
    flex-direction: column;
    min-width: 350px;
    padding: 10px;
    border: 2px solid #191970;
    background-color: #F8F8FF;
`

export const InputLabel = styled.label`
    margin-top: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #191970
`

export const FormInrut = styled.input`
    margin-top: 5px;
    max-width: 200px;
    color: #191970
`

export const SubmitButton = styled.button`
    margin-top: 10px;
    max-width: 100px;
    font-size: 14px;
    font-weight: 500;
    color: #191970;
    background-color: white;
    :hover {
        background-color: #191970;
        color: white;
`