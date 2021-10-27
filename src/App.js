import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CreateTestimonials from "./components/CreateTestimonials";
import EditTestimonials from "./components/EditTestimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Main} /> 
            <Route path="/createtestimonials" component={CreateTestimonials} />
            <Route path="/edittestimonials" component={EditTestimonials} />
          </Switch>
          </BrowserRouter>
          {/* <Testimonials /> */}
      <Footer />
    </div>
  );
}

export default App;
