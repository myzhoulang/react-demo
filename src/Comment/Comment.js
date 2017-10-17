import React, { Component } from 'react';
// import ReactDOM from "react-dom";
import  Util  from '../Util/util';

class Comment extends Component {
  constructor(props) {
    super(...props);
    this._showAuthor = this.showAuthor.bind(this);
  }
  parseHtml() {
    return {__html: this.props.children}
  }

  showAuthor() {
    alert(this.props.author);
  }


  render() {
    return (
      <div className="comment">
        {this.props.seconds}
        <h2 className="commentAuthor"  onClick={this._showAuthor}>
          {this.props.author}
        </h2>
        <div dangerouslySetInnerHTML={this.parseHtml()}></div>
      </div>
    );
  }
}
Comment = Util(Comment)
export default Comment;
