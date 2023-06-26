export default function ToDoReducer(todos, action) {
  switch (action.type) {
    case 'add':
      const { todoAdd } = action;
      if (todos) {
        const current = todos.push(todoAdd);
        localStorage.setItem('todos', JSON.stringify(current));
      } else localStorage.setItem('todos', JSON.stringify([todoAdd]));
      break;
    case 'delete':
      const { todoDelete } = action;
      const index = todos.findIndex(
        (value) =>
          value.name === todoDelete.name && value.time === todoDelete.time
      );
      const current = todos.splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(current));
      break;
    default:
      throw Error(`알 수 없는 action Type: ${action.type}`);
  }
}
