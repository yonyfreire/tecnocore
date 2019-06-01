import React, { Component } from 'react';
import Particles from 'react-particles-js';
import HeadShake from 'react-reveal/HeadShake';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Flip from 'react-reveal/Flip';
import RubberBand from 'react-reveal/RubberBand';
import Slide from 'react-reveal/Slide';
import logo from "./../media/logo/LOGOBLANCO.png"
import logochico from "./../media/logo/logochico.png"
import cctv from "./../media/cctvblanco.png"
import controldeacceso from "./../media/controldeaccesoblanco.png"
import consultoria from "./../media/consultoriablanco.png"
import domotica from "./../media/domoticablanco.png"
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
  DropdownItem,
  Col,
} from 'reactstrap';



class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      cantPuntos: "",
      logoactivo: "",
    };
    this.toggle = this.toggle.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  componentDidMount() {
    const el = document.querySelector('nav');
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);




    //   else 
    if (window.screen.width < 500) {
      this.setState({ cantPuntos: "50" });
    } else {
      this.setState({ cantPuntos: "200" })
    }  //  else 
    //  console.log ("Grande") 



  }

  // componentDidUpdate() {
  //   this.state.scroll > this.state.top ?
  //     document.body.style.paddingTop = `${this.state.height}px` :
  //     document.body.style.paddingTop = 0;
  // }

  render() {
    console.log(this.state.cantPuntos)
    return (
      <div id="header" className="header flex-center ">


        {/* NAVEGACION */}
        <Navbar color="faded" dark expand="sm" fixed="top" className={this.state.scroll > this.state.top ? "marginauto AppBarNext " : "marginauto AppBar"}>
          <RubberBand delay={200} duration={2000}><NavbarBrand href="/"><img className="logoheader d-none d-md-block" src={logo}></img><img className="logoheader d-block d-md-none" src={logochico}></img></NavbarBrand></RubberBand>
          <NavbarToggler color="red" onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Slide delay={200} top><NavItem>
                <NavLink href="#quienes">QUIENES SOMOS</NavLink>
              </NavItem></Slide>
              <Slide delay={200} bottom><NavItem>
                <NavLink href="#productos">TECNOLOGIA</NavLink>
              </NavItem></Slide>
              <Slide delay={200} top><NavItem>
                <NavLink href="#productos">PRODUCTOS</NavLink>
              </NavItem></Slide>
              <Slide delay={200} bottom><NavItem>
                <NavLink href="#productos">CONTACTO</NavLink>
              </NavItem></Slide>
            </Nav>
          </Collapse>
        </Navbar>


      {/* LOGO Y TEXTO CENTRALIZADOS */}
        <Pulse  delay={8000} count={2} duration={1000} >
        <ul class="list-unstyled" id="headerDescripcion">
          <li >
            <Flip duration={2000}><RubberBand delay={2000}><img id="logoDescripcion" src={logo}></img></RubberBand></Flip>
          </li>
          <Zoom duration={2000} left delay={2000} cascade><li className="tituloDescripcion">
            Innovación y tecnología
        </li></Zoom>
        <Zoom duration={2000} left delay={2000} cascade><li className="tituloDescripcion2">
          al servicio de la seguridad
        </li></Zoom>
          <Pulse forever delay={1000} duration={1000} cascade>
            <li >
              <img class="iconosproductos" src={controldeacceso} alt="controldeacceso"></img>
              <img class="iconosproductos" src={consultoria} alt="consultoria"></img>
              <img class="iconosproductos" src={cctv} alt="cctv"></img>
              <img class="iconosproductos" src={domotica} alt="domotica"></img>
            </li>
          </Pulse>
        </ul>
        </Pulse>

      {/* ARROR PARA IR A QUIENES SOMOS */}
        <a href="#quienes">
        <div  className="arrow">
          <span></span>
          <span></span>
        </div>
        </a>

      {/* FONDO EFECTO DE PARTICULAS */}
        <Particles
          height="100vh"
          params={{
            "particles": {

              "number": {
                "value": this.state.cantPuntos
              },
              "line_linked": {
                color: '#fff',
                shadow: {
                  enable: false
                }
              },
              "color": {
                "value": "#fff"
              },

              "size": {
                "value": 3,
              },
              "move": {
                "enable": true,
                "speed": 5,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              },



            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "grab"
                },
                "onclick": {
                  "enable": true,
                  "mode": "repulse"
                }
              },
              "modes": {
                "bubble": {
                  "size": 6,
                  "distance": 40
                },
                "repulse": {
                  "distance": 100,
                  "duration": 0.1
                }
              },
              "resize": true
            },
            "retina_detect": true
          }} />

      </div>
    );
  }
}


export default Header;


