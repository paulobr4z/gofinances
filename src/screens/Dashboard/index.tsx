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
        <HighlightsCard
          type='up'
          title='Entradas' 
          amount='R$ 17.400,00' 
          lastTransaction='Última entrada dia 13 de abril'
        />
        <HighlightsCard 
          type='down'
          title='Saídas' 
          amount='R$ 1.259,00' 
          lastTransaction='Última saída dia 03 de abril'
        />
        <HighlightsCard 
          type='total'
          title='Total' 
          amount='R$ 16.141,00' 
          lastTransaction='01 à 16 de abril'
        />
      </HighlightsCards>
    </Container>
  );
}
