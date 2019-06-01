import React, { Component } from 'react';
// import { withStyles  } from '@material-ui/core/styles';
// import StyleSheet from 'react-style';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


// const styles = {
//   header : {
//     backgroundColor: "blue",
//     height: "100vh",
//     backgroundSize: "cover",
//     background: "url('https://lh6.googleusercontent.com/-a_9Yxlct8nE/Ud_A6PcsveI/AAAAAAAAARk/hsE39Mh6Ayk/w1435-h897-no/fondo+de+pantalla+de+paraiso+de+agua+12.jpg')"
  
//   },
  
//   AppBar : {
//     backgroundColor: "green",
//     boxShadow: "none",
//      /* position: "fixed"; */
//     //  -webkit-transition: 2s; 
//     transition: "2s",
//   },
  
//   AppBarNext :{
//         backgroundColor: "red",
//         // -webkit-transition: 2s; /* Safari */
//     transition: "2s"
//   }
// }
class Navegacion extends Component {
  constructor(props) {
		super(props);

		this.state = {};

		this.handleScroll = this.handleScroll.bind(this);
  }
  handleScroll() {
		this.setState({scroll: window.scrollY});
	}
  
  componentDidMount() {
		const el = document.querySelector('nav');
		this.setState({top: el.offsetTop, height: el.offsetHeight});
		window.addEventListener('scroll', this.handleScroll);
	}
  
  render() {
    // const classes = withStyles(styles)
  // const classes = styles;
  // const classes = {"root": "root", "AppBar": "AppBar", "AppBarNext": "AppBarNext"}
  return (
    <div id="navegacion" className="navegacion">
       <Navbar  collapseOnSelect expand="lg" position="static" className={this.state.scroll > this.state.top ? "AppBarNext" : "AppBar"}>
      <NavbarBrand href="/">Logo</NavbarBrand>
      </Navbar>


    </div>
  );
}
}


export default Navegacion;
