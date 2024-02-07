import styled from 'styled-components'

const PlayButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px 15px;
  font-family: 'Roboto';
  font-size: 12px;
  color: #223a5f;
  background-color: #ffffff;
  cursor: pointer;

  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`

export default PlayButton
