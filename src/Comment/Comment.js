import React, {Component} from 'react';
import {Util} from '../Util/util.js';

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
        <h2 className="commentAuthor" onClick={this._showAuthor}>
          {this.props.author}
        </h2>
        // 使用dangerouslySetInnerHtml 解析HTML
        <div dangerouslySetInnerHTML={this.parseHtml()}></div>
      </div>
    );
  }
}

export default Util(Comment);
