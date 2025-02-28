import { server } from '@/mocks/server';
import { rest } from 'msw';
import fetchTodos  from '../fetchTodo';

describe('fetchTodos lib function', () => {
    
    it('should return correct number of todo items', async () => {
        const todosArray = await fetchTodos();

        expect(todosArray?.length).toBe(4);

    })
})