export default function ToDoReducer(todos, action) {
  switch (action.type) {
    case 'add':
      const { todoAdd } = action;
      if (todos && todos[todoAdd.time]) {
        todos[todoAdd.time].push(todoAdd.name);
        localStorage.setItem('todos', JSON.stringify(todos));
      } else {
        localStorage.setItem(
          'todos',
          JSON.stringify({
            ...todos,
            [todoAdd.time]: [{ title: todoAdd.name, done: 'N' }],
          })
        );
      }
      break;
    case 'edit':
      break;
    case 'delete':
      const { todoDelete } = action;
      const index = todos[todoDelete.time].findIndex(
        (value) => value === todoDelete.name
      );
      todos[todoDelete.time].splice(index, 1);
      localStorage.setItem('todos', JSON.stringify(todos));
      break;
    default:
      throw Error(`알 수 없는 action Type: ${action.type}`);
  }
}
const 오전 = { title: '브루밥주기', done: 'Y' };
