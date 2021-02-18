import React from 'react'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import ItemForm from './ItemForm'
import {Dialog, DialogActions, DialogContent, DialogTitle, IconButton} from '@material-ui/core'

export default function Button(props) {
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
        setOpen(true);
    }
  
    const handleClose = () => {
        setOpen(false);
    }
  
    const onSubmit = (item) => {
        props.onCreate(item)
        handleClose()
    }

    return (
        <div>
            <IconButton onClick={handleOpen} size="medium" id="add-item-button">
                <AddCircleIcon/>
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">아이템 추가</DialogTitle>
                <DialogContent>
                    <ItemForm onSubmit={onSubmit}/>
                </DialogContent>
            </Dialog>
        </div>
    )
}