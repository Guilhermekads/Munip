import axios from "axios";
import { useState, useEffect } from "react";

const useForm = (callback,validate) => {
    const [values, setValues] = useState({
        name: '',
        SecondName: '',
        cpf: '',
        email: '',
        password: '',
    })

    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {

        const {name, value} = e.target 

        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()


        setErrors(validate(values))

        setIsSubmitting(true)
    }

    useEffect(()=>{
      axios.post('https://boiling-headland-90550.herokuapp.com/auth/register', {
                name: values.name,
                SecondName: values.SecondName,
                cpf: values.cpf,
                email: values.email,
                password: values.password,
                carbs: 0
            }).then(res=>{
            console.log(res)
            console.log(res.data)
        })

        if(Object.keys(errors).length === 0 && isSubmitting){

            callback()
        }
    }, [errors])

    return {handleChange, values, handleSubmit, errors}
}

export default useForm