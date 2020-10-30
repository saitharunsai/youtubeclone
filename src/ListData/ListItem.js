import React, {Component} from 'react';
import {Grid, Paper, Typography, GridList} from '@material-ui/core';

class ListItem extends Component{
    render(){
        const {video, index}=this.props;
        return(
               <div   >
                   {this.props.page==="videos"&&(
                       <div  >
                           <div
                            onClick={()=>{
                            this.props.getPlayingVideoId(video.id.videoId, index)}}>                           
                            <img src={video.snippet.thumbnails.default.url} alt=""/>

                           </div>
                           <button className="neoBtn">+</button>
                        
                       </div >
                   )}
                   {this.props.page==="played-videos" &&(
                       <div>
                           <div
                                onClick={()=>{
                                    this.props.getPlayingVideoId(video.id.videoId, index)}}>                           
                                    <img src={video.snippet.thumbnails.default.url} alt=""/>
                                    <h6 className="m-3">{video.snippet.title}</h6>           
                           </div>
                           
                       </div>
                   )

                   
                   }
               </div>
        )
    }
}

export default ListItem;