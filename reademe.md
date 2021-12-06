install mongoose
packege.json -> mongose -> mongoose
path -> routers -> controllers ("./../../db/models/todo")
path -> routers -> ("./../controllers/todos")

controllers -> module.exports
models / todo -> mongoose.module => mongoose.model
updateTodo in route -> not exports in controller

morgan not define -> const morgan = require("morgan")
PORT=4000; -> delete ;


require("../db"); -> path require("./db");
 db.index.js -> require("dotenv").config();
app.use(cors); -> cors()

sheama todo -> task string
todo not define -> task
delete in schema -> todoModel
DB_URI change name in .env
const todoRouter = express.Router(); -> whrite before second line
controllers -> getTodoById -> use params
-> const { task }  = req.body; task reblace todo
-> route -> todosCompleted reblace ->  todos/completed
            -> 
