import React from 'react';
import Modal from 'react-responsive-modal';
import PropTypes from 'prop-types';
import LoginView from '../../views/loginView/LoginView';

const LoginModal = ({ open, onClose, onOpenSignup }) => (
  <div>
    <Modal open={open} onClose={onClose} classNames={{ modal: 'col col-md-6 col-sm-12 col-lg-4 col-offset-lg-3 col-offset-4' }}>
      <LoginView onOpenSignup={onOpenSignup} />
    </Modal>
  </div>
);

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginModal;
