import React from 'react';
import styled from '@emotion/styled';
import {IconProceed} from '@apollo/space-kit/icons/IconProceed';
import {breakpoints} from 'gatsby-theme-apollo-core';
import {colors} from '@apollo/space-kit/colors';


colors.indigo.dark = "566788";
colors.indigo.darker = "2f3b59";

const Container = styled.div({
  display: 'flex',
  flexShrink: 0,
  width: 240,
  [breakpoints.lg]: {
    width: 'auto',
    marginRight: 0
  },
  [breakpoints.md]: {
    display: 'none'
  }
});

const StyledLink = styled.a({
  display: 'flex',
  alignItems: 'center',
  color: colors.indigo.dark,
  lineHeight: 2,
  textDecoration: 'none',
  ':hover': {
    color: colors.indigo.darker
  }
});

const StyledIcon = styled(IconProceed)({
  height: '0.75em',
  marginLeft: '0.5em'
});

export default function HeaderButton() {
  return (
    <Container>
      <StyledLink
        href="https://ide.corda.net/?folder=/home/coder/corda-training-code"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Online IDE
        <StyledIcon weight="thin" />
      </StyledLink>
    </Container>
  );
}
