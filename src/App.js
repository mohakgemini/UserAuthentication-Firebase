import Signup from './components/signup'
import Login from './components/login'
import ForgotPassword from './components/ForgotPassword'
import UpdateProfile from './components/UpdateProfile'
import Dashboard from './components/dashboard'
import { Container } from 'react-bootstrap'
import {AuthProvider} from './contexts/AuthContext'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'

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
