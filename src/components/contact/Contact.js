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
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_90isnjq', 'template_gjxbssk', form.current, '3T82ASRjzD5bj2PmC')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setDone(true)
        setName('')
        setEmail('')
        setMessage('')
        

    }
    const changehandler=(e)=>{
        
        if(e.target.name == 'from_name'){
            setName(e.target.value)
        }
        else if(e.target.name == 'from_email'){
            setEmail(e.target.value)
        }
        else if(e.target.name == 'message'){
            setMessage(e.target.value)
        }

        
    }
    
    return (
        <div className='row contact' id='Contact'>
            <div className='col-5 skills-left contact-left'>
                <span style={{
                    
                    color: darkmode ? 'white' : ''
                }}>Get in touch</span>
                <span>Contact me</span>
            </div>
            <div className='col-7 contact-right mx-auto'>
                <form ref={form} onSubmit={sendEmail} className='mx-auto' onChange={changehandler}>
                    <input type='text' className='userinp' name='from_name' placeholder='Name' value={name} ></input>
                    <input type='email' className='userinp' name='from_email' placeholder='Email' value={email} ></input>
                    <textarea name='message' className='userinp c-textarea' placeholder='Message' value={message} ></textarea>
                    <input type='submit' value='Send' className='btns c-btn'></input>
                    <span id='thanks'>{done && 'thanks for contacting'}</span>
                </form>
            </div>
        </div>
    )
}

export default Contact
