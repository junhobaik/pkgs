import { AriaLabelingProps, DOMProps } from '@react-types/shared';
import { DOMPropNames, DOMEventNames } from '../variables';

interface Options {
  enabled?: boolean;
  /**
   * 레이블링 관련 aria 속성을 필터에 포함할지 여부.
   */
  labelable?: boolean;
  /**
   * 필터에 포함할 기타 속성 이름의 집합.
   */
  propNames?: Set<string>;
  /**
   * 필터에서 제거할 기타 속성 이름의 집합.
   */
  omitPropNames?: Set<string>;
  /**
   * 필터에서 제외할 이벤트 이름의 집합.
   */
  omitEventNames?: Set<string>;
  /**
   * data-* 속성을 생략할지 여부.
   */
  omitDataProps?: boolean;
  /**
   * 이벤트 속성을 생략할지 여부.
   */
  omitEventProps?: boolean;
}

const propRe = /^(data-.*)$/;
const ariaRe = /^(aria-.*)$/;
const funcRe = /^(on[A-Z].*)$/;

/**
 * Filters out all props that aren't valid DOM props or defined via override prop obj.
 * @param props - The component props to be filtered.
 * @param opts - Props to override.
 */
export const filterDOMProps = (props: DOMProps & AriaLabelingProps, opts: Options = {}): DOMProps & AriaLabelingProps => {
  let { labelable = true, enabled = true, propNames, omitPropNames, omitEventNames, omitDataProps, omitEventProps } = opts;
  let filteredProps = {};

  if (!enabled) {
    return props;
  }

  for (const prop in props) {
    const isOwnProp = Object.prototype.hasOwnProperty.call(props, prop);
    const isDOMProp = DOMPropNames.has(prop);
    const isAriaProp = labelable && ariaRe.test(prop);
    const isIncludedProp = propNames?.has(prop);
    const isDataProp = propRe.test(prop);
    const isEventProp = funcRe.test(prop);
    const isDOMEvent = DOMEventNames.has(prop);

    // 생략할 속성 이름에 포함된 경우
    if (omitPropNames?.has(prop)) continue;

    // 생략할 이벤트 이름에 포함되고 이벤트 속성인 경우
    if (omitEventNames?.has(prop) && isEventProp) continue;

    // 이벤트 속성이지만 DOM 이벤트가 아닌 경우
    if (isEventProp && !isDOMEvent) continue;

    // data-* 속성을 생략할지 여부에 따라 생략
    if (omitDataProps && isDataProp) continue;

    // 이벤트 속성을 생략할지 여부에 따라 생략
    if (omitEventProps && isEventProp) continue;

    // 유효한 DOM 속성, aria 속성, 포함된 속성 이름 또는 data-* 속성인 경우
    if ((isOwnProp && (isDOMProp || isAriaProp || isIncludedProp || isDataProp)) || isEventProp) {
      // @ts-ignore
      filteredProps[prop] = props[prop];
    }
  }

  return filteredProps;
};
