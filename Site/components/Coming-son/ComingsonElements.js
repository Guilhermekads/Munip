import styled from "styled-components";

export const ComingsonContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 864px){
        height: 100vh;
    }
`

export const ComingsonTop = styled.img`
    width: 100%;
    position: absolute;

`

export const ComingsonBot = styled.img`
    width: 100%;
    position: absolute;
    bottom: 0;
`

export const ComingsonCounterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 15%;
    margin-left: 5%;
    margin-right: auto;
    @media screen and (max-width: 768px){
        display: block;
    }
`

export const CounterH1 = styled.h1`
    font-size: 25px;
    color: #01bf71;
    margin: 0.5rem;
    align-items: center;
`

export const Counter = styled.div`
    display: flex;
    margin: 1rem;
   margin-left: 7rem;

   @media screen and (max-width: 768px){
        margin-left: 1rem;
    }

    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`

export const Days = styled.div`
    margin: 1rem;
`

export const Hours = styled.div`
    margin: 1rem;
`

export const Minutes = styled.div`
    margin: 1rem;
`

export const Seconds = styled.div`
    margin: 1rem;

    @media screen and (max-width: 480px){
        display: none;
    }
`

export const Span = styled.span`
    margin-top: 1.5rem;
    font-size: 60px;
    color: #01bf71;

    @media screen and (max-width: 480px){
        margin-top: 1.1em;
        font-size: 40px;
    }
`

export const Time = styled.p`
    font-size: 50px;
    @media screen and (max-width: 480px){
        font-size: 30px;
    }
`

export const Small = styled.small`
    
`

export const Logo = styled.img`
    position: absolute;
    width: 15rem;
    right: 0;
    margin-right: 20%;

    @media screen and (max-width: 768px){
        margin-left: 29%;
        left: 0;
        width: 10rem;
    }
`