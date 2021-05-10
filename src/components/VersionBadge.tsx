import React from 'react';
import { Badge } from '@chakra-ui/react';

import pkg from '../../package.json';
import styled from '@emotion/styled';

// this is a stylistic choice, but I prefer having custom
// styled components at the top of the file, under imports
const CustomBadge = styled(Badge)`
  padding: 0.25rem;
  margin-top: 0.25rem;
  cursor: not-allowed;
`;

// an interface defining component's props and their type
// replaces .propTypes from plain-js React
interface Props {
  prefix: string;
}

// the component itself, React.FC accepts a type argument with props and
// handles children, etc.
export const VersionBadge: React.FC<Props> = ({ prefix }) => {
  // what is actually passed to the component as the first argument is an object with all the props
  // instead of using `props.prefix` we can destructure the argument
  // it's equivalent to `const { prefix } = props;` - any object or array can be destructured
  return <CustomBadge variant="outline">
    { pkg.name } { prefix }{ pkg.version }
  </CustomBadge>;
};