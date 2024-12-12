const BACKEND_URL = import.meta.env.VITE_EXPRESS_BACKEND_URL;

const getProfile = async(id) =>{
    try{
        //fetch the profile data from the backend
        const res = await fetch(`${BACKEND_URL}/profiles/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })

        //get the user from json
        const user= res.json();
        return user;

    }catch(err){
        return {error: err.message}

    }
}


export{getProfile}