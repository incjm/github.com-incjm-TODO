import React from 'react';

import logo from '../Images/bluePlus.png';
import './AddedList.css';
import TodoList from '../todo/TodoList';

class AddedList extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            click: false,
        };
        
    }
    
    addTodo = e => {
        this.setState({click : true})
        console.log(this.state.click);
        
        //return this.a;
        //return new TodoList()
    }

    render() {
        const { click } = this.state
        //console.log(a);
        //this.a = a;
        return(
            <div>
                <div>{click && <TodoList />}</div>
                <h5>Функція компонента</h5>
                <button type="button" className="btn" onClick={this.addTodo}><img src={logo} alt="logo" />Add TODO list</button>
            </div>
        )
    }
}

export default AddedList;