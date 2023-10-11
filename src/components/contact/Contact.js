import React, { useContext, useState } from 'react'
import './Contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themecontext } from '../../Context';
function Contact() {
    const theme = useContext(themecontext)
    const darkmode = theme.state.darkmode
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_90isnjq', 'template_gjxbssk', form.current, '3T82ASRjzD5bj2PmC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setDone(true)

    }
    return (
        <div className='row contact' id='Contact'>
            <div className='col-5 skills-left'>
                <span style={{
                    background: darkmode ? 'black' : '',
                    color: darkmode ? 'white' : ''
                }}>Get in touch</span>
                <span>Contact me</span>
            </div>
            <div className='col-7 contact-right'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' className='user' name='from_name' placeholder='Name'></input>
                    <input type='email' className='user' name='from_email' placeholder='Email'></input>
                    <textarea name='message' className='user' placeholder='Message'></textarea>
                    <input type='submit' value='Send' className='btns c-btn'></input>
                    <span>{done && 'thanks for contacting'}</span>
                </form>
            </div>
        </div>
    )
}

export default Contact
