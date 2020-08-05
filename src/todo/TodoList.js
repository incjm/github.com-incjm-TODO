import React from 'react';
import './todoList.css';
import list from '../Images/list.png'
import bluePencil from '../Images/bluePencil.png'
import blueTrash from '../Images/blueTrash.png'
import greenPlus from '../Images/greenPlus.png'
import ListBody from '../ListBody/ListBody';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            submit: '',
            myInput: '',
            items: []
        };
        this.nameList = this.nameList.bind(this);
        this.bodyList = this.bodyList.bind(this);
        this.addTask = this.addTask.bind(this);
    }

    nameList = (e) => {
        this.setState({text:e.target.value});
    }

    delete = (e) => {
        this.setState({text:''})
    }

   

    bodyList = (e) => {
        this.setState({myInput:e.target.value});
    }

    addTask = (e) => {
        e.preventDefault();
        if (this.state.myInput.length === 0) {
            return;
          }
          const newItem = {
            myInput: this.state.myInput,
            id: Date.now(),
            trash: Date.now()
          };
          this.setState(state => ({
            items: state.items.concat(newItem),
            myInput: ''
          })
          
          );
        }

        

    render() {
        return(
        <div className="TodoList">
            <form onSubmit={this.addTask}>
                <div className="box">
                    <table className="table">
                        <thead>
                            <tr className="list">
                                <td className="calendar"><img src={list} alt="" /></td>
                                <td className="headList"><input className="headfield" placeholder={this.state.text} value={this.state.text} onChange={this.nameList}/></td>
                                <td className="edit"><img src={bluePencil} alt="" /></td>
                                <td className="trash"><img src={blueTrash} alt="" onClick={this.delete} /></td>
                            </tr>
                            <tr className="area">
                                <td className="plus"><img src={greenPlus} alt="" onClick={this.addTask} /></td>
                                <td colSpan="3" className="typing"><input className="field" placeholder="Start typing here to create a task" value={this.state.myInput} onChange={this.bodyList} /><button type='submit' className="btnField">Add Task {this.state.items.length + 1}</button></td>
                            </tr>
                        </thead>
                        <ListBody items={this.state.items} />
                    </table>
                </div>    
            </form>
        </div>
        );
    }
}


export default TodoList;