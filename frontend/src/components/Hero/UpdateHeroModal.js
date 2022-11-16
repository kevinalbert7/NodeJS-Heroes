import Modal from "react-modal";

import UpdateHeroForm from "./UpdateHeroForm";
import Button from "../Button";
import Flex from "../Flex";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const UpdateHeroModal = ({ isOpen, onClose, hero }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <h2>Update Hero</h2>
      <UpdateHeroForm hero={hero} onClose={onClose} />
      <Flex>
        <Button background="red" onClick={onClose}>
          X
        </Button>
      </Flex>
    </Modal>
  );
};

export default UpdateHeroModal;
