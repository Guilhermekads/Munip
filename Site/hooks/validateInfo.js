export default function validateInfo(values) {
    let errors = {}

    if(!values.name.trim()) {
        errors.name = "Nome Obrigatório"

    } 

    if(!values.SecondName){
        errors.SecondName = "Sobrenome obrigatório"

    }

    if(!values.cpf){
        errors.cpf = "CPF obrigatório"
    }else if(!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/i.test(values.cpf)){
        errors.cpf = "CPF invalido"
    }

    if(!values.email){
        errors.email = "Email obrigatório"
    }else if(!/^[A-Z0-9._%=-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Email invalido"
    }

    if(!values.password){
        errors.password = "Senha obrigatória"
    }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/i.test(values.password)){
        errors.password = "Sua senha deve conter 8 caracteres, 1 letra maiscula, 1 numero e 1 caractere especial"
    }

    return errors
}