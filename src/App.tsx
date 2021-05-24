import React from 'react';
// { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider, Container, extendTheme } from '@chakra-ui/react';
//import { Provider } from 'react-redux';
//import {AccountBox } from './components/Notindex.tsx'
import {Box} from "./components/Box";
//import { VersionBadge } from './components/VersionBadge';
//import { ExampleScreen } from './screens/ExampleScreen';
//import { store } from './redux/store';
import { QueryClient, QueryClientProvider } from 'react-query';

const theme = extendTheme({
  components: {
    Divider: {
      baseStyle: {
        marginY: '0.5rem',
      },
    },
  },
});

const queryClient = new QueryClient();

export const App: React.FC = () => {
  return <Box/>
};

// kamil kalwejt - grid