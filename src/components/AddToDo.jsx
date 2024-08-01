import React, {Component} from 'react';

class AddToDo extends Component {

state = {
    id:'',
    title:'',
    status : 'Pending',
    };

handleIdChange = (event) => {
   this.setState({id: event.target.value});
       };

handleTitleChange = (event) => {
  this.setState({title: event.target.value});
      };

  handleStatusChange = (event) => {
    this.setState({status: event.target.value});
        };

handleToDoSubmit=(event)=>{
    event.preventDefault();
    console.log(this.state.title);
    this.props.onAdd({
        id:this.state.id,
         title:this.state.title,
          status:this.state.status,
        });
    this.setState({id: '',title:'',status:'Pending'});
    };
    render(){
        return (
        <div>
            <form onSubmit={this.handleToDoSubmit}>
                <div className="form-group">
                     <input value={this.state.id} onChange={this.handleIdChange} className="form-control" placeholder="Enter Id"/>
                </div>
                <div className="form-group">
                     <input value={this.state.title} onChange={this.handleTitleChange} className="form-control" placeholder="Enter Title"/>
                </div>
                <div className="form-group">
                    <select value={this.state.status} onChange={this.handleStatusChange} className="form-control">
                         <option value="Done">Done</option>
                         <option value="Pending">Pending</option>
                    </select>
                </div>
                <div><button type='submit'>submit</button></div>
            </form>
        </div>);
        }
    }

export default AddToDo;