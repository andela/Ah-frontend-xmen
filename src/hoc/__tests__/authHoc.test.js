import { shallow } from 'enzyme';
import React from 'react';
import authHoc from '../authHoc';
import CreateArticleView from '../../views/articleEditorView/CreateArticleView';


const push = jest.fn();
const props = {
  history: { push },

};
describe('<AuthHoc', () => {
  it('should return open login modal if there is no token', () => {
    const wrapper = authHoc(shallow(<CreateArticleView />));
    const innerComponent = shallow(<wrapper.WrappedComponent />);
    expect(innerComponent.instance().state.open).toEqual(true);
  });
  it('should redirect on modal Close if no token', () => {
    const wrapper = authHoc(shallow(<CreateArticleView />));
    const innerComponent = shallow(<wrapper.WrappedComponent {...props} />);
    innerComponent.instance().onClose();
    expect(props.history.push).toBeCalled();
  });

  it('should close modal if  token is valid and present', () => {
    localStorage.setItem('token', 'tokend');
    const wrapper = authHoc(shallow(<CreateArticleView />));
    const innerComponent = shallow(<wrapper.WrappedComponent {...props} />);
    innerComponent.instance().onClose();
    expect(innerComponent.instance().state.open).toEqual(false);
  });
});
