import React from 'react'
import PropTypes from 'prop-types'

import Logo from '@components/logo'
import { NavRoutes } from '@utils/constants/nav_routes'

import Link from 'next/link'

import {
  StyledNav,
  Content,
  Section,
  LogoWrapper,
  CompanyName,
  LinkItem,
  LinkButton,
  LinksSection,
} from './styles'

const propTypes = {
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  logoColor: PropTypes.string,
  borderType: PropTypes.oneOf(['dark', 'light']),
  buttonVariant: PropTypes.oneOf(['dark', 'light']),
  route: PropTypes.string,
}

const defaultProps = {
  textColor: '#000',
  bgColor: '#fff',
  logoColor: 'primary',
  borderType: 'light',
  buttonVariant: 'light',
  route: NavRoutes.HOME,
}

const Nav = ({
  route,
  textColor,
  bgColor,
  logoColor,
  borderType,
  buttonVariant,
}) => {
  return (
    <StyledNav textColor={textColor} bgColor={bgColor} borderType={borderType}>
      <Content>
        <Section>
          <LogoWrapper>
            <Link href="/">
              <Logo icon="company" color={logoColor} disableFill={true} />
            </Link>
          </LogoWrapper>
          <Link href="/">
            <CompanyName logoColor={logoColor}>Company</CompanyName>
          </Link>
        </Section>

        <LinksSection>
          <Link href="/">
            <LinkItem
              isActive={route === NavRoutes.HOME}
              activeColor={logoColor}
            >
              Other page
            </LinkItem>
          </Link>
        </LinksSection>
        <Section>
          <Link href="/">
            <LinkButton variant={buttonVariant}>Get Started</LinkButton>
          </Link>
        </Section>
      </Content>
    </StyledNav>
  )
}

Nav.propTypes = propTypes

Nav.defaultProps = defaultProps

export default Nav
