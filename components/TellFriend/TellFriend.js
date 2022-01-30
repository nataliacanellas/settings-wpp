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

const TellFriend = () => {
  return (
    <Container>
      <Box>
        <BoxLeft>
          <ViewIcon>
            <PrincipalIcon/>
          </ViewIcon>
          <BoxName>Tell a Friend</BoxName>
        </BoxLeft>
        <ArrowIcon/>
      </Box>
    </Container>
  );
}

export default TellFriend;