import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import MyContainer from './MyContainer';
import RootReducer from '../reducers/RootReducer'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import '../styles/index.css';
import ProgressIndicator from './ProgressIndicator';

export const store = createStore(RootReducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <MyContainer className='flexColumn'>
        <Header title={'Title'} className='container1'/>
        <ProgressIndicator />
        <Main className='container8 flexColumn'/>
        <Footer title={'Title'} className='container1'/>
      </MyContainer>
    </Provider>
  );
}
