import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      style:{
        display:'block'
      }
    }
  }

  componentWillReceiveProps(nextProps){
    if(this.props.loading !== nextProps.loading){
      var newStyle = Object.assign({}, this.state.style)
      newStyle.display = nextProps.loading?'block':'none'
      this.setState({style:newStyle});
    }
  }

  render(){
    var coments = this.props.data.map((item)=>{
      return (
        <Comment author={item.author} key={item.id}>{item.comment}</Comment>
      )
    })

    return (
      <div className="commentList">
        <p style={this.state.style}>加载中......</p>
        {coments}
      </div>
    );
  }
}

export default CommentList;