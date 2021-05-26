import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import styled from '@emotion/styled';
import Header from './components/Header';
import {Main} from './components/main';
import {Footer} from './components/footer';
import { QueryClient, QueryClientProvider } from 'react-query';

const Content = styled.div`
    min-height: 110vh;
    display: grid;
    grid-template-areas:
    "header"
    "main"
    "footer";       
`;

const queryClient = new QueryClient();

export const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [fontSize, setFontSize] = useState(3);

  const changeMode = () => {
    setIsDark(!isDark);
  }
  const changeSize = (event : any) => {
    setFontSize(event.target.value);
  }
  return  <Content style={{fontSize:fontSize+"vh"}}>
        <QueryClientProvider client={queryClient}>
            <Router>
              <Header isDarkColor={isDark} changeColor={changeMode} changeSize={changeSize} />
              <Main isDarkColor={isDark} />
              <Footer isDarkColor={isDark}/>
            </Router>
          </QueryClientProvider>
        </Content>
  ;
}

// kamil kalwejt - grid
