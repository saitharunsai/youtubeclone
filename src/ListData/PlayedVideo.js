import React from 'react';
import {Paper} from '@material-ui/core';

const PlayedVideo=(props)=>{
    return(
        
            <Paper elavation={6} style={{height:'5%'}}>
                <iframe frameBorder="1" height="300" width="600" title="videoPlayer" 
                    src={`https://www.youtube.com/embed/${props.playingVideoId}`}
                    />
            </Paper>  
        
    )
}

export default PlayedVideo;