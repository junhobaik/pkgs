import { ElementType } from 'react';

export type UseInputProps<T extends ElementType = 'input'> = {} & React.ComponentPropsWithRef<T>;
export interface InputProps extends UseInputProps<'input'> {}
