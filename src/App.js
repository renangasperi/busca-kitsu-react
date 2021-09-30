import React from 'react';
import './App.css';
import PageHeader from './components/PageHeader';
import PageFooter from './components/PageFooter';
import MainContent from './components/MainContent'

function App() {
  return (
    <div className="App">
      <PageHeader></PageHeader>
      <MainContent></MainContent>
      <PageFooter></PageFooter>
    </div>
  );
}

export default App;
