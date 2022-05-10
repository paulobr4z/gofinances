import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useFocusEffect } from '@react-navigation/native'

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
import { formatDate } from '../../utils/formatDate';
import { formatCurrency } from '../../utils/formatCurrency';

export function Dashboard() {
  const [data, setData] = useState<IDataList[]>([]);

  const dataKey = '@gofinances:transactions';

  async function loadTransactions() {
    // await AsyncStorage.removeItem(dataKey)
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionsFormatted: IDataList[] = transactions
    .map((item: IDataList) => {
      const amount = formatCurrency(item.amount);

      const date = formatDate(item.date)

      return {
        id: item.id,
        name: item.name,
        amount,
        type: item.type,
        category: item.category,
        date,
      }
    });


    setData(transactionsFormatted);    
  };

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(useCallback(() => {
    loadTransactions();
  }, []));
  
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
          data={data}
          keyExtractor={(_, index) => `id-${index}`}
          renderItem={({ item }: any) => <TransactionCard data={item} />}
        />
        
      </Transactions>
    </Container>
  );
}
