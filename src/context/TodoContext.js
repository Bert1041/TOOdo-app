import createDataContext from './createDataContext';

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'deleteTodo':
      return state.filter((todos) => todos.id !== action.payload);
    case 'addTodo':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          description: action.payload.description,
          createdOn: action.payload.createdOn,
          completedDate: action.payload.completedDate,
        },
      ];
    default:
      return state;
  }
};

const addTodo = (dispatch) => {
  return (title, description, createdOn, completedDate, callback) => {
    dispatch({
      type: 'addTodo',
      payload: {
        title: title,
        description: description,
        createdOn: createdOn,
        completedDate: completedDate,
      },
    });
    callback();
  };
};

const deleteTodo = (dispatch) => {
  return (id) => {
    dispatch({type: 'deleteTodo', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  todoReducer,
  {addTodo, deleteTodo},
  [
    {
      id: 1,
      title: 'Test todo1',
      description: 'This is the 1st description',
      createdOn: '2000 - 27 - 02',
      completedDate: '2000 - 27 - 02',
      completed: false,
    },
  ],
);
