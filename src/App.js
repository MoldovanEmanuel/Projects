import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from './components/Nav/Nav';
import { Auth } from './features/Auth/Auth';
import { AuthContextProvider } from './features/Auth/Auth.context';
import { BooksList } from './features/Books/BookList';
import { BooksDetails } from './features/Books/BooksDetails';
import { EditBooks } from './features/Books/EditBooks';
import { Home } from './features/Home/Home';
import { Contact } from './features/Contact/Contact';
import { Profile } from './features/Profile/Profile';


import './App.css';
import { AddBook } from './features/Books/AddBook';

function App() {
  return (
    <div className="container">
      <AuthContextProvider>
        <Router>
          <Nav />
          <Switch>  
            <Route exact path ="/" component={Home} />
            <Route exact path="/books" component={BooksList} />
            <Route exact path="/books/add" component={AddBook} />
            <Route exact path="/books/edit/:id" component={EditBooks} />
            <Route exact path="/books/:id" component={BooksDetails} />
            <Route path="/contact" component={Contact}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Auth} />
            <Route path="/register" component={Auth} />
            <Route path="*" component={() => <h1>404 Page not found</h1>} />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
