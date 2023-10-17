
// ---------- register user ------------------
export const registerUser = async (body) => {
    // console.log(body)
<<<<<<< HEAD
    const route = "http://192.168.1.41:1222/api/register"
=======
    const route = "https://trgbackend-production.up.railway.app/api/register"
>>>>>>> 2f9881f110f54952ed9256e5dfeee66032a53578
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}


// ----------- user login ---------------------
<<<<<<< HEAD
export const loginUser = async (body) => {
    const route = "http://192.168.1.41:1222/api/login"
=======
export const loginUser = async (body)=>{
    const route = "https://trgbackend-production.up.railway.app/api/login"
>>>>>>> 2f9881f110f54952ed9256e5dfeee66032a53578
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}

// ----------- update user -------------------
<<<<<<< HEAD
export const updateUser = async (body, jwtoken) => {
    const route = "http://192.168.1.41:1222/api/update-profile"
=======
export const updateUser = async (body, jwtoken)=>{
    const route = "https://trgbackend-production.up.railway.app/api/update-profile"
>>>>>>> 2f9881f110f54952ed9256e5dfeee66032a53578
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: 'token ' + jwtoken
        },
        credentials: 'include',
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}


// ----------- verifying code -------------------
<<<<<<< HEAD
export const verifyOTP = async (body) => {
    const route = "http://192.168.1.41:1222/api/verify-code"
=======
export const verifyOTP = async (body)=>{
    const route = "https://trgbackend-production.up.railway.app/api/verify-code"
>>>>>>> 2f9881f110f54952ed9256e5dfeee66032a53578
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}
