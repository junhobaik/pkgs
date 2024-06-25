import { ElementType } from 'react';
import { UseInputProps } from './input.type';

export const useInput = <T extends ElementType = 'input'>(props: UseInputProps<T> & { as?: T }) => {};
