import React, {Component} from 'react'
import Axios from 'axios';
 
//https://www.googleapis.com/youtube/v3/search?q=${}&type=video&maxResults={results}&part=snippet&key={API}


class PlayedList extends Component{
   
    render(){
        const { PlayedList}=this.props     
        return(
               <div>
                   {
                       PlayedList.map((link,index)=>{
                           var frame= <div  key={index}><iframe width="300" height="200" src={link}></iframe>
                           </div>
                            return frame;
                            
                        })   
                   }
               </div> 
        );
    }
}

export default PlayedList;