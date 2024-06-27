// src/components/Button/button.type.ts

import { ComponentPropsWithRef, ElementType, ReactElement, Ref } from 'react';

export type ButtonColors = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
export type ButtonVariants = 'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow' | 'ghost';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type ButtonSpinnerPlacement = 'start' | 'end';

export type UseButtonProps<T extends ElementType> = {
  /**
   * 버튼으로 렌더링될 HTML 요소 또는 컴포넌트
   * @default 'button'
   */
  as?: T;

  /** 버튼 요소에 대한 참조 */
  ref?: Ref<HTMLElementType<T>>;

  /** 버튼 내부의 콘텐츠 */
  children?: React.ReactNode;

  /**
   * 버튼에 적용할 추가 CSS 클래스
   * @default ''
   */
  className?: string;

  /**
   * 버튼을 부모 요소의 전체 너비로 확장할지 여부
   * @default false
   */
  fullWidth?: boolean;

  /** 버튼 텍스트 앞에 표시될 콘텐츠 */
  startContent?: React.ReactNode;

  /** 버튼 텍스트 뒤에 표시될 콘텐츠 */
  endContent?: React.ReactNode;

  /**
   * 버튼의 로딩 상태 여부
   * @default false
   */
  isLoading?: boolean;

  /** 로딩 중 표시할 커스텀 스피너 요소 */
  spinner?: ReactElement;

  /**
   * 스피너의 위치 (시작 또는 끝)
   * @default 'start'
   */
  spinnerPlacement?: ButtonSpinnerPlacement;

  /**
   * 버튼의 크기
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * 버튼 모서리의 둥글기 정도
   * @default 'lg'
   */
  radius?: ButtonRadius;

  /**
   * 버튼의 색상 테마
   * @default 'default'
   */
  color?: ButtonColors;

  /**
   * 버튼의 시각적 변형 스타일
   * @default 'solid'
   */
  variant?: ButtonVariants;

  /**
   * 클릭 이벤트에 대한 디바운스 설정 (밀리초 또는 부울)
   * @default false
   */
  debounce?: number | boolean;

  /**
   * 버튼이 크기 조절 가능한지 여부
   * @default false
   */
  scalable?: boolean;

  /**
   * 버튼의 비활성화 상태 여부
   * @default false
   */
  disabled?: boolean;

  /** 버튼 클릭 시 실행될 콜백 함수 */
  onClick?: (e: React.MouseEvent<HTMLElementType<T>, MouseEvent>) => void;
};

export type ButtonProps<T extends ElementType> = UseButtonProps<T> & Omit<ComponentPropsWithRef<T>, keyof UseButtonProps<T>>;
