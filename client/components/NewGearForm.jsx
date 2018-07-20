import React from 'react'

// import {addGearItem} from '../actions/user'

export class NewGearForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      photoUrl: '',
      trustframework: "One",
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('new tool added', this.state)
    // addGearItem(this.state)
    this.props.finish()
  }

  render() {
    return (
      <form className='new-gear-form' onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input onChange={this.handleChange} type="text" value={this.state.name} name='name' />
        </label>
        <br />
        <label>
          Description:
          <input onChange={this.handleChange} type="text" value={this.state.description} name='description' />
        </label>
        <br />
        <label>
          Photo URL:
          <input onChange={this.handleChange} type="text" value={this.state.photo_url} name='photoUrl' />
        </label>
        <br />
        <label>
          Lending conditions: 
          <select name='trustframework' onChange={this.handleChange}>
            <option value='One'>Free Borrowing</option>
            <option value='Two'>Upkeep Koha</option>
            <option value='Three'>Conditional (contact to arrange)</option>
          </select>
        </label>
        <br />
        <input type="submit" value='add Gear' />
        <button onClick={this.props.finish}>Cancel</button>
      </form>
    )
  }
}

export default NewGearForm