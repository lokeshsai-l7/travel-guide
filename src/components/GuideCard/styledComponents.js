import styled from 'styled-components'

export const Card = styled.li`
  width: 50%;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 8px;
  }
`
export const GuideImage = styled.img`
  width: 100%;
  margin: 0px;
`
export const PlaceName = styled.h1`
  color: #475569;
  font-size: 16px;
  font-weight: 700;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const PlaceDescription = styled.p`
  color: #64748b;
  font-size: 14px;
  font-family: 'Roboto';
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const TextContainer = styled.div`
  background-color: #ffffff;
  padding: 10px;
  margin: 0px;
`
