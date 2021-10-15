import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Testing GifGrid component', () => {
    let wrapper;
    const category = 'One Punch';
   
    beforeEach(() => {
        useFetchGifs.mockReturnValue({data:[],loading:true});
        wrapper = shallow(<GifGrid category={category} />);
    })

    test('should create component', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show category', () => {
       const cat = wrapper.find('h3').text().trim();
       expect(cat).toBe(category);
    })

    test('should include className animate__fadeIn', () => {
        const cat = wrapper.find('h3');
        expect(cat.prop('className').includes('animate__fadeIn')).toBeTruthy();
    })

    test('should no items loading data', () => {
       expect(wrapper.find('p').exists()).toBe(true);
    })

    test('should no items loading data', () => {
        const gifs = [{
            id:'ABC',
            url:'https://images.jpg',
            title:'Title'
        }];
        useFetchGifs.mockReturnValue({data:gifs,loading:false});
        wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    })
})
