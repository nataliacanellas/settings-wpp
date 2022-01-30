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

const StarredMessages = () => {
  return (
    <Container>
      <Box>
        <BoxLeft>
          <ViewIcon>
            <PrincipalIcon/>
          </ViewIcon>
          <BoxName>Starred Messages</BoxName>
        </BoxLeft>
        <ArrowIcon/>
      </Box>
    </Container>
  );
}

export default StarredMessages;