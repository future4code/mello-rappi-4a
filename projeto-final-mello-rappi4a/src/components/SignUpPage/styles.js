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
    bottom: 26px;
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
`

export const Tittle = styled.p`
    width: 100%;
    margin-bottom: 20px;
    letter-spacing: -0.39px;
    text-align: center;
`

export const InputBorder = styled.div`
  width: 100%;
  height: 56px;
  border: 1px solid #b8b8b8;
  position: relative;
  border-radius: 2px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;

  label{
    width: 60px;  
    letter-spacing: -0.29px;
    color: #b8b8b8;
    font-size: 12px;
    padding-left: 5px;
    padding-right: 5px;
    position:relative;
    top:-8px;
    left:5px;
    background-color:white;
  }
  input{
      width: 60%;
      border: none;
     
      left: 0px;
      margin-top: 4px;
      text-align: start;
      height: 18px;
      padding-left: 16px;
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