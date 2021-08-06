import React from 'react'
import ReactDOM from 'react-dom'
import './app/App.scss'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ThemeContextProvider from './contexts/ThemeContext'
import StateContextProvider from './contexts/stateContext'
import { Provider } from 'react-redux'
import store from './app/store'
import App from './app/App'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <React.StrictMode> */}
      <ScrollToTop />

      <ThemeContextProvider>
        <StateContextProvider>
          {/* <PageContextProvider> */}

          <App />
          {/* </PageContextProvider> */}
        </StateContextProvider>
      </ThemeContextProvider>

      {/* </React.StrictMode> */}
    </Router>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
