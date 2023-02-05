import { Contacts } from "components/contacts/contacts"
import { ModalWindow } from "components/modal/modal";
import { NewContactForm } from "components/newContactForm/newContactForm"
import { useState } from "react"
import { AddButton, Container, Header } from "./contactsPage.styled";

const ContactPage = () => {
    const [modalState, setModalState] = useState(false);

    const handleCliCk = event => {
        setModalState(!modalState);
    }

    return (
        <Container>
            <Header>Your contacts</Header>
            <AddButton onClick={handleCliCk}>Add contact</AddButton>
            {modalState && (
                <ModalWindow toggleModal={handleCliCk}>
                    <NewContactForm/>
                </ModalWindow>
            )}
            <Contacts/>
        </Container>
    )
    // return (
    //     <div>
    //         <h2>Your contacts</h2>
    //         <button type="button">Add contact</button>
    //         <NewContactForm></NewContactForm>
    //         <Contacts></Contacts>
    //     </div>
    // )
}

export default ContactPage