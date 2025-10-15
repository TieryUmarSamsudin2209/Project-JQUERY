let data = []
let myTodo = $("#myTodo")
let validasiInput = $("#validasi_input")
let checkbox = $("#checkDefault")
let todo = $("#to_do")
let done = $("#done")

$("#submit").on("click", function () {
    
    if (myTodo.val() === "") {
        validasiInput.html("field tidak boleh kosong")
        return
    }

    data.push({
        task_list: myTodo.val(),
        status: checkbox.is(":checked")
    })

    let dataTodo = data.filter(d => d?.status === false) ?? []
    let dataDone = data.filter(d => d.status === true) ?? []

    data?.length > 0 && todo.html(`${$.map(dataTodo, (d, i) => `<li> ${d?.task_list} <a class="text-danger" href="#" onclick="deleteList(${i})">HAPUS</a> </li>`)}`)
    data?.length > 0 && done.html(`${$.map(dataDone, (d, i) => `<li> ${d?.task_list} <a class="text-danger" href="#" onclick="deleteList(${i})">HAPUS</a> </li>`)}`)
})

function deleteList(i) {
    data.splice(i, 1)
    
    let dataTodo = data.filter(d => d?.status === false) ?? []
    let dataDone = data.filter(d => d?.status === true) ?? []

    data?.length > 0 && todo.html(`${$.map(dataTodo, (d, i) => `<li> ${d?.task_list} <a class="text-danger" href="#" onclick="deleteList(${data.indexOf(d)})">HAPUS</a> </li>`)}`)
    data?.length > 0 && done.html(`${$.map(dataDone, (d, i) => `<li> ${d?.task_list} <a class="text-danger" href="#" onclick="deleteList(${data.indexOf(d)})">HAPUS</a> </li>`)}`)
    
    if (data.length === 0) {
        todo.html("")
        done.html("")
    }
}