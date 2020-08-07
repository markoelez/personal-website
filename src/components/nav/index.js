import React from 'react'
import PropTypes from 'prop-types'

import Logo from '@components/logo'

import Link from 'next/link'

import { StyledNav, Content, Section, LogoWrapper } from './styles'

const propTypes = {
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  logoColor: PropTypes.string,
}

const defaultProps = {
  textColor: '#000',
  bgColor: '#fff',
  logoColor: 'primary',
}

const Nav = ({ textColor, bgColor, logoColor }) => {
  return (
    <StyledNav textColor={textColor} bgColor={bgColor}>
      <Content>
        <Section>
          <LogoWrapper>
            <Link href="/">
              <Logo icon="myLogo" color={logoColor} disableFill={true} />
            </Link>
          </LogoWrapper>
        </Section>
      </Content>
    </StyledNav>
  )
}

Nav.propTypes = propTypes

Nav.defaultProps = defaultProps

export default Nav
