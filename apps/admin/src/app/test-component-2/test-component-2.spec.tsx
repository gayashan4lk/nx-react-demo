import { render } from '@testing-library/react';

import TestComponent2 from './test-component-2';

describe('TestComponent2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestComponent2 />);
    expect(baseElement).toBeTruthy();
  });
});
