import Modal from 'modal-components';

const SimpleModal = ({ show, setShow}) => {

    return (
        <Modal show={show} setShow={setShow} closeAnywhere={true} showIcon={true} sectionStyle={{ fontWeight: "bold", fontFamily: "Arial" }}>
            <span>L'employé a bien été enregistré</span>
        </Modal>
    )
}

export default SimpleModal;