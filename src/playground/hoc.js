// Higher order component - component that renders another component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Hola</h1>
    <p>Te saludo, {props.info}, el gatito {props.gatito} </p>    
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is Private Info, dont whare o te mando a la Hari.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
    {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in Before.</p>}        
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

//ReactDOM.render(<AdminInfo isAdmin={true} info='Hari Seldon' gatito='mas bonito' />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='Hari Seldon' gatito='mas bonito' />, document.getElementById('app'));

