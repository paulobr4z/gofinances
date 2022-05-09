import React from 'react';

import {
  Container,
  Category,
  Icon,
} from './styles';

interface ICategotySelect {
  title: string;
  onPress: () => void;
}

export function CategotySelectButton({
  title,
  onPress
}: ICategotySelect) {
  return (
    <Container onPress={onPress}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
