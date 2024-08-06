import { VStack, StackDivider, HStack } from "@chakra-ui/react";
import { VscCheck } from 'react-icons';

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
            divider={<StackDivider borderColor='gray.200'></StackDivider>}
            borderColor="black.100"
            borderWidth="1px"
            borderRadius="3px"
            p={5}
            alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id}>
                        <button onClick={() => complete(todo.id)}>完了</button>
                        <span>{todo.content}</span>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;