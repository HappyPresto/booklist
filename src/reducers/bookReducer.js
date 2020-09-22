export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            let id = 0;
            id = state.map(book => {
                return Math.max(book.id) + 1;
            })
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: id
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id);
        default:
            return state
    }
}