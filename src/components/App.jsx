import GeneralStyles from '../styles/generalStyles';
import Theme from '../theme/Theme';
import { Routes, Route } from 'react-router';
import Layout from './Layout/Layout';
import HomePage from '../pages/Home/HomePage';


export const App = () => {

  return (
    <>
      <GeneralStyles />
      <Theme>
        <Routes>
          <Route path='/' element = { <Layout /> }>
            <Route index element={ <HomePage /> } />
          </Route>
        </Routes>
      </Theme>
    </>
  );
};
