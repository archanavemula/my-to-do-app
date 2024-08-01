import react, {Component} from 'react';

class Child extends Component {

 state ={
     a : 'Hello!',
     };


handleClick = () => {
    console.log('Inside HandleClick event');
    this.setState({
        a : 'You clicked the button'
        });
    }


    render(){
        return (
            <div>
                <div>I am Child</div>
                <div>{this.state.a}</div>
                <div>
                <button type='button' onClick={this.handleClick} >Click Me</button>
                </div>
            </div>);
        }
    }

export default Child;