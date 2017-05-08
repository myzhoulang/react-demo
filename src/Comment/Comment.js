import React, {Component} from 'react';

class Comment extends Component {

  parseHtml(){
    return {
      __html: this.props.children
    }
  }


  render(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        // 使用dangerouslySetInnerHtml 解析HTML
        <div dangerouslySetInnerHTML={this.parseHtml()}></div>
      </div>
    );
  }
}

export default Comment;
