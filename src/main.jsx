import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './ThemeProvider.js'
import { Provider } from 'react-redux'
import store from './store/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
     <Provider store={store}>
      <PersistGate persistor={persistStore(store)}>
    <App />   
    </PersistGate>
   </Provider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
