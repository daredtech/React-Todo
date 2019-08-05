import React from 'react';
// import { ReactComponent } from '*.svg';

 class TodoForm extends React.Component {

    constructor () {
        super();
        this.state = { 
            item: ''
        };
    };

    // update the input value as it changes
    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
            });
        // temp for debugging
        console.log(event.target.value);
    };

    submitItem = event => {
        // to prevent the dafault event
        event.preventDefault();
        //add the item
        this.props.addItem(this.state.item);
        // temp for debugging
        console.log('Item added');
    }


    render () {
        return (
            <form onSubmit={this.submitItem}>

            <input 
            type = 'text'
            value = {this.item}
            name = 'item'
            placeholder = 'to do ...'
            onChange = {this.handleChanges}
            />
           
            {/* <button onClick={this.submitItem}> Add Todo </button> */}
            <button > Add Todo </button>
            <button onClick={this.props.clearItems}> Clear Components </button>

            </form>





         
        )
    }
 }

 export default TodoForm;