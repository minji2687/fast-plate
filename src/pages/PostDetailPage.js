import React, { Component } from 'react';
import PostDetail from '../containers/PostDetail';
import { withPage } from '../contexts/PageContext';

class PostDetailPage extends Component {
  componentDidMount() {
    this.props.handlePageOpen('detail');
  }

  componentWillUnmount() {
    this.props.handlePageClose('detail');
  }

  render() {
    const { match } = this.props;
    const { location } = this.props;

    const restaurantId = match.params.rKeyword;
    return <PostDetail restaurantId={restaurantId} location={location} />;
  }
}

export default withPage(PostDetailPage);
