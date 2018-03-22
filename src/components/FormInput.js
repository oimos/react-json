import React from 'react'

import classes from '../containers/Form.css'

const FormInput = (props) => {
    return (
        <div className={classes.InputCol}>
            <form>
                <div className={classes.InputRow}>
                <label className={classes.RadioBtn} onChange={props.onChangeRadio}><input type="radio" defaultChecked name="inputMode" value="str"/> is String?</label>
                <label className={classes.RadioBtn} onChange={props.onChangeRadio}><input type="radio" name="inputMode" value="obj"/> is Object?</label>
                <label className={classes.RadioBtn} onChange={props.onChangeRadio}><input type="radio" name="inputMode" value="arr"/> is Array?</label>
                <input type="text" name="key" onChange={props.onChangeKey} placeholder="key" className={classes.inputKey} value={props.PropKey}/>
                    {[...Array(props.PropNum)].map((el, i) => (
                        <div key={`inputItem_${i}`}>
                            {props.isObj ?
                                <div className={props.isStr ? classes.InputWrapperStr : classes.InputWrapper} key={i}>
                                    <div className={classes.ObjectWrapper}>
                                        <input type="text" name="key" onChange={props.onChangeKey} placeholder="key" className={classes.inputKey} value={props.PropKey}/>
                                        <div className={classes.InputWrapper} key={i}>
                                            <input type="text" name="key" placeholder="value"
                                            onChange={props.onChangeVal(i)}
                                            data-inputprop={`inputprop_${i}`}
                                            value={
                                                props.isStr ? props.PropVal :
                                                    props.PropVal.length > 0 ?
                                                        props.PropVal[i] ?
                                                            props.PropVal[i] : ''
                                                        : ''
                                            }/>
                                            <button onClick={props.onClickAddProp} className={classes.BtnAdd}>+</button>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className={props.isStr ? classes.InputWrapperStr : classes.InputWrapper} key={i}>
                                    {props.isArr ?
                                        [...Array(props.PropKey)].map((el, i) => (
                                            <input type="text" name="key" onChange={props.onChangeKey} placeholder="key" className={classes.inputKey} value={props.PropKey} key={`inputKey_${i}`}/>
                                            )
                                        )
                                        : null
                                    }
                                    <input type="text" name="value" placeholder="value"
                                    onChange={props.onChangeVal(i)}
                                    data-inputprop={`inputprop_${i}`}
                                    value={
                                        props.isStr ? props.PropVal :
                                            props.PropVal.length > 0 ?
                                                props.PropVal[i] ?
                                                    props.PropVal[i] : ''
                                                : ''
                                    }/>
                                    {props.isStr ? null :
                                        <div>
                                            <button onClick={props.onClickAddProp} className={classes.BtnAdd}>+</button>
                                            <button onClick={props.onClickAddKey} className={classes.BtnAddKey}>=</button>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    ))}
                </div>
                <button onClick={props.onClick}>Save</button>
                <button onClick={props.onClickBtn}>Generate JSON</button>
            </form>
        </div>
    )
}

export default FormInput