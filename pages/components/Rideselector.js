
import React, {useState,useEffect} from "react"
import tw from "tailwind-styled-components"


const Rideselector = ({pickup,drop}) => {

const [rideduration, setrideduration]=useState(0)

useEffect(()=>{
fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickup[0]},${pickup[1]};${drop[0]},${drop[1]}?access_token=pk.eyJ1Ijoic3VkaXAwMDQiLCJhIjoiY2xiYnRnM2c5MGQ0YzNvcGllcmpkaDVrayJ9.B7umX_Q0OIqXw5-jGiSHSA`)
.then(res=>res.json())
.then(data=>setrideduration(data.routes[0].duration/100))
},[pickup,drop])
  return (
    <>
    <Wrapper>
    <Title>conform or any ride you chose</Title>
    <Carlist>
           <Car>
            <Carimage src="../../images/ride.png"/>
           <Cardetails>
           <Service>UberX</Service>
            <Time>5 min away</Time>
           </Cardetails>
            <Price>{"$"+(rideduration).toFixed(2)}</Price>
           </Car>
           <Car>
            <Carimage src="../../images/ride.png"/>
           <Cardetails>
           <Service>UberX</Service>
            <Time>5 min away</Time>
           </Cardetails>
            <Price>{"$"+(rideduration).toFixed(2)}</Price>
           </Car>
           <Car>
            <Carimage src="../../images/ride.png"/>
           <Cardetails>
           <Service>UberX</Service>
            <Time>5 min away</Time>
           </Cardetails>
            <Price>{"$"+(rideduration).toFixed(2)}</Price>
           </Car>
           <Car>
            <Carimage src="../../images/ride.png"/>
           <Cardetails>
           <Service>UberX</Service>
            <Time>5 min away</Time>
           </Cardetails>
            <Price>{"$"+(rideduration).toFixed(2)}</Price>
           </Car>
           <Car>
            <Carimage src="../../images/ride.png"/>
           <Cardetails>
           <Service>UberX</Service>
            <Time>5 min away</Time>
           </Cardetails>
            <Price>{"$"+(rideduration).toFixed(2)}</Price>
           </Car>
           <Car>
            <Carimage src="../../images/ride.png"/>
           <Cardetails>
           <Service>UberX</Service>
            <Time>5 min away</Time>
           </Cardetails>
            <Price>{"$"+(rideduration).toFixed(2)}</Price>
           </Car>
          
          
          

    </Carlist>
    </Wrapper>
    </>
  )
}

const Wrapper =tw.div`
   flex flex-col overflow-y-scroll
`
const Title=tw.div`
text-gray-500 text-center border-b text-xs py-2 border-t
`
const Carlist=tw.div`
border-b-2 overflow-y-scroll
`
const Car=tw.div`
flex items-center border-b
`
const Cardetails=tw.div`
flex-1
`
const Carimage=tw.img`
h-14 m-2
`
const Service=tw.div`
font-medium
`
const Time=tw.div`
text-xs text-blue-500
`
const Price=tw.div`
font-medium
`


export default Rideselector