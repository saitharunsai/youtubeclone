import React, {Component} from 'react'
import ListItem from './ListItem';
import {Grid, Paper, Typography, GridList} from '@material-ui/core';

 
//https://www.googleapis.com/youtube/v3/search?q=${}&type=video&maxResults={results}&part=snippet&key={API}


class VideoList extends Component{
   
    render(){
        const {SearchText, PlayedList}=this.props     
        return(
               <GridList>
                   <ul>
                   {this.props.page==="videos"&&
                    this.props.VideoList &&
                    this.props.VideoList.map((val, index) =>(
                        <ListItem
                        video={val}
                        index={index}
                        getPlayingVideoId={this.props.getPlayingVideoId}
                        page={this.props.page}
                    />
                    ))
                   }
                   {this.props.page=== "played-videos" &&
                   this.props.VideoList &&
                   this.props.VideoList
                   .reverse()
                   .map((val, index)=>(
                       <ListItem
                       video={val}
                       index={index}
                       getPlayingVideoId={this.props.getPlayingVideoId}
                       page={this.props.page}/>
                   ))
                   }
                   </ul>
               </GridList>
        );
    }
}

export default VideoList;