import React from 'react';
import { IDataList } from '../../types/dashboard';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  Icon,
  CategoryName,
  Date
} from './styles';

interface ITransactionCard {
  data: IDataList;
}


export function TransactionCard({ data }: ITransactionCard) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount type={data.type}>
        {data.type === 'negative' && '- '}
        {data.amount}
      </Amount>
      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
