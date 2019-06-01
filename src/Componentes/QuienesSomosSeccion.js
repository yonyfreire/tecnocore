import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';
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
                <Slide animation-delay="4s" top cascade  ><h1 className="pb-4 tituloseccion">Quienes Somos</h1></Slide>
                <img className="img-fluid" src={imgquienes}></img>
                <div className="mt-3">
                <Col md="4" sm="12" className="marginauto"><img id="logoparrafo" src={logochico}></img></Col>
                <Col md="6" sm="12" className="h6 marginauto">Somos una empresa especializada en tecnologia de la informacion.<br /> Contamos con un equipo con amplia experiencia en videovigilancia, control de Acceso, servicios informáticos, Networking, Software, Telefonía IP, entre otros. <br /> <br />Nuestro enfoque es darle a cada cliente una atención personalizada, ofreciéndole la mejor solución para sus necesidades.</Col>
                </div>
            </div>
        );
    }
}

export default QuienesSomosSeccion;