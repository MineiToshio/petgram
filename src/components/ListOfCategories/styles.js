import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  width: 100%;
  padding: 0 0 15px 0;
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #cccccc;
  }
  &::-webkit-scrollbar {
    height: 8px;
    background-color: #cccccc;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #828282;
  }
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
