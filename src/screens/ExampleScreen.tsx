import React from 'react';
import { Alert, AlertDescription, AlertIcon, AlertTitle, Badge, Box, Button, ButtonGroup, Divider } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';

import { useSelector } from '../redux/store';
import { doClear, doSample } from '../redux/ducks/example.duck';
import { petsApi } from '../api';
import { Pet } from '../api/generated';

// screens should usually contain no styles - they should be a combination of different components + logic

interface Params {
  someParam?: string;
}

// some generics have default types if you don't pass the type argument (React.FC here):
export const ExampleScreen: React.FC = () => {
  const params = useParams<Params>();
  // all store changes have to be dispatched as actions, the store cannot be modified directly
  const dispatch = useDispatch();
  // another stylistic choice, for hooks: put destructured ones after simple assignments
  // `useSelector` allows us to get a part of the redux state
  const { count } = useSelector((state) => state.example);

  // and queries go below destructured hooks
  // `useQuery` is generic, usually there is no need to specify types, since TS infers them nicely,
  // but if you need the error type, you have to provide both:
  const dummyQuery = useQuery<Pet[], Response>([ 'query', 'key' ], () => petsApi.listPets(10), {
    retry: false, // if you expect the call to return 404 for example, you can disable retries
  });

  return <Box borderWidth="1px" borderRadius="lg" padding="1rem" overflow="hidden">
    <h1>
      Example Screen
      { params.someParam && <Badge ml="1">with some parameter: {params.someParam}</Badge> }


      { !params.someParam && <Button ml="1" as={Link} to="/with-params/test!" size="sm">
        Test with route parameter
      </Button> }
    </h1>
    <Divider/>

    <ButtonGroup>
      <Button colorScheme="blue">Does nothing</Button>
      <Button colorScheme="pink">This one too</Button>
      <Button colorScheme="green" isLoading={dummyQuery.isLoading}>This one is loading</Button>
    </ButtonGroup>

    <Alert status="error" borderRadius="lg" marginTop="1rem">
      <AlertIcon/>
      <AlertTitle>These buttons don't do anything!</AlertTitle>
      <AlertDescription>Nothing at all.</AlertDescription>
    </Alert>

    { dummyQuery.isError && <Alert status="error" borderRadius="lg" marginTop="1rem">
      <AlertIcon/>
      <AlertTitle>Dummy query error!</AlertTitle>
      <AlertDescription>{ dummyQuery.error.status }</AlertDescription>
    </Alert> }

    <Box borderWidth="1px" borderRadius="lg" padding="1rem" marginTop="1rem" overflow="hidden">
      <Box>Redux count: { count }</Box>
      <ButtonGroup>
        {/* simple event handlers (generally one function call) can be written in-line,
            more complex ones should be defined before JSX */}
        <Button onClick={() => dispatch(doSample(100))}>Set to 100</Button>
        <Button onClick={() => dispatch(doSample(count + 1))}>+1</Button>
        <Button onClick={() => dispatch(doSample(count + 10))}>+10</Button>
        <Button onClick={() => dispatch(doClear())}>Clear</Button>
      </ButtonGroup>
    </Box>
  </Box>;
};