import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false // welc Guest - change to true = welc Ema
        }
    }
    
    render() {

        return(
            this.state.isLoggedIn ? // ternary operator
            (<div>Welc Ema</div>) :
            (<div>Welc Guest</div>)
        )

        

        let message //the element variable approach 

        if (this.state.isLoggedIn) {
            message = <div>Welc Ema</div>
        } else {
            message = <div>Welc Guest</div>
        }
        return <div>{message}</div>




        if(this.state.isLoggedIn) { //if else 
            return (
                <div>Welcome Ema</div>
            )
        } else {
            return (
                <div>Welcome Guest</div>
            )
        }
        return (
            <div>
                <div>Hello Ema</div> 
                <div>Hello Guest</div>
            </div>
        )
    }
}

export default UserGreeting

