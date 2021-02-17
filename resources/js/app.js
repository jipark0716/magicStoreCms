require('./bootstrap')

import reactDom from 'react-dom'
import AddButton from './components/AddButton'
import ItemTable from './components/ItemTable'

if(document.getElementById('root')) {
    reactDom.render(<div style={{ height: '100%', width: '100%' }}>
        <AddButton/>
        <ItemTable />
    </div>, document.getElementById('root'))
}
