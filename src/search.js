import "./style.css";
import Word1 from "./word/word1-json";
import React, { Component } from 'react';


class SearchBox extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      left:'10vh',
      height:'3vh',
      width:'20vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }
    const items = Word1.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.word.toLowerCase().includes(this.state.search.toLowerCase()) || data.translate.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
    }).map(data=>{
      return(
      <div>
        <ul>
          <li style={{position:'relative',left:'10vh'}}>
            <span style={styleInfo}>{data.no}</span>
            <span style={styleInfo}>{data.word}</span>
            <span style={styleInfo}>{data.translate}</span>
          </li>
        </ul>
      </div>
      )
    })

    return (
      <div>
      <div class="search-box">
        <input
          type="text"
          placeholder="Search..."
          onChange={e => this.searchSpace(e)}
        />
        <div class="search-btn">
          <i class="fas fa-search" />
        </div>
        <div class="cancel-btn">
          <i class="fas fa-times" />
        </div>
        <div class="search-data" />
      </div>
      <div>{items}</div>
    </div>
    )
  }
}

export default SearchBox;