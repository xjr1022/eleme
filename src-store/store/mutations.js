export default {
    addItem(state,item) {
        state.todos.push(item)
    },
    deleteItem(state,index){
        state.todos.splice(index, 1)
    },
    selectAll(state,isCheck){
        state.todos.forEach(todo=>{
            todo.complete = isCheck
        })
    }
}
