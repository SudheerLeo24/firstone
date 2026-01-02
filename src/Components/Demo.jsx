import React, { Component } from 'react'

export default class Demo extends Component {
    constructor(){
        super();
        this.state={
            name:"sudheer",
            id:2457384,
            stock:true,
             categories:["All","TV","Mobile"]
        }
       

    }
    handleSubmit(e){
        alert(e.target.value);
    }
  render() {
    return (
      <div>
        <dl>
            <dt>name</dt>
            <dd>{this.state.name}</dd>
            <dt>id</dt>
            <dd>{this.state.id}</dd>
            <dt>stock</dt>
            <dd>{(this.state.stock==true)?"Available":"out of stock"}</dd>
        </dl>
        <h2>Select catagory</h2>
        <select name="" id="" onChange={this.handleSubmit}>
            {
                this.state.categories.map(category=>
                    <option key={category}>{category}</option>
                )
            }
        </select>
      </div>
    )
  }
}
