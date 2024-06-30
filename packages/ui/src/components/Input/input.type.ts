// src/components/Input/input.type.ts

import { ComponentPropsWithRef, ElementType, ReactElement, Ref } from 'react';

export type InputColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type InputVariants = 'bordered' | 'flat' | 'underlined' | 'faded';
export type InputRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type InputSpinnerPlacement = 'start' | 'end';

export type UseInputProps<T extends ElementType> = {
  /**
   * 인풋으로 렌더링될 HTML 요소 또는 컴포넌트
   * @default 'button'
   */
  as?: T;

  /** 인풋 요소에 대한 참조 */
  ref?: Ref<HTMLElementType<T>>;

  /**
   * 인풋에 적용할 추가 CSS 클래스
   * @default ''
   */
  className?: string;

  /**
   * 컨테이너에 적용할 추가 CSS 클래스
   * @default ''
   */
  containerClassName?: string;

  /**
   * 인풋 컨테이너에 적용할 추가 CSS 클래스
   * @default ''
   */
  inputContainerClassName?: string;

  /**
   * 인풋 라벨에 적용할 추가 CSS 클래스
   * @default ''
   */
  labelClassName?: string;

  /**
   * 인풋 설명에 적용할 추가 CSS 클래스
   * @default ''
   */
  descriptionClassName?: string;

  /**
   * 인풋 메세지에 적용할 추가 CSS 클래스
   * @default ''
   */
  messageClassName?: string;

  /**
   * 인풋을 부모 요소의 전체 너비로 확장할지 여부
   * @default false
   */
  fullWidth?: boolean;

  /** 인풋 텍스트 앞에 표시될 콘텐츠 */
  startContent?: React.ReactNode;

  /** 인풋 텍스트 뒤에 표시될 콘텐츠 */
  endContent?: React.ReactNode;

  /**
   * 인풋의 로딩 상태 여부
   * @default false
   */
  isLoading?: boolean;

  /** 로딩 중 표시할 커스텀 스피너 요소 */
  spinner?: ReactElement;

  /**
   * 스피너의 위치 (시작 또는 끝)
   * @default 'start'
   */
  spinnerPlacement?: InputSpinnerPlacement;

  /**
   * 인풋의 크기
   * @default 'md'
   */
  size?: InputSize;

  /**
   * 인풋 모서리의 둥글기 정도
   * @default 'md'
   */
  radius?: InputRadius;

  /**
   * 인풋의 색상 테마
   * @default 'default'
   */
  color?: InputColors;

  /**
   * 인풋의 시각적 변형 스타일
   * @default 'solid'
   */
  variant?: InputVariants;

  /**
   * 인풋의 비활성화 상태 여부
   * @default false
   */
  disabled?: boolean;

  /** 인풋 클릭 시 실행될 콜백 함수 */
  onClick?: (e: React.MouseEvent<HTMLElementType<T>, MouseEvent>) => void;

  /** 인풋 포커스 시 실행될 콜백 함수 */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /** 인풋 블러 시 실행될 콜백 함수 */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  value?: string;
  message?: string;
  description?: string;
  label?: string;
  labelPlacement?: 'top' | 'left';
};

export type InputProps<T extends ElementType> = UseInputProps<T> & Omit<ComponentPropsWithRef<T>, keyof UseInputProps<T>>;
