import React, { Component } from 'react'

export default class Error extends Component {
    render() {
        return (
            <div style={{
                position: "fixed",
                left: "0",
                bottom: "0",
                width: "100%",
                backgroundColor: "#333",
                color: "white",
                textAlign: "center",
                padding: "10px",
            }}>
                Author: Giorgi Abuladze
            </div >
        )
    }
}