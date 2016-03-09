import React from "react";

export default class Archives extends React.Component {
    render(){
        const {query} = this.props.location;
        const {article} = this.props.params;
        const {date,filter} = query;
        return (
            <div>
                <h1>Archives ({article})</h1>
                <h4>data:{date},filter:{filter}</h4>
            </div>
        );
    }
}