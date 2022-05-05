import React from 'react';

import {
  Container,
  Category,
  Icon,
} from './styles';

interface ICategotySelect {
  title: string;
}

export function CategotySelect({
  title,
}: ICategotySelect) {
  return (
    <Container>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
