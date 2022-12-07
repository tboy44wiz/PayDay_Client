import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*=== Import the App SCSS ===*/
import './App.scss';


/*==== Import AppStoreProvider HOC ====*/
import AppContextProvider from './contexts/AppContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';



/*====================================================================================================
*                               Components Imports.
* ===================================================================================================*/
import Auth from './views/Auth';
import Home from './views/Home';
import Employee from './views/Employee';
import Enrollment from "./views/Enrollment";
import Financial from './views/Financial';


function App() {
  return (
    <main className="App">
      <Router>
        <AppContextProvider>
          <ThemeContextProvider>

            <Routes>
              {/*======================== Landing Page =======================*/}
              <Route path="/" element={ <Navigate replace to="/login" /> } />
              <Route path='login' element={ <Auth/> } />


              {/*======================== Landing Page =======================*/}
              <Route path="/dashboard" element={ <Home /> } />

              {/*======================== Employee Page =======================*/}
              <Route path="/employee" element={ <Employee /> } />
              {/*<Route path="/employee" element={ <Enrollment /> } />*/}

              {/*======================== Employee Page =======================*/}
              <Route path="/financials" element={ <Financial /> } />

            </Routes>
          </ThemeContextProvider>
        </AppContextProvider>
      </Router>


      {/*==== This is responsible for displaying Toast message on the screen ====*/}
      <ToastContainer />
    </main>
  );
}

export default App;
