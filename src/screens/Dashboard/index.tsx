import React from 'react';
import { HighlightsCard } from '../../components/HighlightsCard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightsCards,
} from './styles';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://github.com/paulobr4z.png' }} 
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Paulo Braz</UserName>
            </User>
          </UserInfo>
          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightsCards>
        <HighlightsCard />
        <HighlightsCard />
        <HighlightsCard />
      </HighlightsCards>
    </Container>
  );
}
