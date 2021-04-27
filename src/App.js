import {useState, useEffect} from 'react'

import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

import { Heading } from '@chakra-ui/react'
import { VStack, HStack, IconButton, Spacer, useColorMode } from "@chakra-ui/react"
import { FaSun, FaMoon } from 'react-icons/fa'

function App() {

const [todos, setTodos] = useState(
  () => (JSON.parse(localStorage.getItem('todos')) || [])
)

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

const addTodo = todo => {
  setTodos([...todos, todo])
}

const deleteTodo = id => {
  const newTodos = todos.filter(todo => {
    return (
      todo.id !== id
    )
  })
  setTodos(newTodos)
}

const { colorMode, toggleColorMode} = useColorMode()

  return (
    <VStack p={4}>
      <HStack>
        <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, red.500, red.300, pink.500)' bgClip='text'>
          Todo Application
        </Heading>
        <Spacer />
        <IconButton icon={colorMode === 'light' ? <FaSun /> : <FaMoon />} isRound='true' size='lg' onClick={toggleColorMode} />
      </HStack>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
    </VStack>
  )
}

export default App;