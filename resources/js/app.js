require('./bootstrap')

import reactDom from 'react-dom'
import AddButton from './components/AddButton'

if(document.getElementById('add-item')) {
    reactDom.render(<AddButton />, document.getElementById('add-item'))
}
