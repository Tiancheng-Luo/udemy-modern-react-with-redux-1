import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router'

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts()
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li key={post.id} className="list-group-item">
          <Link to={`/posts/${post.id}`}>
            <strong>{post.title}</strong>
          </Link>
          <span className="pull-xs-right">{post.categories}</span>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all }
}


// function mapDispatchToProps(dispatch) {//TODO see how flux dispatcher file compairs
//   return bindActionCreators({ fetchPosts }, dispatch)
// }
//http://redux.js.org/docs/api/bindActionCreators.html

export default connect(mapStateToProps, { fetchPosts })(PostsIndex) //(null, mapDispatchToProps)(PostsIndex)
