import './App.css';
import {Auth0Provider} from '@auth0/auth0-react';
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Secret from "./Secret";

function App() {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN
    const id = process.env.REACT_APP_AUTH0_CLIENT_ID
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE
    return (
          <Auth0Provider domain={domain} clientId={id} audience={audience} redirectUri={window.location.origin}>
            <div className="App">
              <header className="App-header">
                <LoginButton/>
                <LogoutButton/>
                    <Secret/>
              </header>
            </div>
          </Auth0Provider>
      );
}

export default App;
