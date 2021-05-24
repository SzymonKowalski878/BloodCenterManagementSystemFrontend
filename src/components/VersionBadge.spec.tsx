import React from 'react';
import { render } from '@testing-library/react';
import { VersionBadge } from './VersionBadge';

// `describe` defines a test suite - useful to group component-related tests:
/*
PASS  src/components/VersionBadge.spec.tsx
  <VersionBadge>
    ✓ should display the project name with version (15 ms)
*/
describe('<VersionBadge>', () => {
  const PREFIX = 'V';

  // `it` creates a test case
  // the test should be named in a way that you can read it starting with `it`:
  // "it should display the project name with version"
  it('should display the project name with version', () => {
    // the `render` method from @testing-library/react renders the passed JSX, with children
    const wrapper = render(<VersionBadge prefix={PREFIX}/>);

    // assertions are made with `expect`
    // there are get*, query* and find* functions, difference described here:
    // https://testing-library.com/docs/queries/about#types-of-queries
    expect(wrapper.getByText(`pz-2021 ${PREFIX}1.0.0`)).toBeTruthy();
  });
});