import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState('Enter Your Text Here.........')

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleUpperCaseClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Hey, Your text just changed to UPPERCASE', 'success')

        
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Hey, Your text just changed to lowercase', 'success')
    }

    const handleClearClick = () => {
        setText('')
        props.showAlert('Hey, Text was cleared', 'danger')

    }

    const handleCopyClick = () => {
        let myBox = document.getElementById('myBox')
        myBox.select()
        navigator.clipboard.writeText(myBox.value)
        props.showAlert('Hey, Your text was just copied to clipboard', 'info')

    }

    const handleExtraSpacesClick = () =>{
        let newText = text.split(/\s+/)
        setText(newText.join(" "))
        props.showAlert('Hey, Extra spaces were just removed from your text', 'success')

    }

    let words = text.trim().split(/\s+/).filter(word => word !== '').length
    return (
        <>
            <div className="container" id='form-container'>
                <h1 className='my-3'>{props.title}</h1>
                <form action="/post-content">
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                </form>
                <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mr-2 my-1 btn-sm`} onClick={handleUpperCaseClick}>Upper Case</button>
                <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2 my-1 btn-sm`} onClick={handleLowerCaseClick}>Lower Case</button>
                <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2 my-1 btn-sm`} onClick={handleCopyClick}>Copy Text</button>
                <button className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-2 my-1 btn-sm`} onClick={handleExtraSpacesClick}>Remove Extra Spaces</button>
                <button className={`btn btn-danger btn-sm`} onClick={handleClearClick}>Clear</button>
            </div >
            <div className="container my-4">
                <h2>Your Text Summary</h2>
                <p>{words} words and {text.length} characters</p>
                <p>Average read time - {(words * 0.007).toFixed(2)}. minutes</p>
                <h4>Preview</h4>
                <p>{text===''?"Type something to see the preview":text}</p>
            </div>
        </>
    )
}
