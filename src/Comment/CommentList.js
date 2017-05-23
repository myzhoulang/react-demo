import React, { Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

class CommentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      style: {
        display: 'block'
      }
    }
  }

  static propTypes = {
    data: PropTypes.array.isRequired
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.data !== this.state.data
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.setState({ data: nextProps.data });
    }

    // if(this.props.loading !== nextProps.loading){
    //   var newStyle = Object.assign({}, this.state.style)
    //   newStyle.display = nextProps.loading?'block':'none'
    //   this.setState({style:newStyle});
    // }
  }

  render() {
    var coments = this.state.data.map((item) => {
      return (
        <Comment author={item.author} key={item._id}>{item.companyName}</Comment>
      )
    })

    return (
      <div className="commentList">
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {coments}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default CommentList;