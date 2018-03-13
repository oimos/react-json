import React from 'react'

const FormInput = (props) => {
    return (
        <form>
            <input type="text" name="input1" onChange={props.onChange} placeholder="sample text1"/>
            <button onClick={props.onClick}>Save</button>
            <button onClick={props.onClickBtn}>Generate JSON</button>
        </form>
    )
}

export default FormInput