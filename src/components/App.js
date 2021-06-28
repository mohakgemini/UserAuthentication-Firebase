import Signup from './Authentication/signup'
import Login from './Authentication/login'
import ForgotPassword from './Authentication/ForgotPassword'
import UpdateProfile from './Authentication/UpdateProfile'
import Dashboard from './dashboard'
import { Container } from 'react-bootstrap'
import {AuthProvider} from '../contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './Authentication/PrivateRoute'

function App() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh"}}>
      <div className="w-100" style={{maxWidth: "400px"}}>
        <Router>
          <AuthProvider>
            <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
            <Route path="/update-profile" component={UpdateProfile}/>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
