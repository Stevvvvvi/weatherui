import styled from "styled-components";

export const InputButton = styled.button`
    width: 100px;
    height: 50px;
    border-radius: 5px;
    background-color: cyan;
    transition: all 0.15s linear;
    box-shadow: none;
    margin: 0px 10px;
    &:hover {
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: rgba(0, 0, 0, 0.65);
    }
    &:active {
        background-color: skyblue;
    }
`;

export const CountryInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    & input {
        margin: 0px 5px;
    }
`;
