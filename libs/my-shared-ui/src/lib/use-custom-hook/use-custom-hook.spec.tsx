import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useCustomHook from './use-custom-hook';

describe('useCustomHook', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCustomHook());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
