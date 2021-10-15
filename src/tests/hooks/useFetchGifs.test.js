import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Testing useFetchGifs hook', () => {
    
    
    test('should return current state', async () => {
        const {result,waitForNextUpdate} = renderHook(()=>useFetchGifs('One Punch'));
        const {data,loading} = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    })

    test('should return array imgs', async() => {
        const {result, waitForNextUpdate} = renderHook(()=>useFetchGifs('One Punch'));
        
        await waitForNextUpdate();
        
        const {data,loading} = result.current;
        expect(data.length).toBe(10);
        expect(loading).toBe(false);
    })
    
})
