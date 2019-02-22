import React from 'react';
import { shallow } from 'enzyme';
import { SocialAuthView, mapStateToProps } from './socialAuthView';

const props = {
  googleSignInAction: jest.fn(),
  facebookSignInAction: jest.fn(),
  payload: {
    user: {
      token: 'usertoken',
    },
    errors: {
      errors: "['The auth_token is expired or invalid']",
    },
  },
  socialAuthState: {
    isAuthenticated: false,
    facebook_login: false,
    google_login: false,
    payload: '',
    token: '',
  },

};

const initialState = {
  isAuthenticated: false,
  facebook_login: false,
  google_login: false,
  payload: '',
  token: '',
};

let wrapper;

describe('<SocialAuthView />', () => {
  beforeEach(() => {
    wrapper = shallow(<SocialAuthView {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handle google signIn action', () => {
    wrapper.instance().handlegoogleResponseFailure({
      auth_token: 'token',
    });
    expect(wrapper.instance().props.googleSignInAction).toBeCalled();
  });

  it('should update next props', () => {
    wrapper.setProps({
      socialAuthState: {
        isAuthenticated: true,
        payload: {
          user: {
            username: 'dee',
          },
        },
      },
    });

    expect(wrapper.instance().props.socialAuthState).toEqual({
      isAuthenticated: true,
      payload: {
        user: {
          username: 'dee',
        },
      },
    });
  });

  it('should call handle google sign in success', () => {
    wrapper.setProps({
      response: {
        tokenId: 'a fake google token',
      },
    });

    wrapper.instance().handleGoogleResponseSuccess(wrapper.instance().props.response);
    expect(wrapper.instance().props.response).toEqual({ tokenId: 'a fake google token' });
  });
  it('should handle google sign in fail', () => {
    wrapper.setProps({
      response: {
        error: 'a fake google error',
      },
    });
    wrapper.instance().handlegoogleResponseFailure(wrapper.instance().props.response.error);
    expect(wrapper.instance().props.googleSignInAction).toBeCalled();
  });

  it('should call facebook sign in action', () => {
    wrapper.setProps({
      response: {
        accessToken: 'a fake google token',
      },
    });

    wrapper.instance().handleFacebookReponse(wrapper.instance().props.response);
    expect(wrapper.instance().props.facebookSignInAction).toBeCalled();
  });

  it('should return state from redux store', () => {
    expect(mapStateToProps(initialState).props).toEqual(undefined);
  });
  it('should store token in local storage', () => {
    wrapper.setProps({
      response: {
        tokenId: 'a fake google token',
      },
    });
  });
});
