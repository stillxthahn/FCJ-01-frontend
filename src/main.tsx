import { createRoot } from 'react-dom/client'
import Header from './components/Header.tsx'
import TableTodo from './components/TableTodo.tsx'
import "./main.css"

createRoot(document.getElementById('root')!).render(
  <div>
    <Header />
    <TableTodo />
  </div>
)
