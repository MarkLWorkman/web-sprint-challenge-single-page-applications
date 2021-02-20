import React from "react";
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Pizza from './components/Pizza';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/pizza' component={ () => <Pizza setOrder={setOrder} />} />
      <Route path='/confirmation' component={ () => <Confirmation order={order} />} />
    </>
  );
};
export default App;
