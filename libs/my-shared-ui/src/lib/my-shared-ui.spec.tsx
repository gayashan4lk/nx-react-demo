import { render } from '@testing-library/react';

import MySharedUi from './my-shared-ui';

describe('MySharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MySharedUi />);
    expect(baseElement).toBeTruthy();
  });
});
