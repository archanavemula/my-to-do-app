import React, {Component} from 'react';
import AddToDo from './AddToDo';

class ToDo extends Component {

    state = {
        todo : [
            {id:1,title: 'Submit code to github',status: 'Done'},
            {id:2,title: 'Submit code to manager',status: 'Pending'}
            ]
        };


addToDo=(aTodo)=>{
    let current = this.state.todo;
    this.setState({
        todo:[...current,aTodo]});
    };
    render(){
        return (
            <div>
                <AddToDo onAdd={this.addToDo}></AddToDo>
        <table>
             <thead>
                 <th>Id</th>
                 <th>Title</th>
                 <th>Status</th>
                 <th>Delete/Edit</th>
            </thead>

            <tbody>
                {this.state.todo.map(item=>
                    {return(<tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.status}</td>
                            <td>
                                <button type='button'>Delete</button>
                                <button type='button'>Edit</button>
                            </td>
                        </tr> )})}
                </tbody>




         </table>
        </div>);
        }
    }

export default ToDo;