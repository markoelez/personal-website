/* istanbul ignore file */

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { font, color, device, mixin } from '@utils/styles'

export const Page = styled.div`
  text-align: center;

  min-height: 100vh;
  width: 100%;

  background-color: ${color.backgroundDarkPrimary};
`

export const Container = styled.div`
  position: relative;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.div`
  position: relative;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 80%;
  height: 100%;

  margin-left: auto;
  margin-right: auto;

  padding-top: 25rem;

  z-index: 10;
`

export const Title = styled(motion.div)`
  color: white;

  ${font.regular};

  ${font.size(30)};
  @media ${device.tablet} {
    ${font.size(50)};
  }

  display: flex;
  margin: 0;

  text-align: center;

  padding-bottom: 20px;
`

export const Description = styled(motion.div)`
  color: white;

  ${font.regular};
  ${font.size(18)};
  @media ${device.tablet} {
    ${font.size(24)};
  }

  text-align: center;
`

export const Video = styled(motion.video)`
  object-fit: cover;

  opacity: 0.15;

  transition: opacity 0.35s linear 0.35s, transform 1s ease,
    -webkit-transform 1s ease;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  min-width: 100%;
  min-height: 100vh;

  z-index: 2;
`

export const Actions = styled.div`
  background: transparent;

  position: relative;

  padding-top: 12rem;

  padding-left: 150px;
  padding-right: 150px;

  max-width: 1450px;
`

export const ArrowWrapper = styled(motion.div)`
  position: relative;

  margin-left: auto;
  margin-right: auto;

  color: white;

  width: 30px;
  height: 30px;
`

export const IconRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  padding-top: 50px;

  width: 60%;
`

export const SocialIcon = styled.a`
  ${font.size(14)};
  ${font.bold};

  text-transform: uppercase;

  padding: 12px 20px;
  margin: 0 5px;

  background-color: #a8f6ce;
  color: #000;

  border-radius: 18px;
  border: 1px solid transparent;

  transition: background 0.3s ease, color 0.3s ease, border 0.3s ease;

  :hover {
    border: 1px solid #a8f6ce;
    background-color: #000;
    color: #fff;
  }

  ${mixin.clickable};
`
