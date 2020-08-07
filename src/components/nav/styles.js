/* istanbul ignore file */

import styled, { css } from 'styled-components'
import { font, mixin, device } from '@utils/styles'

export const StyledNav = styled.nav`
  position: absolute;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 25px 10px;

  ${({ borderType }) => handleBorderType(borderType)};

  background: ${(props) => props.bgColor};
  color: ${(props) => props.textColor};

  z-index: 20;

  @media ${device.laptop} {
    padding: 25px;
  }
`

const handleBorderType = (type) => {
  switch (type) {
    case 'light':
      return css`
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      `
    case 'dark':
      return css`
        border-bottom: 1px solid rgb(241, 241, 241);
      `
    default:
      return
  }
}

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;

  margin-left: auto;
  margin-right: auto;
`

export const CompanyName = styled.div`
  ${font.bold};
  ${font.size(30)};

  color: ${(props) => props.logoColor};

  ${mixin.clickable};

  padding-left: 12px;
`

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LinksSection = styled(Section)`
  display: none;

  @media ${device.laptop} {
    display: flex;
  }
`

export const LogoWrapper = styled.div`
  ${mixin.clickable};

  min-width: 40px;
`

export const LinkItem = styled.div`
  display: flex;

  ${mixin.clickable};

  ${({ isActive, activeColor }) =>
    isActive &&
    css`
      border-bottom: 2px solid ${activeColor};
    `};

  ${font.medium};
  ${font.size(16)};

  padding: 0 30px;
`

export const LinkButton = styled.div`
  display: flex;

  ${mixin.clickable};

  ${font.medium};
  ${font.size(10)};

  border-style: solid;
  border-radius: 18px;

  padding: 8px 14px;

  background: #a8f6ce;
  color: #000;
  text-transform: uppercase;

  transition: 0.15s linear;
  transition-property: color, border-color, background-color;

  @media ${device.laptop} {
    ${font.medium};
    ${font.size(16)};
    padding: 15px 48px;
  }
`
