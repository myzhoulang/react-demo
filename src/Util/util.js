import React, { Component } from 'react';

// 1
export default (ComponsedComponent) =>  {
  class NewComponent extends Component {
    constructor(props) {
      console.log(456)
      debugger;
      super(props);
      this.state = {
        seconds: 0 // 2
      };
    }

    // 3
    componentDidMount() {
      // this.interval = setInterval(this.tick.bind(this), 1000);
    }

    // 3
    componentWillUnmount() {
      clearInterval(this.interval);
    }

    tick() {
      this.setState({
        seconds: this.state.seconds + 1000
      });
    }

    render() {
      console.log(123)
      console.log(ComponsedComponent);
      // let {a, b, ...c} = {a:1, b:2, c:3, d:4};
      // console.log(a)
      // console.log(b)
      // console.log(c)
      // 4
      return <ComponsedComponent {...this.props} {...this.state} />;
    }
  };

  return NewComponent
}
