import React from 'react';
import Greetings from '../../components/Greetings/Greetings';

import { Container, Title } from './styles';

const Home = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <Greetings/>
    </Container>
  )
}

export default Home;