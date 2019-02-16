import React from 'react';
import Modal from 'react-responsive-modal';
import RegisterView from '../../views/RegisterView';

const RegisterModal = props => (
  <div className="row">
    <Modal open={props.open} onClose={props.onModalClose} classNames={{ modal: 'col col-md-6 col-sm-12 col-lg-4 col-offset-lg-3 col-offset-4' }}>
      <RegisterView />
    </Modal>
  </div>
);


export default RegisterModal;
