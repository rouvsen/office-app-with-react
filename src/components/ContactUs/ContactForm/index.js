import React, { useState } from "react";
import axios from "axios";
import './index.css';

function ContactForm() {

    const [email, setEmail] = useState("");
    const [note, setNote] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNoteChange = (e) => {
        setNote(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: email,
            note: note,
        };

        axios
        .post("http://localhost:8080/form", data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    };

  return (
    <section className='aboutus-main-section'>
        <div className='aboutus-main-section-wrapper'>
            <h2>BİZİMLƏ ƏLAQƏ</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="E-mail"
                required
                />
                <textarea
                id="note"
                name="note"
                value={note}
                onChange={handleNoteChange}
                placeholder="Qeyd edin"
                rows={10}
                required
                />
                <button type="submit">Göndər</button>
            </form>
        </div>
        <div className="aboutus-main-section-background-image"></div>
    </section>
  );
}

export default ContactForm;
