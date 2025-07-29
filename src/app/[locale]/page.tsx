import Firstpage from "./components/firstpage";
import Ourjob from './components/Ourjob'
import Secondpage from "./components/secondpage";
import Thirdpage from "./components/thirdpage";
import Fourthpage from "./components/fourthpage";

export default function Home() {
  return (
    <div style={{ backgroundColor:"#17181f",position:"relative",width:"100vw", justifyContent:"center"}}>
      <Firstpage/>
      <Secondpage/> 
      <Thirdpage/> 
      <Fourthpage/>
      <Ourjob />

<div style={{color:"white",display:"flex",textAlign:"left",flexDirection:"column",backgroundColor:"black",borderTop:"1px solid white",paddingTop:20}}>
  <p style={{marginLeft:"20px"}}>Digital Station | +22670719366 |📍 Ouagadougou,burkina faso</p>
  <p style={{marginLeft:"20px"}}>© 2025 All rights reserved</p>
</div>


  </div>



  );
}




