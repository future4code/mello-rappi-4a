import styled from "styled-components"

export const PageContainer = styled.div`
    width: 360px;
    height: 640px;
    padding: 0 16px 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`

export  const Logo = styled.img`
    width: 104px;
    height: 58px;
    position: absolute;
    top: 88px;
`

export const MainContent = styled.div`
    position: absolute;
    padding: 16px;
    bottom: 188px;
`

export const Button = styled.button`
    display: block;
    height: 42px;
    width: 100%;
    font-size: 16px;
    border-radius: 2px;
    border-style: none;
    letter-spacing: -0.39px;
    background-color: #e86e5a;
    margin: 8px 0px;
`

export const Tittle = styled.p`
    width: 100%;
    margin: 12px 0px;
    letter-spacing: -0.39px;
    text-align: center;
`

export const Link = styled.p`
    width: 100%;
    margin: 0px;
    text-align: center;
    padding-top: 12px;
    letter-spacing: -0.39px;


`