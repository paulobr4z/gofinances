import React, { useState } from 'react';
import { Modal } from 'react-native';
import { useForm } from 'react-hook-form';

import { Input } from '../../components/Input';
import { InputForm } from '../../components/InputForm';
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

interface IFormData {
  [name: string]: any;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const { control, handleSubmit } = useForm();

  function handleTransactionsTypeSelect(type: 'up' | 'down') {
    setTransactionType(type);    
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);    
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);    
  }

  function handleRegister(form: IFormData) {
    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)    
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm
            name='name'
            control={control}
            placeholder='Nome'
          />
          <InputForm
            name='amount'
            control={control}
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

        <Button
          title='Enviar'
          onPress={handleSubmit(handleRegister)}
        />
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
