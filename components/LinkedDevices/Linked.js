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

const Linked = () => {
  return (
    <Container>
      <Box>
        <BoxLeft>
          <ViewIcon>
            <PrincipalIcon/>
          </ViewIcon>
          <BoxName>Linked Devices</BoxName>
        </BoxLeft>
        <ArrowIcon/>
      </Box>
    </Container>
  );
}

export default Linked;