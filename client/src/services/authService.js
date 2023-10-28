export const handleLogin = (e,email,password,role) => {
    e.preventDefault();
    try {
        if(!role || !email || !password){
            return alert('Please provide all field')
        }
    } catch (error) {
        console.log(error)
    }
}

export const handleRegister = (e,email,password,role,name,organisationName,hospitalName,website,address,phone) => {
    e.preventDefault();
    try {
        
    } catch (error) {
        console.log(error)
    }
}