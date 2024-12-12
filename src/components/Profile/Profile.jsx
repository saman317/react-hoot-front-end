import React, {useState, useEffect} from 'react'
import{useParams} from "react-router-dom"
import * as profileService from "../../services/profileService"

const Profile = () => {
    const [profile, setProfile]=useState(null);
    //get the id from the URL, useParams when you have :id etc
    const {id} = useParams();
    useEffect(()=>{
        const getProfile = async() =>{
         const fetchedProfile= await profileService.getProfile(id);
        setProfile(fetchProfile);
}
    getProfile();
}, [])

console.log(profile, "profile from Profile component")
  return (
    <div>
        {profile && (
            <>
            <h1>{profile.username}</h1>
            </>
        )}
        
    </div>
 
  )
}

export default Profile