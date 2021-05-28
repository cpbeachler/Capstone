import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Modal from "./components/Modal"
import Main from "./components/Home/Main"
import Binder from "./components/Binder"
import Trade from "./components/Trade"
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";

function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch()
  // const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      dispatch(authenticate())
      // setLoaded(true);
    })();
  }, [dispatch]);

  // if (!loaded) {
    // return null;
  // }

  return (
    <BrowserRouter>
      <NavBar />
      <Modal />
      <Switch>
        <ProtectedRoute path="/binders" exact={true} >
          <Binder />
        </ProtectedRoute>
        <ProtectedRoute path="/trade" exact={true} >
          <Trade />
        </ProtectedRoute>
        <Route path="/" exact={true}>
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
