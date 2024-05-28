import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, san-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 80%;
  height: 100vh;
  padding: 16px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`

export default EstiloGlobal
