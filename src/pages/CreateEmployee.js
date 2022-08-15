import { useState } from "react";
import { Link } from "react-router-dom";
import ConfirmModal from "../components/ConfirmModal";
import Form from "../components/Form"
import Header from "../components/Header";

function CreateEmployee() {

    const [visible, setVisible] = useState(false);

    return (
        <div>
            <Header />
            <Form visible={visible} setVisible={setVisible} />
            {/* <ConfirmModal visible={visible} setVisible={setVisible}  /> */}
        </div>
    )
}

export default CreateEmployee;