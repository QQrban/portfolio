import { styled } from 'styled-components';

import { Route, Routes } from 'react-router-dom';

import './App.css';
import AboutPage from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './components/home';

export default function App() {
  return (
    <Application className="App">
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
      <Footer />
    </Application>
  );
}

const Application = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const Content = styled.main`
  flex: 1 1 auto;
`;
