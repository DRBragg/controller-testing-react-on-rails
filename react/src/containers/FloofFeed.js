import React, { Component } from 'react';
import PostTile from '../components/PostTile';
import FormContainer from './FormContainer';

class FloofFeed extends Component {
  constructor(props){
    super(props);
    this.state={
      floof: {},
      posts: []
    }

    this.addNewPost = this.addNewPost.bind(this);

  }

  componentDidMount(){
    let id = document.getElementById('app').getAttribute('data-id')
    fetch(`/api/v1/floofs/${id}`)
    .then(response => {
      let responseBody = response.json()
      return responseBody
    }).then(responseBody => {
      this.setState({
        floof: responseBody.floof,
        posts: responseBody.posts
      })
    })
  }

  addNewPost(formPayload){
    fetch('/api/v1/posts', {
      method: 'POST',
      body: JSON.stringify(formPayload)
    }).then(response => {
      let newPost = response.json()
      return newPost
    }).then(newPost => {
      this.setState({ posts: [newPost, ...this.state.posts] })
    })
  }

  render(){
    let posts = this.state.posts.map(post => {
      return(
        <PostTile
          key={post.id}
          post={post}
          floof={this.state.floof}
        />
      )
    })
    return(
      <div>
        <h3>{this.state.floof.name} says...</h3>
        <h6>Floofiness rating: {this.state.floof.floofiness}</h6>
        <img src={this.state.floof.image} />
        <FormContainer
          addNewPost={this.addNewPost}
          floofId={this.state.floof.id}
        />
        {posts}
      </div>
    )
  }
}

export default FloofFeed;
