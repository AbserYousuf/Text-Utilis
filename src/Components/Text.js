import React, { Component } from 'react';
import handlecontext from '../Context/context';

export default class Text extends Component {
    constructor(props) {
        super(props);
        this.textAreaRef = React.createRef();
    }
    static contextType = handlecontext;
    copytext = () => {


        console.log("clicked on CopyText")
        const textarea = this.textAreaRef.current;
        textarea.focus();
        textarea.select();
        navigator.clipboard.writeText(textarea.value);

    }

    render() {
        const { mode, text, handlechange, Uppercase, message, Lowercase, Addspace, Removespace, Removetext } = this.context;
        const textColorClass = mode === 'white' ? 'text-dark' : 'text-white';
        return (
            <div className="container my-4 my-md-5">

                <div className="mb-4 mb-md-5">
                    <h1 className={`fw-bold ${textColorClass}`}>
                        Enter the text to analyze
                    </h1>
                    {message && <div className="alert alert-info mt-3">{message}</div>}
                </div>


                <div className="mb-4">
                    <textarea
                        className="form-control"
                        placeholder="Enter your text here..."
                        rows={12}
                        value={text}
                        onChange={handlechange}
                        ref={this.textAreaRef}
                        style={{
                            minHeight: '280px',
                            resize: 'vertical',
                            fontSize: '1.05rem',
                        }}
                    />
                </div>


                <div className="d-flex flex-wrap gap-2 gap-md-3 justify-content-center justify-content-md-start mb-5">
                    <button
                        type="button"
                        className={`btn ${mode === 'white' ? 'btn-secondary' : 'btn-primary'} btn-sm btn-md`}
                        onClick={Uppercase}
                    >
                        UpperCase
                    </button>

                    <button
                        type="button"
                        className={`btn ${mode === 'white' ? 'btn-success' : 'btn-warning'} btn-sm btn-md`}
                        onClick={Lowercase}
                    >
                        LowerCase
                    </button>

                    <button
                        type="button"
                        className={`btn ${mode === 'white' ? 'btn-info' : 'btn-danger'} btn-sm btn-md`}
                        onClick={Addspace}
                    >
                        Add Space
                    </button>

                    <button
                        type="button"
                        className={`btn ${mode === 'white' ? 'btn-primary' : 'btn-secondary'} btn-sm btn-md`}
                        onClick={Removespace}
                    >
                        Remove space
                    </button>

                    <button
                        type="button"
                        className={`btn ${mode === 'white' ? 'btn-warning' : 'btn-success'} btn-sm btn-md`}
                        onClick={this.copytext}
                    >
                        Copy text
                    </button>

                    <button
                        type="button"
                        className={`btn ${mode === 'white' ? 'btn-danger' : 'btn-info'} btn-sm btn-md`}
                        onClick={Removetext}
                    >
                        Remove Text
                    </button>
                </div>


                <div className="card border-0 shadow-sm">
                    <div className="card-body">
                        <div className="d-flex flex-wrap justify-content-between align-items-center mb-3 gap-3">
                            <div>
                                <strong>Characters:</strong>{' '}
                                {text.trim().length}
                            </div>
                            <div>
                                <strong>Words:</strong>{' '}
                                {text.trim() ? text.trim().split(/\s+/).length : 0}
                            </div>
                            <div>
                                <strong>Lines:</strong>{' '}
                                {text.split('\n').length}
                            </div>
                        </div>

                        <h6 className="mb-2">Preview:</h6>
                        <div
                            className="p-3 bg-light rounded border"
                            style={{
                                minHeight: '100px',
                                maxHeight: '220px',
                                overflowY: 'auto',
                                whiteSpace: 'pre-wrap',
                                wordBreak: 'break-word',
                                backgroundColor: mode === 'white' ? '#f8f9fa' : '#2d3748',
                                color: mode === 'white' ? '#212529' : 'black',
                            }}
                        >
                            {text || 'Nothing to preview...'}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}