import React from 'react';
// import { ReactComponent } from '*.svg';

 class TodoForm extends React.Component {

    constructor () {
        super();
        this.state = { 
            todoItem: ''
        };
    };

    // update the input value as it changes
    handleChanges = event => {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
        // temp for debugging
        console.log(event.target.value);
    };

    addItem = event => {
        // to prevent the dafault event
        event.preventDefault();
        // this.setState(
        //     {

        //     }
        // )

        // temp for debugging
        console.log('Item added');
    }


    render () {
        return (
            <>
            <form onSubmit={this.addItem}>
            <p>TodoForm</p>
            <input 
            type = 'text'
            placeholder = 'to do ...'
            onChange = {this.handleChanges}
            />
           
            <button onClick={this.addItem}> Add Todo </button>
            <button> Clear Components </button>

            </form>





            </>
        )
    }
 }

 export default TodoForm;