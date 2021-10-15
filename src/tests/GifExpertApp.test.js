import { shallow } from 'enzyme';
import { GifExpertApp } from "../GifExpertApp";

describe('Testing GifExpertApp Component', () => {
    let wrapper; 
    
    beforeEach(() => {
        wrapper = shallow(<GifExpertApp />);
    })

    test('should create component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should show AddCategory component', () => {
        expect(wrapper.find('AddCategory').exists()).toBe(true);
    })

    test('should show GifGrid component', () => {
        expect(wrapper.find('GifGrid').exists()).toBe(true);
    })
    
})
