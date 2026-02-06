import { Component } from 'react'
import handlecontext from './context'
export default class textcontext extends Component {
    state = {
        mode: "white",
        text: "",
        message: "Enter the text first"
    }
    handlechange = (event) => {
        this.setState({
            text: event.target.value
        })
    }
    lowercase = () => {
        console.log("clicked on LowerCase")
        if (this.state.text !== "") {
            this.setState({
                message: null
            })
            const newtext = this.state.text.toLowerCase()
            this.setState({
                text: newtext,

            })
            return
        }
        else {
            console.log(this.state.message)
        }
    }
    Uppercase = () => {
        console.log("clicked on UpperCase")
        if (this.state.text !== "") {
            this.setState({
                message: null
            })
            const newtext = this.state.text.toUpperCase()
            this.setState({
                text: newtext,

            })
            return
        }
        else {
            console.log(this.state.message)
        }
    }
    removespace = () => {
        console.log("clicked on Removespace")
        if (this.state.text !== "") {
            this.setState({
                message: null
            })
            const newtext = this.state.text.split(" ").join("")
            this.setState({
                text: newtext,

            })
            return
        }
        else {
            console.log(this.state.message)
        }
    }
    addspace = () => {
        console.log("clicked on addspace")
        if (this.state.text !== "") {
            this.setState({
                message: null
            })
            const newtext = this.state.text.split("").join(" ")
            this.setState({
                text: newtext,

            })
            return
        }
        else {
            console.log(this.state.message)
        }

    }
    textremove = () => {
        console.log("clicked on RemoveText")
        if (this.state.text !== "") {
            this.setState({
                message: null
            })
            const newtext = ""

            this.setState({
                text: newtext,

            })
            return
        }
        else {
            console.log(this.state.message)
        }
    }

    modehandle = () => {
        console.log("clicked")
        const { mode } = this.state
        if (mode === "white") {
            this.setState({
                mode: "dark"
            })
            document.body.style.backgroundColor = "black"
        }
        else {
            this.setState({
                mode: "white"
            })
            document.body.style.backgroundColor = "white"
        }
    }
    render() {
        const { mode, text } = this.state
        return (
            <handlecontext.Provider value={{ Removetext: this.textremove, Removespace: this.removespace, Addspace: this.addspace, Lowercase: this.lowercase, Uppercase: this.Uppercase, text, mode, modehandle: this.modehandle, handlechange: this.handlechange }}>{this.props.children}</handlecontext.Provider>
        )
    }
}
