let item = {
    createView : () => {
        let tableSelectForm = $('.select-creating-table .wrap')
        for(var key in table.list) {
            tableSelectForm.append(`<div class="creating-table" table-id="${key}"><img src="${table.list[key].image}"></div>`)
        }
        tableSelectForm.width(Object.keys(table.list).length * 85)
        tableSelectForm.find('.creating-table').click(table.select)
        MarcDialogs.open('item-create')
    },
    create : (event) => {
        $.ajax({
            url: '/api/item',
            method: 'put',
            data: util.formToJson(event.currentTarget),
            success:(response) => {
                item.clear()
                item.append(response);
                MarcDialogs.close('item-create')
            },
            error:(response) => {
                console.log(response)
            }
        })
    },
    clear : () => {
        $('#dialog-item-create form input').val('')
    },
    append : (item) => {
        item.list[item.id] = item;
    },
    list :(() => {
        $.ajax({
            url:'/api/items',
            success: (response) => {
                item.list = {}
                for(var key in response) {
                    item.list[response[key].id] = response[key]
                }
            }
        })
    })()
}
let table = {
    list : (() => {
        $.ajax({
            url:'/api/tables',
            success: (response) => {
                table.list = {}
                for(var key in response) {
                    table.list[response[key].id] = response[key]
                }
            }
        })
    })(),
    select : (event) => {
        let old = $('[name=table_id]').val()
        if(old) {
            $(event.currentTarget).parent().find(`[table-id=${old}] img`).attr('src', table.list[old].image)
        }
        $(event.currentTarget).find('img').attr('src', table.list[$(event.currentTarget).attr('table-id')].image_open)
        $('[name=table_id]').val($(event.currentTarget).attr('table-id'))
    }
}

let util = {
    base64 : (obj) => {
        return (event) => {
            let reader = new FileReader()
            reader.onload = () => {
                console.log($(obj));
                $(obj).val(reader.result.replace('data:image/png;base64,', ''))
            }
            reader.readAsDataURL(event.target.files[0])
        }
    },
    formToJson : (form) => {
        let result = {}
        new FormData(form).forEach((val, key) => {
            if(!(val instanceof File))
                result[key] = val
        })
        return result
    }
}

$.ajaxSetup({headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}});
$(document).ready(function(){
    $('.add-item i').click(item.createView)
    $('#dialog-item-create form').submit(item.create)
    $('#dialog-item-create form [name=image-blob]').change(util.base64('#dialog-item-create form #image'))
})