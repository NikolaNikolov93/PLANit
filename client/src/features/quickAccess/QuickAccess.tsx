import Button from "../../components/button/Button"; // Import Button component
import { ActionsWrapper, QuickAccessWrapper } from "./QuickAccess.styles"; // Import styled components for layout
import Modal from "../../components/modal/Modal"; // Import Modal component
import { useState } from "react"; // Import useState hook from React
import AddExpenseForm from "../../components/forms/AddExpenseFrom"; // Import AddExpenseForm component

// QuickAccess component - Provides quick actions such as adding an expense or generating a report
const QuickAccess: React.FC = () => {
  // State to manage the visibility of the modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Function to open the modal when the user clicks the "Add expense" button
  const openModal = () => {
    setIsModalOpen(true); // Set the modal to be open
  };

  // Function to close the modal when the user clicks the close button or completes the form
  const closeModal = () => {
    setIsModalOpen(false); // Set the modal to be closed
  };

  return (
    <QuickAccessWrapper>
      <h3>Quick Access</h3>
      <ActionsWrapper>
        <Button onClick={openModal}>Add expense</Button>
        <Button>Generate report</Button>
      </ActionsWrapper>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <AddExpenseForm isModalClosed={() => setIsModalOpen(false)} />
      </Modal>
    </QuickAccessWrapper>
  );
};

export default QuickAccess;
