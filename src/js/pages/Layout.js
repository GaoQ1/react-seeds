import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
    navigate(){
        this.props.history.pushState(null,'/');
    }
    render(){
        const {history} = this.props;
        console.log(history.isActive("archives"));
        return (
            <div>
                <h1>killerNews.net</h1>
                {this.props.children}
                <Link to="archives" activeClassName="test">archives</Link>
                <Link to="settings" class="btn btn-default">settings</Link>
                <button class="btn btn-success" onClick={this.navigate.bind(this)}>featured</button>
            </div>
        );
    }
}