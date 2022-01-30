import React from 'react';

import { 
  Container, 
  Profile, 
  ProfilePhoto, 
  ProfileInfo, 
  Name, 
  Status, 
  QrCode,
  QrIcon, 
} from './styles';

const Greetings = () => {
  return (
    <Container>
      <Profile>
        <ProfilePhoto source ={{uri: "https://avatars.githubusercontent.com/u/64443469?v=4"}}/>
        <ProfileInfo>
          <Name>Natalia Canellas</Name>
          <Status>I'm a bitch, I`m a boss 🔥</Status>
        </ProfileInfo>
      </Profile>
      <QrCode>
          <QrIcon/>
      </QrCode>
    </Container>
  );
}

export default Greetings;