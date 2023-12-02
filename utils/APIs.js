const root = "https://trgbackend-production.up.railway.app"
// const root = "http://172.20.10.2:1222"

// ---------- register user ------------------
export const registerUser = async (body) => {
    // console.log(body)
    const route = `${root}/api/register`
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
export const loginUser = async (body) => {
    const route = `${root}/api/login`
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
export const updateUser = async (body, jwtoken) => {
    const route = `${root}/api/update-profile`
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
export const verifyOTP = async (body) => {
    const route = `${root}/api/verify-code`
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

//------------- fetching carousel --------------
export const fetchCarousel = async () => {
    const route = `${root}/api/fetch-carousel`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await fetch(route, options)
}

//------------- fetching announcements --------------
export const fetchAnnouncements = async () => {
    const route = `${root}/api/fetch-announcements`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await fetch(route, options)
}

// ----------- submitting doubt -------------------
export const submitDoubt = async (body) => {
    const route = `${root}/api/submit-doubt`
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

//------------ fetch qod --------------------
export const fetchQod = async () => {
    const route = `${root}/api/fetch-qod`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await fetch(route, options)
}

// ----------- fetching test series -------------------
export const fetchQuizes = async (body) => {
    const route = `${root}/api/fetch-quizes`
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

//------------ fetch quiz --------------------
export const fetchQuiz = async (quizId) => {
    const route = `${root}/api/fetch-quiz/${quizId}`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await fetch(route, options)
}

//------------ fetch materials --------------------
export const fetchMaterials = async (body) => {
    const route = `${root}/api/fetch-materials`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}