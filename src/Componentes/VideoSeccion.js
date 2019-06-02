import React, { Component } from 'react';
import YouTube from 'react-youtube';


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
           
                <div id="cabecera">
                    {/* <div className="yt-video">
                    <iframe src="https://www.youtube.com/embed/HktQVHNvG3s?rel=0"  allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div> */}
                {/* <div className="">
                <YouTube
                    videoId="HktQVHNvG3s"
                    opts={opts}
                    onReady={this._onReady}
                    onEnd={this._onEnd}
                />
            </div> */}
            {/* <iframe src="//www.youtube.com/embed/4t-JboICb28?rel=0;controls=0&amp;showinfo=0&amp;autoplay=1&amp;html5=1&amp;allowfullscreen=true&amp;wmode=transparent" frameborder="0" allowfullscreen id="video">
</iframe> */}

<iframe src="https://www.youtube.com/embed/HktQVHNvG3s?loop=1&amp;playlist=HktQVHNvG3s&amp;controls=0&amp;showinfo=1&amp;autoplay=1&amp;autohide=0&amp;wmode=transparent&amp;frameborder=0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="video"></iframe>
            </div>
        );
    }
}

export default VideoSeccion;