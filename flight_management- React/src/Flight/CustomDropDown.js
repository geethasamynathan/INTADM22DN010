// import React from 'react'
// export const CustomDropdown = (props) => (
// <div className="form-group">
// <strong>{props.Aircraft_id}</strong>
// <select
// className="form-control"
// name="{props.Aircraft_id}"
// onChange={props.onChange}
// >
// <option defaultValue>Select {props.name}</option>
// {props.options.map((item, index) => (
// <option key={index} value={item.Aircraft_id}>
// {item.Aircraft_Name}
// </option>
// ))}
// </select>
// </div>
// )
// export default class CustomListDropDown extends React.Component {
// constructor() {
// super()
// this.state = {
// collection: [],
// value: '',
// }
// }
// componentDidMount() {
// fetch('http://localhost:56530/api/Aircraft')
// .then((response) => response.json())
// .then((res) => this.setState({ collection: res }))
// }
// onChange = (event) => {
// this.setState({ value: event.target.value })
// }
// render() {
// return (
// <div className="container mt-4">
// <CustomDropdown
// name={this.state.Aircraft_id}
// options={this.state.collection}
// onChange={this.onChange}
// value={this.state.Aircraft_id}
// />
// </div>
// )
// }
// }
import React, { Component } from 'react'
import Select from 'react-select'
import axios from 'axios'

export default class App1 extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectOptions : [],
      id: "",
      name: ''
    }
  }

 async getOptions(){
    const res = await axios.get('http://localhost:56530/api/Aircraft')
    const data = res.data

    const options = data.map(d => ({
      value : d.Aircraft_id,
      label : d.Aircraft_Name

    }))

    this.setState({selectOptions: options})

  }

  
  handleChange(selectOptions) {
    this.setState({selectOptions});
   }

  componentDidMount(){
      this.getOptions()
  }

  render() {
    console.log(this.state.selectOptions);
    return (
      <div>
        <Select name={this.state.value} options={this.state.selectOptions} onChange={this.handleChange.bind(this)} value={this.state.value} />
      </div>
    )
  }
}