import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  padding: 40px;
  max-width: 1000px;
  background-color: #eef4f7;
`

export const HeadingEl = styled.h1`
  color: #334155;
  font-size: 20px;
  padding-bottom: 10px;
  border-bottom: 3px solid #52bbf0;
  font-weight: 700;
  font-family: 'Roboto';
`
export const GuideList = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`
