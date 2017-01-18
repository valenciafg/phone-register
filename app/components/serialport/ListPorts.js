import React from 'react';
import portList from './list2';


export default class ListPorts extends React.Component {
    constructor(props) {
        super(props);
        this.portList = portList;
    }
    componentdidMount(){
        console.log(this.portList);
    }
    render(){
        // console.log(this.portList[0]);
        return (
                <div>
                    <h1>AAAAAAAAAAAAAAAAAAAAAAA</h1>
                </div>
        );
    }
}
