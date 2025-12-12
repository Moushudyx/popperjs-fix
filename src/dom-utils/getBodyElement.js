// @flow
import { isElement } from './instanceOf';
import type { Window } from '../types';

export default function getBodyElement(
  element: Element | Window
): HTMLElement {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (
    (isElement(element)
      ? element.ownerDocument
      : // $FlowFixMe[prop-missing]
        element.document) || window.document
  ).body;
}
