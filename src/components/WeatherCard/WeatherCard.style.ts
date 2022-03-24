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
        transform: translateZ(35px);
        transform-style: preserve-3d;
        transform-origin: top;
        & .card-icon{
            margin: 25px 10px;
        }
        i {
            font-weight: 900;
            transform: scale(3);
            background: linear-gradient(0deg, hsla(349, 55%, 30%, 1) 13%, hsla(0, 72%, 79%, 1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        & .card-temperature {
            font-weight: 800;
            font-size: 1.5em;
        }
    }
`;