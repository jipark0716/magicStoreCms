import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField'

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
        params.row[params.field] = event.currentTarget.value
        let [a, accountId] = params.field.split('_')
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
    render() {
        return (
            <div style={{ height: '100%', width: '100%' }}>
                <DataGrid rows={this.state.rows} columns={this.state.columns} autoPageSize hideFooter />
            </div>
        )
    }
}

export default Table