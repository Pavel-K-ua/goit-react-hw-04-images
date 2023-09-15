import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App.jsx';
import 'modern-normalize';
import { Global } from 'styles/Global';
// import { AppStyled } from 'components/App.Styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: '16px',
        paddingBottom: '24px',
      }}
    />
    <Global />
  </>
);
