import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { CategotySelect } from '../../components/CategotySelect';
import { Input } from '../../components/Input';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Form,
  Fields,
  TransactionsTypes,
  Separator
} from './styles';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function TransactionTypeSelect(type: string) {
    setTransactionType(type);    
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input
            placeholder='Nome'
          />
          <Input
            placeholder='Preço'
          />

          <TransactionsTypes>
            <TransactionTypeButton
              type='up'
              title='Income'
              onPress={() => TransactionTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <Separator />
            <TransactionTypeButton
              type='down'
              title='Outcome'
              onPress={() => TransactionTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>

          <CategotySelect
            title='Categoria'
          />
        </Fields>

        <Button title='Enviar' />
      </Form>

    </Container>
  );
}
