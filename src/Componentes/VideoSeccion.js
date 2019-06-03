import React, { Component } from 'react';
import YouTube from 'react-youtube';
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


class VideoSeccion extends Component {
    render() {

        // const opts = {
        //     height: '500',
        //     width: '100%',
        //     playerVars: { // https://developers.google.com/youtube/player_parameters
        //         autoplay: 1,
        //         controls: 0,
        //         rel: 0,
        //         showinfo: 0
        //       }

        // }

        return (

            <div id="videoseccion">
            
             {/* LOGO Y TEXTO CENTRALIZADOS */}
        
        <ul class="list-unstyled" id="headerDescripcion">
          <li >
            <RubberBand delay={2000}><img id="logoDescripcion" src={logo}></img></RubberBand>
          </li>
          <Zoom duration={2000} left delay={2000}><li className="tituloDescripcion">
            Contamos con las marcas N°1 en seguridad a nivel mundial
        </li></Zoom>
        <Zoom duration={2000} left delay={2000} cascade><li className="tituloDescripcion2">
          Hikvision
        </li></Zoom>
        </ul>
    


                <iframe title="videopres" src="https://www.youtube.com/embed/1OPcUqo8VMQ?loop=1&amp;playlist=1OPcUqo8VMQ&amp;mute=1&amp;controls=0&amp;showinfo=1&amp;autoplay=1&amp;autohide=0&amp;wmode=transparent&amp;frameborder=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="video"></iframe>
            </div>
        );
    }
}

export default VideoSeccion;