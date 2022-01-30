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

const StorageData = () => {
  return (
    <Container>
      <Box>
        <BoxLeft>
          <ViewIcon>
            <PrincipalIcon/>
          </ViewIcon>
          <BoxName>Storage and Data</BoxName>
        </BoxLeft>
        <ArrowIcon/>
      </Box>
    </Container>
  );
}

export default StorageData;