import { useState } from "react";

function Contact() {
    // const email = "john@mail.com"
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input
                    value={name}
                    onChange={(event) => {
                        setName(event.target.value)
                    }}
                    onBlur={() => {
                        if (name == "") {
                            document.getElementById("name-warning").style.display = "block"
                        } else {
                            document.getElementById("name-warning").style.display = "none"
                        }
                    }}
                    type="text"
                    id="name"
                    name="name"
                    required
                />
                <p id="name-warning" className="warning">Name cannot be empty!</p>
                <br />
                <label for="email">Email:</label>
                <input
                    value={email}
                    onChange={(event) => {
                        setEmail(event.target.value)

                        console.log(email)
                    }}
                    onBlur={() => {
                        const regex = /([a-z0-9]+)@([a-z0-9]+).([a-z]{2,6})/i

                        if (regex.test(email)) {
                            document.getElementById("email-warning").style.display = "none"
                        } else {
                            document.getElementById("email-warning").style.display = "block"
                        }
                    }}
                    type="email"
                    id="email"
                    name="email"
                    required
                />
                <p id="email-warning" className="warning">Email is invalid!</p>
                <br />
                <label for="message">Message:</label>
                <textarea
                    value={message}
                    onChange={(event) => {
                        setMessage(event.target.value)

                        console.log(message)
                    }}
                    onBlur={() => {
                        if (message == "") {
                            document.getElementById("message-warning").style.display = "block"
                        } else {
                            document.getElementById("message-warning").style.display = "none"
                        }
                    }}
                    id="message"
                    name="message"
                    required
                />
                <p id="message-warning" className="warning"> Message is invalid!</p>

                <br />
                <button type="submit">Send</button>


            </form>
        </>
    )
}

export default Contact;