import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import TextField from '@material-ui/core/TextField'

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Full name',
        width: 160,
        renderCell: (params) => {
            return <TextField defaultValue={params.getValue('age')} onBlur={(event) => {save(event, params)}} />
        },
    },
];

function save(event, params) {
    if(params.value == event.currentTarget.value) return
    params.row[params.field] = event.currentTarget.value
    axios.put('/api/inventory', {
        account : params.getValue('id'),
        item : params.getValue('id'),
        amount : event.currentTarget.value
    }).then(response => {
        console.log(response)
    }).catch(response => {
        console.log(response)
    })
}

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} autoPageSize hideFooter />
        </div>
    );
}
