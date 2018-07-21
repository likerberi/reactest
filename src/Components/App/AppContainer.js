import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Components {
    
    constructor(props){
        super(props);
        this._changeMessage = () => {
            if(this.state.message === "Hello") {
                this.setState({
                    message: "Bye!"
                })
            } else {
                this.setState({
                    message: "Hello"
                })
            }
        }

        this.state = {
            message: "hello"
            changeMessage: this._changeMessage
        }
    }

    render() {
        return (
            <Store.Provider value={this.state}>
                <AppPresenter/>
            </Store.Provider>
        )
    }
}

export default AppContainer;