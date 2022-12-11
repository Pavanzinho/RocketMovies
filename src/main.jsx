import React from 'react'
import ReactDOM from 'react-dom/client'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import {ThemeProvider} from 'styled-components';

import {Route} from "./routes"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme ={theme}> 
      <GlobalStyles/>
        <Route/>

    </ThemeProvider>
    
  </React.StrictMode>
)
