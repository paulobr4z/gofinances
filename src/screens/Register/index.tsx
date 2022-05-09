import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';
import { CategotySelectButton } from '../../components/CategotySelectButton';

import { CategorySelect } from '../CategorySelect';
 
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
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);    
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);    
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);    
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
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}
            />
            <Separator />
            <TransactionTypeButton
              type='down'
              title='Outcome'
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>

          <CategotySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button title='Enviar' />
      </Form>

      <Modal visible={categoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>

    </Container>
  );
}
