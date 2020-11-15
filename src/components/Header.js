import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
  import InputLabel from '@material-ui/core/InputLabel';
  import MenuItem from '@material-ui/core/MenuItem';
  import ListSubheader from '@material-ui/core/ListSubheader';
  import FormControl from '@material-ui/core/FormControl';
  import Select from '@material-ui/core/Select';
  import { TextField } from '@material-ui/core';
  import {Link} from 'react-router-dom'
class Header extends React.Component{
    render(){
      return(
        <div className="header">
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="https://www.olx.com.pk" target="blank"><img src="data:image/png;base64,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" width="50px"/></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                <input  type="text" className="box" placeholder="Pakistan" value="Pakistan" height="150" width="100"  /><i className="fa fa-chevron-down-light "></i>
                <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                <input  type="text" className="box2 fa fa-search" placeholder="Find Cars, Mobilephones and more..."  height="150" width="100"  />
                <button className="ico"><i className="fa fa-search" />  </button>
  
                </a>
              </li>
              <li className="nav-item">
                <Link to="./components/login  " className="nav-link login-btn">login</Link>
              </li> 
              <li className="nav-item">
                <a className="nav-link" href="sell">
                <button className="Sell">+SELL</button>
                </a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown link
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li> */}
            </ul>
          </div>
        </nav>  
        <div className="header2">
          <select name="catogries" >
          <optgroup label="All Catogries">All Catogries</optgroup>
          <optgroup label="All ">
          <option value={1}> Mobile Phones</option>
          </optgroup>
          </select>
          <a className="Heder-link"> Mobilephones</a>
          <a className="Heder-link"> Cars</a>
          <a className="Heder-link"> Motor cycle</a>
          <a className="Heder-link"> Houses</a>
          <a className="Heder-link"> Tv-Video-Audio</a>
          <a className="Heder-link"> Tablets</a>
          <a className="Heder-link"> Lands & Plot</a>

        </div>
        </div>
      )
    }
  }


export default Header;