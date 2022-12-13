import { useEffect } from "react";

import tw from "tailwind-styled-components"//foe talwind
import mapboxgl from "mapbox-gl"

mapboxgl.accessToken = 'pk.eyJ1Ijoic3VkaXAwMDQiLCJhIjoiY2xiYnRnM2c5MGQ0YzNvcGllcmpkaDVrayJ9.B7umX_Q0OIqXw5-jGiSHSA';

const Map = (props) => {


    useEffect(() => {
        // if (map.current) return; // initialize map only once
        const map = new mapboxgl.Map({
          container: "map",   //container hold id
          style: 'mapbox://styles/mapbox/streets-v12', //mapbox://styles/mapbox/streets-v12  --different style
          center: [88.363892,22.572645],
          zoom: 3
        });
        if(props.pickup){
          addToMap(map,props.pickup)
        }
        if(props.drop){
          addToMap(map,props.drop)
        }
        // addToMap(map)
               
        // For Zooming Purpuse
        if(props.pickup && props.drop){
          map.fitBounds([
            props.pickup,
            props.drop
          ],{padding:10})
        }

      },[props.pickup,props.drop]);
   
      //call marker function

      const addToMap=(map,cordinate)=>{
        const marker1= new mapboxgl.Marker()
        .setLngLat(cordinate)
        .addTo(map)
      }
  return (
    <>
    <Wrapper id="map"></Wrapper>
    
    </>
  )
}

const Wrapper= tw.div`
flex-1 h-1/2
`

export default Map