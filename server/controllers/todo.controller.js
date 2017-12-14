import Todo from '../models/todo';
import cuid from 'cuid';
import sanitizeHtml from 'sanitize-html';

/**
 * Get all Todos
 * @param req
 * @param res
 * @returns void
 */
export function getTodos(req, res) {
  Todo.find().sort('-dateAdded').exec((err, todos) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todos });
  });
}

/**
 * Save a todo
 * @param req
 * @param res
 * @returns void
 */
export function addTodo(req, res) {
  if (!req.body.todo.title) {
    res.status(403).end();
  }

  const newTodo = new Todo(req.body.todo);

  // Let's sanitize inputs
  newTodo.title = sanitizeHtml(newTodo.title);

  newTodo.cuid = cuid();
  newTodo.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todo: saved });
  });
}

/**
 * Get a single todo
 * @param req
 * @param res
 * @returns void
 */
export function getTodo(req, res) {
  Todo.findOne({ cuid: req.params.cuid }).exec((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ todo });
  });
}

/**
 * Delete a todo
 * @param req
 * @param res
 * @returns void
 */
export function deleteTodo(req, res) {
  Todo.findOne({ cuid: req.params.cuid }).exec((err, todo) => {
    if (err) {
      res.status(500).send(err);
    }

    todo.remove(() => {
      res.status(200).end();
    });
  });
}
