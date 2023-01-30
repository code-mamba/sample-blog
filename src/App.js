import logo from './logo.svg';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddBlog from './components/AddBlog';
import BlogDetails from './components/BlogDetails';
function App() {
  

  return (
    <Router>
    <div className="App">
      <Navbar></Navbar>
      <div className='content' >
      <Switch>
        <Route exact path="/" >
          <Home></Home>
        </Route>
        <Route path="/add-blog" >
            <AddBlog></AddBlog>
        </Route>
        <Route path='/blogs/:id'>
            <BlogDetails></BlogDetails>
        </Route>

      </Switch>
      </div>
     
    </div>
    </Router>
  );
}

export default App;
