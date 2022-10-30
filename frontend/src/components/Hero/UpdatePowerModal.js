import Modal from 'react-modal'
import UpdatePowerForm from './UpdatePowerForm'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

const UpdatePowerModal = () => {
  return (
    <Modal 
        isOpen
        style={customStyles}
    >
        <h2>Update powers</h2>
        <UpdatePowerForm />
    </Modal>
  )
}

export default UpdatePowerModal
