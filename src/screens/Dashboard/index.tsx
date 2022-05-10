import React, { useState } from 'react';

import { HighlightsCard } from '../../components/HighlightsCard';
import { TransactionCard } from '../../components/TransactionCard';

import { IDataList } from '../../types/dashboard';

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  LogoutButton,
  Icon,
  HighlightsCards,
  Transactions,
  Title,
  TransactionsList
} from './styles';

const data: IDataList[] = [
  {
    id: '1',
    type: 'positive',
    title: 'Desenvolvimento de site',
    amount: 'R$ 12.000,00',
    category: {
      name: 'Venda',
      icon: 'dollar-sign',
    },
    date: "13/04/2020"
  },
  {
    id: '2',
    type: 'negative',
    title: 'Hamburgueria Pizzy',
    amount: 'R$ 59,00',
    category: {
      name: 'Alimentação',
      icon: 'coffee',
    },
    date: "10/04/2020"
  },
  {
    id: '3',
    type: 'negative',
    title: 'Aluguel do apartamento',
    amount: 'R$ 1.200,00',
    category: {
      name: 'Casa',
      icon: 'home',
    },
    date: "10/04/2020"
  },
]

export function Dashboard() {
  const [dataList, setDataList] = useState<IDataList[] | null>(data);

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
          <LogoutButton>
            <Icon name='power' />
          </LogoutButton>
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

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={dataList}
          keyExtractor={(_, index) => `id-${index}`}
          renderItem={({ item }: any) => <TransactionCard data={item} />}
        />
        
      </Transactions>
    </Container>
  );
}
