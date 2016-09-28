
const Reducer = (state =  {
	nextId: 2,
	todoItems: [
	    {id: 0, text: "This is an item", done: false},
	    {id: 1, text: "Another item", done: false}
	]
}, action) => {
	switch(action.type) {
		case 'ADD_TODO':
			// IMPLEMENT ME
			return{
				nextId: state.nextId + 1,
                todoItems: [
                    ...state.todoItems, 
                    {id: state.nextId, text: action.text, done: false}
                ]
			};
		case 'REMOVE_TODO':
			// IMPLEMENT ME
			return{
                nextId: state.nextId - 1,
                todoItems: [
                	...state.todoItems.slice(0, action.id),
                	...state.todoItems.slice(action.id+1)
                ]
			};
		case 'TOGGLE_TODO':
			// IMPLEMENT ME
			return{
				nextId: state.nextId,
                todoItems: state.todoItems.map(todoItems =>{
                	if(todoItems.id !== action.id) {
                		return todoItems;
                	}

                	return {
                		...todoItems,
                		done: !todoItems.done
                	}
                })
			};
		default: 
			return state
	}
}

export default Reducer