
// ---------- register user ------------------
export const registerUser = async (body)=>{
    // console.log(body)
    const route = "https://trgbackend-production.up.railway.app/api/register"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        credentials: 'include',
        body : JSON.stringify(body)
    }
    return await fetch(route, options)
}


// ----------- user login ---------------------
export const loginUser = async (body)=>{
    const route = "https://trgbackend-production.up.railway.app/api/login"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        credentials: 'include',
        body : JSON.stringify(body)
    }
    return await fetch(route, options)
}

// ----------- update user -------------------
export const updateUser = async (body, jwtoken)=>{
    const route = "https://trgbackend-production.up.railway.app/api/update-profile"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Authorization: 'token ' + jwtoken
        },
        credentials: 'include',
        body : JSON.stringify(body)
    }
    return await fetch(route, options)
}


// ----------- verifying code -------------------
export const verifyOTP = async (body)=>{
    const route = "https://trgbackend-production.up.railway.app/api/verify-code"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        credentials: 'include',
        body : JSON.stringify(body)
    }
    return await fetch(route, options)
}
