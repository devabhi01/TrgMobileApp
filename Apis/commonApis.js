
// ------------register user-------------------------------------
export const registerUser = async (body)=>{
    // console.log(body)
    const route = "/api/register"
    const options = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        credentials: 'include',
        body : JSON.stringify(body)
    }
    return await fetchApi("http://172.20.10.2:1222"+route, options)
}