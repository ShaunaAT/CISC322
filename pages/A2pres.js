import React from "react";
import YouTube from "react-youtube";
import NavBar from "../components/nav";
import styles from '@/styles/Home.module.css'

export default class YoutubeVideo
extends React.Component {
render() {
	const opts = {
	height: "390",
	width: "640",
	playerVars: {
		autoplay: 1,
	},
	};

	return (
        <>
            <NavBar></NavBar>
            <div className={styles.vid}>
                <YouTube videoId="3NQwsFNw4Dw"
                    opts={opts} onReady={this._onReady} />
            </div>
        </>
	);
}

_onReady(event) {
	event.target.pauseVideo();
}
}
