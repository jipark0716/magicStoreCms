import React from 'react'
import TextField from '@material-ui/core/TextField'
import {Button} from '@material-ui/core'
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.onSubmit = props.onSubmit

        this.state = {
            name : '',
            table_id : '',
            player_level : '',
        }
    }
    _handleChange(col, e) {
        let obj = {}
        obj[col] = e.target.value
        this.setState(obj)
    }
    _handleSubmit(event) {
        axios.put('/api/item', this.state)
            .then(response => {
                console.log(response)
                this.onSubmit()
            })
            .catch(response => {
                console.log(response)
            })
        event.preventDefault()
    }
    render () {
        return (
            <form onSubmit={this._handleSubmit.bind(this)}>
                <div><TextField label="이름" defaultValue={this.state.name} onChange={this._handleChange.bind(this, 'name')} autoFocus /></div>
                <div><TextField label="table_id" defaultValue={this.state.table_id} onChange={this._handleChange.bind(this, 'table_id')} /></div>
                <div><TextField label="player_level" defaultValue={this.state.level} onChange={this._handleChange.bind(this, 'player_level')} /></div>
                <Button type="submit">추가</Button>
            </form>
        )
    }
}

export default Form
