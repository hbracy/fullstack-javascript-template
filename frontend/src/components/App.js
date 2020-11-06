import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Container from '@material-ui/core/Container';
import RootReducer from '../reducers/RootReducer'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/index.css';

export const store = createStore(RootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <Container>
        <Header title={'Template'} />
        <Main />
        <Footer title={'Template'} />
      </Container>
    </Provider>
  );
}
