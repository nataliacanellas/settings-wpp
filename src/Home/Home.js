import React from 'react';
import Account from '../../components/Account/Account';
import Chats from '../../components/Chatswpp/Chats';
import Greetings from '../../components/Greetings/Greetings';
import Help from '../../components/Help/Help';
import Linked from '../../components/LinkedDevices/Linked';
import Notifications from '../../components/Notifications/Notifications';
import Payments from '../../components/Payments/Payments';
import Starred from '../../components/StarredMessages/Starred';
import StorageData from '../../components/StorageData/StorageData';
import TellFriend from '../../components/TellFriend/TellFriend';

import { Container, Title, Space1 } from './styles';

const Home = () => {
  return (
    <Container>
      <Title>Settings</Title>
      <Greetings/>
      <Space1/>
      <Starred/>
      <Linked/>
      <Space1/>
      <Account/>
      <Chats/>
      <Notifications/>
      <Payments/>
      <StorageData/>
      <Space1/>
      <Help/>
      <TellFriend/>
    </Container>
  )
}

export default Home;