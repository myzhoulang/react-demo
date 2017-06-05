import React, {Component} from 'react';

class NewsList extends Component {

  componentWillReceiveProps(nextProps) {}

  render() {
    var news = this.props.data.map((item) => {
      return (
        <li key={item.id}>
          {item.comment}
        </li>
      );
    })

    return (
      <div className="commentList">
        {news}</div>
    );
  }
}

export default NewsList;
