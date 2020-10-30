import React, {Component} from 'react';
import {Grid, TableRow, TableCell} from '@material-ui/core';
import SearchBar from '../ListData/SearchBar';
import VideoList from '../ListData/MainList';
import PlayedList from '../ListData/PlayedList';
import PlayedVideo from '../ListData/PlayedVideo'
import axios from 'axios';
import '../Layput/Layout.css';
class Layout extends Component{
    
    state={
        SearchText:'',
        playingVideoId:"2iSZMv64wuU",
        MainVideoList:[],
        playedList:[],
        
    }
 
    HandleChange=(e)=>{
        this.setState({
            SearchText: e.target.value
        });
    }

    FetchVideos=()=>{
        let request=axios.get(`https://www.googleapis.com/youtube/v3/search?q=${this.state.SearchText}&type=video&maxResults=5&part=snippet&key=AIzaSyCHjB_0fKn_Ja_Mly81PXUR5Tu4-BGyNq8`)
        console.log(request)
        request
        .then(response=>{
             //const MainVideoList=response.data.items.map(obj=> "https:www.youtube.com/embed/" + obj.id.videoId);
          console.log("items are" ,response.data.items);
            this.setState({
                MainVideoList: response.data.items
            });
        })
    }

    PlayedList=(id, index)=>{
        
        let MainVideoList=this.state.playedList.slice();
        let video = this.state.MainVideoList[index];
        MainVideoList.push(video);
        this.setState({
            playingVideoId: id,
            playedList: MainVideoList
        });

        
        // const playedListitem=this.state.MainVideoList.find(item=>item.id.videoId===id.videoId)
        // const playedList=[...this.state.playedList,playedListitem]
        // this.setState({
        //     playedList: playedList,
        // })
    }
    
    render(){
        return(
            <Grid justify="center" container >
                <Grid item xs={12} >
                    <Grid container>
                        <Grid item xs={12}>
                             <SearchBar
                                 HandleChange={this.HandleChange}
                                SearchText={this.state.SearchText}
                                FetchVideos={this.FetchVideos}          
                            />
                        </Grid>
                        <Grid item xs={4} >
                            <VideoList
                                page={"videos"}
                                VideoList={this.state.MainVideoList}
                                getPlayingVideoId={(id,index)=>
                                    {
                                        this.PlayedList(id, index)
                                    }
                                }                
                                
                            />
                        </Grid>
                        <Grid container xs={8} justify="center">
                            <Grid item xs={12}  >
                                <PlayedVideo 
                                    playingVideoId={this.state.playingVideoId}
                                />
                            </Grid>
                            <Grid item xs={5} >
                                 Played List:
                                <VideoList
                                    getPlayingVideoId={(id, index)=>{
                                        this.PlayedList(id,index)
                                    }}
                                    page={"played-videos"}
                                    VideoList={this.state.playedList}
                                    addVideoToBookmark={index => {
                                      this.addVideoToBookmark(index);
                                    }}
                                />
                                </Grid>
                            <Grid item xs={5} >
                                BookMarked List:
                                <VideoList
                                    getPlayingVideoId={(id, index)=>{
                                        this.PlayedList(id,index)
                                    }}
                                    page={"bookmark-videos"}
                                    VideoList={this.state.playedList}
                                    addVideoToBookmark={index => {
                                      this.addVideoToBookmark(index);
                                    }}
                                />
                               </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        
        );
    }
}

export default Layout;