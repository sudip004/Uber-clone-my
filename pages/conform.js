import React,{useState,useEffect,} from 'react'
// import {useRouter} from "react-dom"
import tw from "tailwind-styled-components"
import Link from "next/link"
import Map from "../pages/components/Map"
import {useRouter} from "next/router"
import Rideselector from './components/Rideselector'

const Conform = () => {
const [pickup,setpickup]=useState([0,0])
const [drop,setdrop]=useState([0,0])

// for quier to pass location pickup and drop from search page
const router=useRouter()
const {pick,dropoff}=router.query

const pickupgetlocation=(pick)=>{
fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pick}.json?`+
new URLSearchParams({
  access_token:"pk.eyJ1Ijoic3VkaXAwMDQiLCJhIjoiY2xiYnRnM2c5MGQ0YzNvcGllcmpkaDVrayJ9.B7umX_Q0OIqXw5-jGiSHSA",
   Limit:1
})
)
.then((data)=>data.json())
.then((res)=>setpickup(res.features[0].center))
.catch((error)=>console.log(error))
}

const dropgetlocation=(dropoff)=>{
fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
new URLSearchParams({
  access_token:"pk.eyJ1Ijoic3VkaXAwMDQiLCJhIjoiY2xiYnRnM2c5MGQ0YzNvcGllcmpkaDVrayJ9.B7umX_Q0OIqXw5-jGiSHSA",
  Limit:1
})
)
.then((data1)=>data1.json())
.then((res)=>setdrop(res.features[0].center))
.catch((error)=>console.log(error))
}
console.log(pickup);

useEffect(()=>{
    pickupgetlocation(pick)
    dropgetlocation(dropoff)
},[pick,dropoff])


  return (
    <>
    
    <Wrapper>
       <Map pickup={pickup} drop={drop} />

      <RideContainer>
        <Rideselector pickup={pickup} drop={drop}/> 

        <ConformButton>
          Conform Uber-x
        </ConformButton>
      </RideContainer>
    </Wrapper>

    </>
  )
}

const Wrapper = tw.div`
h-screen flex flex-col 
`
const RiderSection = tw.div`
  border-8 border-gray-400 text-center text-xl 
8
`
const RideContainer=tw.div`
flex-1 flex flex-col h-1/2
`

const ConformButton=tw.div`
bg-black text-white text-center py-2 mx-4 my-4 text-xl border-t-2
`


export default Conform