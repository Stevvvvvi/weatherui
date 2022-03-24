import styled from "styled-components";

export const CardListContainer = styled.div`
    & .current-weather-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px 10px;
    }
    & .forecast-weather-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
        flex-shrink: 0;
    }
`;
