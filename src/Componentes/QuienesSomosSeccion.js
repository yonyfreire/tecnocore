import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
import HeadShake from 'react-reveal/HeadShake';
import Zoom from 'react-reveal/Zoom';
import Pulse from 'react-reveal/Pulse';
import Fade from 'react-reveal/Fade';
import Swing from 'react-reveal/Swing';
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
    Row
  } from 'reactstrap';
  import imgquienes from "./../media/quienessomos.png";
import logochico from "./../media/logo/logosimple.png"



class QuienesSomosSeccion extends Component {
    render() {
        return (
            <div id="quienes">
                <Slide duration={1500} top cascade  ><h1 className="pb-4 tituloseccion">Quienes Somos</h1></Slide>
                <Swing ><img className="img-fluid" src={imgquienes}></img></Swing >
                <div className="mt-3">
                <Zoom delay={1000}><Col md="4" sm="12" className="marginauto"><img id="logoparrafo" src={logochico}></img></Col></Zoom>
                <Fade delay={1100} left ><Col md="6" sm="12" className="h6 marginauto">Somos una empresa especializada en tecnologia de la informacion.<br /> Contamos con un equipo con amplia experiencia en videovigilancia, control de Acceso, servicios informáticos, Networking, Software, Telefonía IP, entre otros. <br /> <br />Nuestro enfoque es darle a cada cliente una atención personalizada, ofreciéndole la mejor solución para sus necesidades.</Col></Fade>
                </div>
            </div>
        );
    }
}

export default QuienesSomosSeccion;