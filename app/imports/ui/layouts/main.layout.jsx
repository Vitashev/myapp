import React from 'react';
import AccountsUIWrapper from '../components/accounts.jsx';

export const MainLayout = ({content}) => (
    <div className="main-layout">
 <nav className="purple" role="navigation">
    <div className="nav-wrapper container">
    
      <ul className="left hide-on-med-and-down">
        <li><a href="#">Navbar Link1</a></li>
        <li><a href="#">Navbar Link2</a></li>
        <li><a href="#">Navbar Link3</a></li>
      </ul>
      <div className="right hide-on-med-and-down">
        <AccountsUIWrapper />
      </div>
      <ul id="nav-mobile" className="side-nav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>



  <div className="container">
    <div className="section">
      <div className="row">
        <div className="col s12 m12">
          {content}
        </div>
      </div>

    </div>
  </div>

  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
          <h5 className="white-text">Company Bio</h5>
          <p className="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Settings</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
          </ul>
        </div>
        <div className="col l3 s12">
          <h5 className="white-text">Connect</h5>
          <ul>
            <li><a className="white-text" href="#!">Link 1</a></li>
      
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      Made by <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>
    </div>
);