import React, { useState, useEffect } from 'react';
import {
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage'

import { useForm } from 'react-hook-form';

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

const schema = yup.object().shape({
  name: yup
  .string()
  .required('Nome é obrigatório!'),
  amount: yup
  .number()
  .typeError('Informe um valor númerico.')
  .positive('O valor não pode ser negativo.')
});

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const dataKey = '@gofinances:transactions';
  
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema)
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

  async function handleRegister(form: IFormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação.');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria.');      
    }

    const newTransaction = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [
        ...currentData,
        newTransaction
      ]


      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));
      
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possivel salvar.');      
    }
  }

  useEffect(() => {
    async function loadData() {
      const data = await AsyncStorage.getItem(dataKey);

      console.log(JSON.parse(data!));
    }

    loadData();
  }, [])

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              autoCapitalize='sentences'
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <InputForm
              name='amount'
              control={control}
              placeholder='Preço'
              keyboardType='numeric'
              error={errors.amount && errors.amount.message}
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
    </TouchableWithoutFeedback>
  );
}
