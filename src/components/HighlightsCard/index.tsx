import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction
} from './styles';

export function HighlightsCard() {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <Icon name='arrow-up-circle' />
      </Header>
      <Footer>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Última entrada dia 13 de abril</LastTransaction>
      </Footer>

    </Container>
  );
}
