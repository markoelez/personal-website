/* istanbul ignore file */

import React from 'react'
import Head from 'next/head'

import Nav from '@components/nav'
import { NavRoutes } from '@utils/constants/nav_routes'

import {
  Page,
  Container,
  Main,
  Title,
  Description,
  IconRow,
  SocialIcon,
} from './styles'

const Home = () => {
  const ANIMATION_DELAY = 0.2
  const ANIMATION_DURATION = 0.5
  const DELTA_Y = -50
  const TRANSITION_EASE_IN = [0.48, 0.15, 0.25, 0.96]

  return (
    <Page>
      <Head>
        <title>Marko Elez</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav
        bgColor="transparent"
        textColor="#fff"
        logoColor="white"
        borderType="light"
        route={NavRoutes.HOME}
      />

      <Container>
        <Main>
          <Title
            initial={{ opacity: 0, y: DELTA_Y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY,
              duration: ANIMATION_DURATION,
              ease: TRANSITION_EASE_IN,
            }}
          >
            Marko Elez
          </Title>

          <Description
            initial={{ opacity: 0, y: DELTA_Y }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: ANIMATION_DELAY,
              duration: ANIMATION_DURATION,
              ease: TRANSITION_EASE_IN,
            }}
          >
            Full-stack software engineer
          </Description>

          <IconRow>
            <SocialIcon href={`mailto:markoelez7@gmail.com}`} target="_blank">
              Email
            </SocialIcon>
            <SocialIcon href="http://github.com/markoelez" target="_blank">
              GitHub
            </SocialIcon>
            <SocialIcon
              href="https://mlz-personal-website.s3.us-east-2.amazonaws.com/RESUME.pdf"
              target="_blank"
            >
              Resume
            </SocialIcon>
          </IconRow>
        </Main>
      </Container>
    </Page>
  )
}

export default Home
