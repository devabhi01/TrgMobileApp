const root = "https://trgbackend-production.up.railway.app"
// const root = "http://172.20.10.2:1222"
// const root = "https://ea38-2409-4050-e9f-2638-9038-37ea-e7da-5c14.ngrok-free.app"

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
export const fetchQuizes = async (body, userId) => {
    const route = `${root}/api/fetch-quizes/${userId}`
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
export const fetchMaterials = async (body, userId) => {
    const route = `${root}/api/fetch-materials/${userId}`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}

//------------ check if bookmarked --------------------
export const checkIfBookmarked = async (body) => {
    const route = `${root}/api/check-if-bookmarked`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}

//------------ check if bookmarked --------------------
export const addRemoveBookmark = async (body) => {
    const route = `${root}/api/add-bookmark`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}

//------------ fetch quiz --------------------
export const fetchBookmarks = async (userId) => {
    const route = `${root}/api/fetch-bookmarks/${userId}`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return await fetch(route, options)
}

//------------ creating payment intent --------------------
export const createPaymentIntent = async (body) => {
    const route = `${root}/payment/intent`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}

//------------ check buyMaterial --------------------
// export const buyMaterial = async (body) => { //now used as webhook
//     const route = `${root}/payment/buyMaterial`
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(body)
//     }
//     return await fetch(route, options)
// }

//------------ creating payment intent --------------------
export const sentOtp = async (body) => {
    const route = `${root}/api/send-otp`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
    }
    return await fetch(route, options)
}