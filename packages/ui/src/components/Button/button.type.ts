import { ElementType, ReactElement } from 'react';

export type ButtonColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ButtonVariants = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

/**
 * Button props 타입 정의
 * @template T extends ElementType
 */
export type UseButtonProps<T extends ElementType = 'button'> = {
  /**
   * 버튼의 참조 객체
   */
  ref?: ReactRef<HTMLButtonElement | null>;
  /**
   * 버튼의 전체 너비 설정
   * @default false
   */
  fullWidth?: boolean;
  /**
   * 시작 부분의 콘텐츠
   */
  startContent?: React.ReactNode;
  /**
   * 끝 부분의 콘텐츠
   */
  endContent?: React.ReactNode;
  /**
   * 로딩 상태 여부
   */
  isLoading?: boolean;
  /**
   * 로딩 스피너 컴포넌트
   */
  spinner?: ReactElement;
  /**
   * 스피너 위치
   */
  spinnerPlacement?: 'start' | 'end';
  /**
   * 버튼 크기
   */
  size?: ButtonSize;
  /**
   * 버튼 모서리 반경
   */
  radius?: ButtonRadius;
  /**
   * 버튼 색상
   */
  color?: ButtonColors;
  /**
   * 버튼 변형 스타일
   */
  variant?: ButtonVariants;
  /**
   * onClick debounce
   */
  debounce?: number | boolean;
} & React.ComponentPropsWithRef<T>;

/**
 * 버튼 속성 인터페이스
 */
export interface ButtonProps extends UseButtonProps<'button'> {}
