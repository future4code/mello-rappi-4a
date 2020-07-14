import styled from "styled-components"

export const PageContainer = styled.div`
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
    padding: 0 16px;
    width: 100%;
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

export const InputBorder = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid #b8b8b8;
  position: relative;
  border-radius: 2px;
  margin: 16px 0px;
  display: inline-block;

  label{
    letter-spacing: -0.29px;
    color: #b8b8b8;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    position:relative;
    top:-28px;
    left:5px;
    background-color:white;
  }

  input{
      width: 60%;
      position: relative;
      right: 45px;
      text-align: start;
      height: 18px;
      margin: 19px 0 19px 16px;
      border: none;
      outline: none;
      &:selected{
          background-color: white;
      }   
  }
`

export const ShowPasswordIcon = styled.img`
  padding-right: 16px;  
  display: block;
  position: absolute;
  top: 50%;
  right: 4px;
  transform: translateY(-50%)
`