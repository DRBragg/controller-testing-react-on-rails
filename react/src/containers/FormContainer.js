import React, { Component } from 'react';
import BodyField from '../components/BodyField';

class FormContainer extends Component {
  constructor(props){
    super(props);
    this.state= {
      body: '',
    }

    this.handleBody = this.handleBody.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }


  handleBody(event){
    this.setState({ body: event.target.value })
  }

  handleFormSubmit(event){
    event.preventDefault()
    let formPayload = {
      body: this.state.body,
      floof_id: this.props.floofId,
    }
    this.props.addNewPost(formPayload)
    this.clearForm()
  }

  clearForm(){
    this.setState({
      body: ''
    })
  }

  render(){
    return(
      <form onSubmit={this.handleFormSubmit}>
        <BodyField
          content={this.state.body}
          label="Post"
          name= "post"
          handleChange={this.handleBody}
        />
        <input type="submit" value="Add Post!" />
      </form>
    )
  }
}

export default FormContainer;
