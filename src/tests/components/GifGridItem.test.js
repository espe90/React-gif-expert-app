import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifGridItem } from "../../components/GifGridItem";

describe('Testing GifGridItem Component', () => {
    let wrapper;

    const title = 'Title';
    const url = 'https://url.jpg';

    beforeEach(() => {
        wrapper = shallow(<GifGridItem title={title} url={url}/>);
    })
    
    test('should create component', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should send proptypes title', () => {
        const text = wrapper.find('p').text().trim();
        expect(text).toBe(title);
    })

    test('should send proptypes url', () => {
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    })

    test('should had classname animate__fadeIn', () => {
        const div = wrapper.find('div');
        const className = div.prop('className');
        expect(className.includes('animate__fadeIn')).toBeTruthy();
    })
})
