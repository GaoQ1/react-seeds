import React from "react";

export default class extends React.Component {
    render(){
        const {title} = this.props;

        return(
            <div class="col-md-4">
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci, aliquid, debitis doloribus ea eos esse facere fugiat ipsam labore laudantium neque nostrum porro possimus rem rerum sunt temporibus! Ut?</p>
                <a href="#" class="btn btn-default">More Info</a>
            </div>
        )
    }
}