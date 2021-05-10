import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function App() {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN
  const id = process.env.REACT_APP_AUTH0_CLIENT_ID

  return (
      <Auth0Provider domain={domain} clientId={id} redirectUri={window.location.origin}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <LoginButton/>
            <LogoutButton/>
          </header>
        </div>
      </Auth0Provider>
  );
}

export default App;
