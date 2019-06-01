import React, { Component } from 'react';
import YouTube from 'react-youtube';


class VideoSeccion extends Component {
    render() {

        const opts = {
            height: '500',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                rel: 0,
                showinfo: 0
              }
            
        }

        return (
           
                <div id="videoseccion">
                    <div className="yt-video">
                    <iframe src="https://www.youtube.com/embed/HktQVHNvG3s?rel=0"  allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                {/* <div className="">
                <YouTube
                    videoId="HktQVHNvG3s"
                    opts={opts}
                    onReady={this._onReady}
                    onEnd={this._onEnd}
                />
            </div> */}
            </div>
            
        );
    }
}

export default VideoSeccion;