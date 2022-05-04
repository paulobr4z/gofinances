import React from 'react';
import { TouchableOpacityProps  } from 'react-native';

import {
  ButtonRegister,
  TextButton,
} from './styles';

interface IButton extends TouchableOpacityProps {
  title: string;
}

export function Button({
  title,
  ...rest
}: IButton) {
  return (
    <ButtonRegister {...rest}>
      <TextButton>{title}</TextButton>
    </ButtonRegister>
  );
}
