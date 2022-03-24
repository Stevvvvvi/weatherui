import styled from "styled-components";

export const WeatherCardContainer = styled.div<any>`
    border: solid 2px darkgray;
    width: 150px;
    height: 200px;
    box-shadow: 0px 0px 20px 2px rgba(0,0,0,0.38);
    border-radius: 5px;
    background: ${props=>props.backgroundColor};
    perspective: 1000px;
    padding: 10px 10px;
    transform-style:preserve-3d;
    margin: 10px 10px;
    cursor: pointer;
    font-weight: 400;
    & .card-text{
        transform: translateZ(30px);
        transform-style: preserve-3d;
        transform-origin: top;
        & .card-icon{
            margin: 25px 10px;
        }
        i {
            font-weight: 900;
            transform: scale(3);
        }
        & .card-temperature {
            font-weight: 800;
            font-size: 1.5em;
        }
    }
`;