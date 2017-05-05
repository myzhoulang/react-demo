import React, { Component } from 'react';
import {Util } from '../Util/util.js';

class Comment extends Component {
  parseHtml() {
    console.log(this)
    return {
      __html: this.props.children
    }
  }

  showAuthor() {
    this.alert(this.props.author);
  }

  render() {
    return (
      <div className="comment">
        {this.props.seconds}
        <h2 className="commentAuthor" onClick={this.showAuthor.bind(this)}>
          {this.props.author}
        </h2>
        <div dangerouslySetInnerHTML={this.parseHtml()}></div>
      </div>
    );
  }
}

export default Util (Comment);
