import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoginModal from '../components/Login/loginModal';

const jwt = require('jsonwebtoken');


const authHoc = WrappedComponent => withRouter(
  class AuthHoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        open: false,
      };
    }


    componentWillMount() {
      const token = localStorage.getItem('token');
      if (!token) {
        this.setState(
          { open: true },
        );
      } else if (token) {
        try {
          const decoded = jwt.verify(token, process.env.SECRET);
        } catch (err) {
          if (err) {
            this.setState({
              open: true,
            });
          }
        }
      }
    }

            onClose = () => {
              this.setState({
                open: false,
              });
              const token = localStorage.getItem('token');
              if (!token) {
                this.props.history.push('/');
              } else if (token) {
                try {
                  jwt.verify(token, process.env.SECRET);
                } catch (err) {
                  if (err) {
                    this.props.history.push('/');
                  }
                }
              }
            };

            render() {
              return (
                <div>
                  <LoginModal open={this.state.open} onClose={this.onClose} />
                  <WrappedComponent {...this.props} />
                </div>
              );
            }
  },

);

export default authHoc;
