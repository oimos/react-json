import React from 'react'

import FormInput from '../components/FormInput'
import styles from './Form.css'

class Form extends React.Component{
    state = {
        tmpValue: '',
        savedValue: [],
        jsonValue: null
    }

    handleChange(e){
        this.setState({
            tmpValue: e.target.value
        })
    }

    handleClick(e){
        e.preventDefault()
        const savedValue = this.state.savedValue.slice()
        const current = this.state.tmpValue
        this.setState({
            savedValue: savedValue.concat(current)
        })
    }



    render(){
        return(
            <div>
                <FormInput
                    onClick={this.handleClick.bind(this)}
                    onChange={this.handleChange.bind(this)}
                    />
                <ul>
                {this.state.savedValue.map((val, i) => {
                    return(
                        <li className={styles.Field} key={i}>{val}</li>
                    )
                })}
                </ul>
            </div>
        )
    }
}

export default Form