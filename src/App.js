import { Container, Grid } from "@material-ui/core";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./Pages/Potfolio/Portfolio";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Container className={"top_60"}>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Header />
              <div className="main-content container_shadow">
                <Switch>
                  <Route exact path="/">
                    <Resume />
                  </Route>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                </Switch>
              </div>
            </Router>

            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
