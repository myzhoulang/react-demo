import React, {Component} from 'react';
import NewsList from './NewsList';

class NewsBox extends Component {
  constructor(props) {
    super(props)

    console.log(props)

    this.state = {
      lists: []
    }

  }

  static lists = [
    {
      id: 0,
      author: 'AAAA',
      comment: `那是 React 在保护你免受 <strong style="color:red">XSS</strong>攻击。有一个方法解决这个问题，
              但是框架会警告你别使用这种方法.`
    }, {
      id: 1,
      author: 'BBB',
      comment: `我们在这里唯一做的就是调用 remarkable 库`
    }, {
      id: 2,
      author: 'CCC',
      comment: `这是一个特殊的 API，故意让插入原始的 HTML 变得困难，但是对于 <em>remarkable </em> 我们将利用这个后门`
    }, {
      id: 3,
      author: 'DDD',
      comment: `These methods are called "lifecycle hooks".`
    }, {
      id: 4,
      author: 'EEE',
      comment: `Note how we save the timer ID right on this.`
    }, {
      id: 5,
      author: 'FFF',
      comment: `We will tear down the timer in the <code>componentWillUnmount()</code> lifecycle hook:`
    }
  ];

  getList() {
    console.log(NewsBox.lists)
    this.setState({lists: NewsBox.lists});
  }

  componentDidMount() {
    this.getList()
  }

  render() {
    return (
      <div>
        <h1>Comments</h1>
        <NewsList data={this.state.lists}/>
      </div>
    )
  }
}

export default NewsBox;
