import { ThemeContext, ThemeProvider, useTheme } from 'styled-components';
import './App.css';
import { Header } from './components/header/Header';
import { useState } from 'react';
import { darkMode, lightMode } from './themes';
import { Body } from './components/body/Body';
import { Footer } from './components/footer/Footer';
import { Form } from './components/contact form/Form';

function App() {

  const theme = localStorage.getItem("theme")
  const [ appTheme, setAppTheme ] = useState( theme === "light" ? lightMode : darkMode);

  const updateTheme = (theme) =>{
    localStorage.setItem("theme",theme.mode);
    setAppTheme(theme)

  }
  

  return (

    <div className="App" style={{backgroundColor:appTheme.appColor}}>
      <ThemeProvider theme={appTheme}>
        <Header updateTheme={updateTheme} />
        <Body />
        <hr/>
        <div id="form" ></div>
        <Form />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
