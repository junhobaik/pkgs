// src/@types/index.ts

type ReactRef<T> = React.RefObject<T> | React.MutableRefObject<T> | React.Ref<T>;

type HTMLElementType<T extends React.ElementType> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<React.HTMLAttributes<infer U>, any>
    ? U
    : never
  : never;
