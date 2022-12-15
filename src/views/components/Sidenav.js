import React from 'react'
import { Modal } from 'reactstrap';
import Menu from './Menu';

function Sidenav(props) {
  const {menuModalOpen, setMenuModalOpen} = props
  return (
    <>
        <Modal
          isOpen={menuModalOpen}
          wrapClassName="universal-modal-left"
        >
          <Menu setMenuModalOpen={setMenuModalOpen}/>
        </Modal>
    </>
  )
}

export default Sidenav