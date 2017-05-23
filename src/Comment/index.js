import React, { Component } from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import CommentActions from './Comment.actions';
import CommentStore from './Comment.store';
import './Comment.css';

class CommentBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      commentList: []
    }
  }

  getList(){
    fetch('/ajax/data/realtime?key=d672ea80170454d92cb2494b43113c55')
    .then((response) => response.json())
    .then((response) => CommentStore.dispatch(CommentActions.showAll(response.result.result)))
  }

  refresh(){
    this.getList();
  }

  componentDidMount(){
    this.getList();
    CommentStore.subscribe(() => {
      this.setState({
        commentList: CommentStore.getState().commentList
      })
    })
  }

  addComment(){
    var action = CommentActions.addComment({author: "xxxx", comment: "test"})
    CommentStore.dispatch(action);
  }

  render(){
    return (
      <div>
        <h1>Comments</h1>
        <p><button onClick={this.addComment.bind(this)}>添加comment</button></p>
        <CommentList data={this.state.commentList} loading={this.state.loading}/>
        <button onClick={this.refresh.bind(this)}>刷新</button>
        <CommentForm />
      </div>
    )
  }
}

export default CommentBox;
