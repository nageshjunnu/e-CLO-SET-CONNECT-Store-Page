import React from 'react';
import ContentsFilter from './components/ContentsFilter';
import ContentsList from './components/ContentsList';
import SearchBar from './components/SearchBar';
import GlobalStyle from './styles/globalStyles';

const App = () => {
  return (
    <>
    
      <GlobalStyle />
      <div className="header">
        <h1>CONNECT</h1>
        <div className="required-feature">REQUIRED FEATURE</div>
      </div>
      <div className="container">
      
      <div className="search-bar">
        <SearchBar />
      </div>
      <div className="filter-section">
        <ContentsFilter />
      </div>
      <div className="contents-list">
        <ContentsList />
      </div>
    </div>
    </>
  );
};

export default App;