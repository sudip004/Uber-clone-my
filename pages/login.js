import React,{useState,useEffect} from 'react'
import tw from "tailwind-styled-components"
import {useRouter} from "next/router"
import  {signInWithPopup, onAuthStateChanged} from "firebase/auth"
import {app, provider, auth} from "../Firebase"

const Login = () => {
    const router=useRouter()

useEffect(()=>{
 return onAuthStateChanged(auth, (user)=> {
    if(user){
        router.push("/")
    }
})
},[])

  return (
   <>
   <Wrapper>
      <Image src="../images/download.png"/>
      <Driveimage src="../images/login.png"/>
      <Title>Log in to access your account</Title>
      <Singup onClick={()=>signInWithPopup(auth,provider)}>
        SingUp-With-Google
      </Singup>

   </Wrapper>
   </>
  )
}
//css part start
const Wrapper = tw.div`
flex flex-col h-screen w-screen bg-gray-200 p-4
`
const Image=tw.img`
h-12 w-auto object-contain self-start
`
const Title=tw.div`
text-5xl pt-4 text-gray-400
`
const Driveimage=tw.img`
object-contain w-full mt-2
`
const Singup=tw.button`
bg-black text-white text-center p-4 m-4 font-medium 
`


export default Login