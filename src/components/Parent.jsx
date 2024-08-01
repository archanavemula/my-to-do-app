import React, {Component} from 'react';
import Child from './Child';

class Parent extends Component {

    render(){
        return (<div>I am Parent
        <Child></Child>
        </div>);
        }
    }

export default Parent;