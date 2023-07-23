import React from "react";

const style = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },

    messageText :{
        color: "black",
        fontSize: 16,
    }
};

class Notification extends React.Component{
    constructor(props){
        super(props);

        this.state={};
    }

    componentDidMount(){
        console.log("componentwillDidMount() called");
    }

    componentDidUpdate(){
        console.log("componentwillDidUpdate() called");

    }

    componentDidUnmount(){
        console.log("componentWillUnMount() called");

    }
    render(){
        return (
            <div style={style.wrapper}>
                <span style={style.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification