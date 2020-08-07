/* istanbul ignore file */

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { font, color, device } from '@utils/styles'

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
