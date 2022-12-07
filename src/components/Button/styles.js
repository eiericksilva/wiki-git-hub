import styled from "styled-components";

export const ButtonContainer = styled.button`
    border: 1px solid #FAFAFA;
    background: #FAFAFA;
    border-radius: 20px;

    height: 62px;
    width: 80%;

    margin: 20px auto;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #191d3a;
        color: #FFFFFF;
        transition: ease-in-out .2s;
        cursor: pointer;
    }

`; 