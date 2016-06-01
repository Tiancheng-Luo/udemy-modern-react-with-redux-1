import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchPost, deletePost } from '../actions/index'
import { Link } from 'react-router'

class PostsShow extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {
    this.props.fetchPost(this.props.params.id)
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
    .then(() => {
      this.context.router.push('/')
    })
  }

  render() {
    const { post } = this.props

    if(!post)//good for a spinner
      return <div></div>
    return (
      <div>
        <Link to="/" className="pull-xs-right">Back</Link>
        <h3>{post.title}</h3>
        <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete</button>
        <h6>Tags: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post }//index reducer
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow)
