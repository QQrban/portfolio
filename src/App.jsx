import './App.css';
import { styled } from 'styled-components';
import Footer from './components/footer';
import Header from './components/header';
import HomePage from './components/home';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './components/about';

export default function App() {
  return (
    <Application className="App">
      <Header />
      <Content>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          {/* <Route path="/elektrikell/low/:hour" element={<Elektrikell />} />
          <Route path="/elektrikell/about" element={<About />} /> */}
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
