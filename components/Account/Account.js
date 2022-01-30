import React from 'react';

import { 
  Container, 
  Box, 
  BoxLeft,
  ViewIcon,
  PrincipalIcon, 
  BoxName, 
  ArrowIcon,
} from './styles';

const Account = () => {
  return (
    <Container>
      <Box>
        <BoxLeft>
          <ViewIcon>
            <PrincipalIcon/>
          </ViewIcon>
          <BoxName>Account</BoxName>
        </BoxLeft>
        <ArrowIcon/>
      </Box>
    </Container>
  );
}

export default Account;