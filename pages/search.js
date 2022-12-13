import React,{useState} from 'react'
import tw from "tailwind-styled-components"
import Link from "next/link"
const search = () => {

const [pick, setpick]=useState("")
const [dropof, setdropof]=useState("")

  return (
   <>
   <Wrapper>

{/* Button Container */}

{/* Input Container */}
<InputContainer>
<FromToIcon>

<ButtonContainer>
<Link href="/"><BackButton src='../images/back.png'/></Link>
</ButtonContainer>

</FromToIcon>
<InputBoxes>
<Input placeholder='Enter Your PickUp Location' onChange={(e)=>setpick(e.target.value)} />
<Input placeholder='Enter Your Drop Location' onChange={(e)=>setdropof(e.target.value)} />
</InputBoxes>
</InputContainer>
{/* Save Places */}
<SavePlace>
    Save Place
</SavePlace>
<Link href={{
  pathname:"/conform",
  query:{
    pick:pick,
    dropoff:dropof
  }
}}>
<Conform>
Conform Location
</Conform>
</Link>
{/* Confrom Loction */}


   </Wrapper>
   </>
  )
}

const Wrapper=tw.div`
bg-gray-200 h-screen 
`
const ButtonContainer=tw.div`
bg-white
`
const BackButton=tw.img`
h-8 mt-2 
`
const InputContainer=tw.div`
 flex bg-white  px-4 flex-col
`
const FromToIcon=tw.div`

`
const InputBoxes=tw.div`
flex flex-col flex-1 p-4 
`
const Input=tw.input`
h-10 bg-gray-300  w-500 my-1 ml-7 rounded-2 p-2 outline-none border-none
`
const SavePlace=tw.div`
 text-white text-center bg-blue-400 py-4 m-4 rounded-full
`

const Conform=tw.div`
bg-black text-white text-center p-4 m-4 rounded-full
`


export default search