import React from 'react';
import { ArrowBackIos } from '@material-ui/icons';

function Header({ toggleLoading }) {
  const goBack = () => toggleLoading();
  return (
    <header className="main-header w-100 bg-white tc pv3 shadow-4">
      <span className="absolute left-0 pl3" onClick={goBack}>
        <ArrowBackIos />
      </span>
      <span className="b">title</span>
    </header>
  );
}

export default Header;
