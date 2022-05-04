import React from 'react';
import { TextInputProps  } from 'react-native';

import {
  TextInputRegister,
} from './styles';

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInputRegister {...rest} />
  );
}
