import React from 'react'

import FormInput from '../components/FormInput'
import classes from './Form.css'

class Form extends React.Component{
    state = {
        tmpKey: '',
        tmpVal: [],
        savedValue: [],
        inputConfig: {
            inputPropNum: 1,
            str: true,
            obj: false,
            arr: false
        }
    }

    componentWillMount(){
        if(this.state.inputConfig.str){

        }
    }

    handleChangeKey(e){
        this.setState({
            tmpKey: e.target.value
        })
    }

    handleChangeVal(i, e){
        if(this.state.inputConfig.str){
            let _inputVal = e.target.value
            this.setState({
                tmpVal: _inputVal
            })
            
        }else if(this.state.inputConfig.obj){

        }else if(this.state.inputConfig.arr){
            let targetInputNum = parseInt(e.target.dataset.inputprop.replace(/inputprop_/g, ''))
            let _inputVal = this.state.tmpVal.slice()
                _inputVal[targetInputNum] = e.target.value
            this.setState({
                tmpVal: _inputVal
            })
        }
    }

    handleClick(e){
        e.preventDefault()
        const inputConfig = {...this.state.inputConfig, inputPropNum:1}
        const current = {
            [this.state.tmpKey]: this.state.tmpVal
        }
        const _tmpVal = this.state.tmpVal.slice()
        if( !this.state.tmpKey || !this.state.tmpVal ) return

        if(this.state.inputConfig.str){
            const val = this.state.tmpVal
            this.setState({
                savedValue: [...this.state.savedValue, current],
                inputConfig: inputConfig,
                tmpKey: '',
                tmpVal: ''
            })
        }else if(this.state.inputConfig.obj){
            
        }else if(this.state.inputConfig.arr){
            const val = [...this.state.tmpVal]
            this.setState({
                savedValue: [...this.state.savedValue, current],
                inputConfig: inputConfig,
                tmpKey: '',
                tmpVal: []
            })
        }

    }

    handleChangeRadio(e){
        let inputValue
        let selectedVal = e.target.value
        let inputConfig = {...this.state.inputConfig}
        switch(selectedVal){
            case 'str':
                inputConfig.str = true
                inputConfig.obj = false
                inputConfig.arr = false
                inputConfig.inputPropNum = 1
                inputValue = [...this.state.tmpVal]

                this.setState({
                    inputConfig: inputConfig,
                    tmpVal: inputValue
                })
                break;
            case 'obj':
                inputConfig.str = false
                inputConfig.obj = true
                inputConfig.arr = false
                this.setState({
                    inputConfig: inputConfig
                })
                break;
            case 'arr':
                inputConfig.str = false
                inputConfig.obj = false
                inputConfig.arr = true
                inputValue = [...this.state.tmpVal]

                    console.log(inputValue)

                this.setState({
                    inputConfig: inputConfig,
                    tmpVal: inputValue
                })
console.log(this.state)
                break;
        }
    }

    handleClickAddProp(e){
        e.preventDefault()
        if(this.state.inputConfig.str) return
        const inputConfig = {...this.state.inputConfig}
        inputConfig.inputPropNum++
        this.setState({
            inputConfig: inputConfig
        })
    }

    render(){
        return(
            <div className={classes.Container}>
                <FormInput
                    onChangeKey={this.handleChangeKey.bind(this)} 
                    onChangeVal={(i) => this.handleChangeVal.bind(this,i)} 
                    onClick={this.handleClick.bind(this)}
                    onChangeRadio={this.handleChangeRadio.bind(this)}
                    onClickAddProp={this.handleClickAddProp.bind(this)}
                    PropNum={this.state.inputConfig.inputPropNum}
                    PropKey={this.state.tmpKey}
                    PropVal={this.state.tmpVal}
                    isStr={this.state.inputConfig.str}
                    isObj={this.state.inputConfig.obj}
                    isArr={this.state.inputConfig.arr}
                    />
                <div className={classes.OutputCol}>
                    <div className={classes.OutputWrapper}>
                        <pre>
                            {JSON.stringify(this.state.savedValue, null, 2)}
                        </pre>
                    </div>
                    <ul>
                        {/* {console.log(this.state.savedValue)} */}
                        {/* {this.state.savedValue.map((val, i) => {
                            return(
                                <li 
                                    className={classes.Field} key={i}>
                                    {Object.keys(val)}: <span className="val">{val[Object.keys(val)]}</span> */}
                                    {/* onClick={this.edit.bind(this,i)} onKeyDown={this.editArray.bind(this, i)} */}
                                    {/* <span className={classes.Edit}>+</span>
                                    <span onClick={this.removeArray.bind(this, i)} className={classes.Remove}>-</span>
                                </li>
                            )
                        })} */}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Form