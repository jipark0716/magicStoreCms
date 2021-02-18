import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField'
import AddButton from './AddButton'

class Table extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            columns : [],
            rows : []
        }
        this.renderItem()
        this.renderColumn()
    }
    renderTextField(filedName) {
        return (params) => {
            return <TextField type={'number'} defaultValue={params.getValue(filedName)} onBlur={(event) => {this.save(event, params)}} />
        }
    }
    save(event, params) {
        if(params.value == event.currentTarget.value) return
        let [a, accountId] = params.field.split('_')
        params.row.inventory[accountId] = event.currentTarget.value
        axios.post(`/api/inventory/${accountId}`, {
            item_id : params.getValue('id'),
                amount : event.currentTarget.value
            })
            .then(response => {
                console.log(response)
            })
            .catch(response => {
                console.log(response)
            })
    }
    renderItem() {
        axios.get('/api/inventorys')
            .then(response => {
                this.setState({rows:response.data})
            })
            .catch(response => {
                console.log(response)
            })
    }
    renderColumn() {
        axios.get('/api/accounts')
            .then(response => {
                let columns = [
                    {field: 'player_level', headerName: 'Level', width:100},
                    {field: 'name', headerName: 'Name', width:200}
                ];
                response.data.forEach(element => {
                    columns.push({
                        field: `account_${element.id}`,
                        headerName: element.name,
                        width:150,
                        valueGetter: (params) => {
                            if(!('inventory' in params.row)) return 0
                            return params.row.inventory[element.id] || 0
                        },
                        renderCell: this.renderTextField(`account_${element.id}`)
                    })
                });
                this.setState({columns:columns})
            })
            .catch(response => {
                console.log(response)
            })
    }
    addItem(self, item) {
        let rows = [...this.state.rows]
        rows.push(item)
        this.setState({rows : rows})
        console.log(this.state)
    }
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <AddButton onCreate={(item) => {this.addItem(this, item)}}/>
                <DataGrid rows={this.state.rows} columns={this.state.columns} autoPageSize />
            </div>
        )
    }
}

export default Table