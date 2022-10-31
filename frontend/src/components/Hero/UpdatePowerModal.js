import Modal from 'react-modal'

import UpdatePowerForm from './UpdatePowerForm'
import Button from '../Button'
import Flex from '../Flex'

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

const UpdatePowerModal = ({ isOpen, setHero, onClose }) => {
  return (
    <Modal 
      isOpen={isOpen}
      style={customStyles}
    >
      <h2>Update powers</h2>
      <UpdatePowerForm setHero={setHero} onClose={onClose}/>
      <Flex>
        <Button background="red" onClick={onClose}>
          X
        </Button>
      </Flex>
    </Modal>
  )
}

export default UpdatePowerModal
