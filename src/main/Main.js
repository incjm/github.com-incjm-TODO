import React from 'react';
import './Main.css';
import TodoList from '../todo/TodoList';
import AddedList from '../AddedList/AddedList'

class Main extends React.Component {
        render() {
            return (
                <div className="container">
                    <main>
                        <header>
                            <TodoList />
                            
                            <AddedList />
                        </header>
                    </main>
                </div>
            );
        }
    }    

export default Main;