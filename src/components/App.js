import React from 'react';
import Header from './Header';
import User from "./User";
import Main from "./Main";

function App() {
  return (
    <>
      <div className="root">
        <Header />
        <User />
        <Main />
      </div>
    </>
  );
}

export default App;
