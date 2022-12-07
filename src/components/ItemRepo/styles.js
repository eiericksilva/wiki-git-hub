import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    height: auto;
    
    h3 {
        font-size: 2rem;
        color: #FAFAFA;
    }

    p {
        font-size: 1rem;
        color: #FAFAFA60;
        margin-bottom: 20px;
        

    }

    a.remove {
        color: #FAFAFA;
        text-decoration: none;
        background-color: #ff0000;
        padding: 7px;
        border-radius: 10px;
        border: none;
        font-family: 'Montserrat', sans-serif;

        &:hover {
            opacity: 70%;
            cursor: pointer;
        }
    }

    a.viewRepo {
        color: #091226;
        text-decoration: none;
        background-color: #FAFAFA;
        padding: 7px;
        border-radius: 10px;
        margin-right: 10px;

        &:hover {
            opacity: 70%;
        }
    }
    
    hr {
        margin: 20px 0;
        border-color: #FAFAFA50;
    }
`;