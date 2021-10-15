import { getGifs } from "../../helpers/getGifs";

describe('Testing getGifs helper', () => {
    

    test('should get 10 element', async() => {
       const gifs = await getGifs('One Punch');
       expect(gifs.length).toBe(10);
    })

    test('should get 10 element without category', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
     })
    
})
