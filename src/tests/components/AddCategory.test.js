import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from "../../components/AddCategory";

describe('Testing AddCategory component', () => {
    let wrapper;

    const setCategories = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })

    test('should create component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should change text', () => {
        const input = wrapper.find('input');
        const value = 'Hola Mundo';
        input.simulate('change',{target:{value}});
    })

    test('should submit form no  input value length < 2', () => {
        const input = wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).not.toHaveBeenCalled();
    })

    test('should submit form no  input value length < 2', () => {
        const value = 'Hola Mundo';
        const input= wrapper.find('input').simulate('change',{target:{value}});
        wrapper.find('form').simulate('submit',{preventDefault(){}});
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
        expect(input.prop('value')).toBe('');
    })


    
})
