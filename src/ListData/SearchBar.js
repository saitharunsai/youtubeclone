import React, {Component} from "react";
import {Paper, TextField} from "@material-ui/core";

class SearchBar extends Component{
    render(){
        const {HandleChange, SearchText, FetchVideos}=this.props
    return(
        <Paper elevation={2} style={{padding: "20px"}}>
        
            <div className="input-group">
                <TextField className="col-11 " label="search" value={SearchText} type="text" onChange={HandleChange}/> 
                <button onClick={FetchVideos} className="btn btn-primary">Search</button>
            </div> 
        </Paper>
    );
 }
}
 export default SearchBar;
 