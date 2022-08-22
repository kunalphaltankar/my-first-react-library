import { render } from '@testing-library/react';
import React from 'react';

import Button from './Button';

describe('Button', () => {
  it("renders button component with 'Hello World'", () => {
    render(<Button label="Hello World" />);
  });
});
