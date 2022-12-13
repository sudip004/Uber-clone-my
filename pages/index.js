import { useEffect, useState } from "react";

import tw from "tailwind-styled-components"; //foe talwind
import mapboxgl from "mapbox-gl";
import Map from "./components/Map";
import Link from "next/link";
import { auth } from "../Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
// import img1 from "../Images/download.png"
// import img2 from "../images/sudip.jpg"

function Index() {
  // var map = new mapboxgl.Map({
  //     container: 'YOUR_CONTAINER_ELEMENT_ID',
  //     style: 'mapbox://styles/mapbox/streets-v11'
  //   });
  const [user, setuser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        setuser({
          name: user.displayName,
          photourl: user.photoURL,
        })
      } else {
        setuser(null);
        router.push("/login");
      }
    });
  }, []);
 

  return (
    <>
      <Wrapper>
        <Map />
        <ActionTtems>
          {/* Header section */}
          <Header>
            <ULogo src="../images/download.png" alt="" />
            <Profile>
              <Name>{user && user.name}</Name>
              <Userimage
               src={user && user.photourl}
                onClick={() => signOut(auth)}
              />
            </Profile>
          </Header>
          {/* Action Button Section Start */}
          <ActionButtons>
            <Link href="/search">
              <ActionButton>
                <ActionImage src="../images/ride.png" />
                Ride
              </ActionButton>
            </Link>
            <Link href="/search">
              <ActionButton>
                <ActionImage src="../images/ride.png" />
                Wheels
              </ActionButton>
            </Link>
            <Link href="/search">
              <ActionButton>
                <ActionImage src="../images/ride.png" />
                Reserve
              </ActionButton>
            </Link>
          </ActionButtons>
          {/* where Too */}
          <InputButton>Where To ?</InputButton>
        </ActionTtems>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
flex flex-col  h-screen 
`;
// const Map = tw.div`
// bg-red-800 flex-1
// `
const ActionTtems = tw.div`
flex-1 p-4
`;
const Header = tw.div`
flex justify-between items-center
`;
const ULogo = tw.img`
h-28 w-35
`;
const Profile = tw.div`
flex items-center 
`;
const Name = tw.div`
text-sm decoration-solid p-2
`;
const Userimage = tw.img`
h-12 w-12 rounded-full border-solid-black border-4 
`;
const ActionButtons = tw.div`
flex 
`;
const ActionButton = tw.div`
flex bg-gray-300 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`;
const ActionImage = tw.img`
h-2/4
`;
const InputButton = tw.div`
bg-gray-300 h-20 flex items-center p-4 text-xl mt-8
`;

export default Index;
