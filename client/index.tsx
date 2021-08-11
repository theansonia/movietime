import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './styles/App.scss';
// import reportWebVitals from './reportWebVitals';
import store from './store';
import App from './App';
import { ScrollToTop } from './hooks/ScrollToTop';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <React.StrictMode> */}
      <ScrollToTop />
      <App />
      {/* </React.StrictMode> */}
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();