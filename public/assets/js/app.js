let item = {
    createView : () => {
        let tableSelectForm = $('.select-creating-table .wrap')
        for(var key in table.list) {
            tableSelectForm.append(`<div class="creating-table" table-id="${key}"><img src="${table.list[key].image}"></div>`)
        }
        tableSelectForm.width(Object.keys(table.list).length * 85);
        tableSelectForm.find('.creating-table').click(table.select)
        MarcDialogs.open('item-create')
    },
    create : (form) => {
        MarcDialogs.close('item-create')
    }
}
let table = {
    list : (() => {
        $.ajax({
            url:'/api/tables',
            cache: true,
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

$(document).ready(function(){
    $('.add-item i').click(item.createView)
});