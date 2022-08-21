import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'
import LoginPage from './loginpage';
import SignupPage from './signuppage';
import UserOverview from './useroverview'
import EnrollPage from './enroll'


function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/user">
          {/* <header className="App-header">
              <p>{!data ? "Loading..." : data}</p>
            </header> */}
            <UserOverview />
          </Route>
          <Route path="/enroll">
            <EnrollPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
