import React from 'react';

import GlobalStyles from './global/GlobalStyles';
import Header from './components/header/index';
import Routes from './global/routes/routes';

function App() {
  return (
    <>
      <GlobalStyles/>
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    </>
  );
}

export default App;
