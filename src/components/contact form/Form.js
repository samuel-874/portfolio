import { useEffect, useRef, useState } from "react"
import { FormStatus, Loading, StyledForm, StyledLoader } from "./Form.styles"
import emailjs from '@emailjs/browser';
import { Check } from "../react-icons/Icons";
import { useTheme } from "styled-components";

export const Form = () => {
    const form = useRef();
    const [ showStatus, toggleShow ] = useState(false);
    const [ mailStatus, setStatus ] = useState("initial")
    const { REACT_APP_EMAILJS_PUBLIC_KEY:public_key, REACT_APP_EMAILJS_TEMPLATE:template,REACT_APP_EMAILJS_SERVICE:service}= process.env;

    const [ formErrors, setFormErrors ] = useState({
        email:'',message:''
    });
    const [ formData , setFormData ] = useState({
        user_email:'',message:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const { user_email, message } = formData;
        const errors = { email:"",message:""};
         
        if(!user_email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            errors.email = "please enter an email."
        }else{
            errors.email = ''
        }
        if(message.trim().length < 1){
            errors.message = "message is required"
        }else{
            errors.message = ''
        }

        setFormErrors(errors);

       if(Object.values(errors).every((error) => error.trim() === '')){
        toggleShow(true);
        setStatus("loading")
            emailjs.sendForm(service,template, form.current, public_key)
            .then(() => {

                toggleShow(true);
                setFormData({user_email:"",message:""});
                setStatus("successful");

                setTimeout(()=>{
                    toggleShow(false)
                    setStatus("initial")
                },1000)
            }, (error) => {
                console.log(error);
                toggleShow(true);
                setStatus("failed")
            });
            
       }
    }

    useEffect(()=>{
        if(mailStatus === "loading"){
            setTimeout(() => {
                toggleShow(false);
                setStatus("initial");
            }, 6000);
        }
    },[mailStatus])


    const updateForm = (e) => {
        setFormData( formData => {
            return {
                ...formData,
                [e.target.name]:e.target.value
            }
        })
    }

    return  (
        <StyledForm ref={form} onSubmit={handleSubmit} >
            <span>need a dev</span>
            <h1>Mail me</h1>

        <div>
          <input 
                onChange={updateForm} 
                type="email" 
                name="user_email" 
                value={formData.user_email} 
                placeholder="Your email"
                style={{borderColor: formErrors.email && "rgb(220 38 38 / 1)"}} 
           />
           { formErrors.email && <p>{formErrors.email}</p>}
        </div>

        <div>
          <textarea 
                onChange={updateForm} 
                name="message" 
                className="no-scrollbar" 
                value={formData.message} 
                placeholder="write some thing..."
                style={{borderColor: formErrors.message && "rgb(220 38 38 / 1)"}} 
           />
          { formErrors.message && <p>{formErrors.message}</p>}
        </div>

        <button>Send</button>

        { showStatus &&
            <FormStatus onClick={()=>{
                mailStatus !== "loading" && toggleShow(false) }}>
            { mailStatus === "loading" ?
                <Loader />
            : <Check success={ mailStatus !== "failed"} />
            }
            </FormStatus>
        }
        </StyledForm>
     )
}

const Loader = () => {
    
    return (
        <StyledLoader>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </StyledLoader>
    )
}
