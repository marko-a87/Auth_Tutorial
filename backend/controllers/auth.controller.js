

const login = async(req, res) =>{
    res.send("login user");
}
const signup = async(req, res) =>{
    res.send("signup user");
}
const logout = async(req, res) =>{
    res.send("logout user");
}

export{login, signup, logout}