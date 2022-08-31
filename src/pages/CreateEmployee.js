import { useState } from "react";
// import { Link } from "react-router-dom";
import SimpleModal from "../components/SimpleModal";
import Form from "../components/Form"
import Header from "../components/Header";

function CreateEmployee() {

    const [show, setShow] = useState(false);
    console.log(show)

    return (
        <div>
            <Header />
            <Form show={show} setShow={setShow} />
            <SimpleModal show={show} setShow={setShow}  />
        </div>
    )
}

export default CreateEmployee;