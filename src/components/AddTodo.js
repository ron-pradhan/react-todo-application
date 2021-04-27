import React, {useState} from 'react'

import { HStack, Spacer, Button, Input, useToast} from "@chakra-ui/react";
import {nanoid} from 'nanoid'

function AddTodo({addTodo}) {
    const toast = useToast()
    const [content, setContent] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(!content){
            toast({
                title: 'No Content',
                status: 'error',
                duration: 3000,
                isClosable: true
            })
        }
        const todo = {
            id: nanoid(),
            body: content
        }

        addTodo(todo)
    }
    return (
        <form onSubmit={handleSubmit}> 
            <HStack mt='4'>
                <Input variant='filled' type='text' placeholder='Add Task' 
                value={content} 
                onChange={(e) => setContent(e.target.value)}/>
                <Spacer />
                <Button type='submit' colorScheme='pink' px='8'>Add Todo</Button>
            </HStack>
        </form>
    )
}

export default AddTodo
