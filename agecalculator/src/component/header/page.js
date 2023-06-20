import Link from 'next/link'
import React from 'react'

const SmallHeader = () => {
  return (
    <div className='navigation'>
      

<ul>
  <li className="list">
   <div className='navstyle'>
   <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
    <Link className="text" href={"/"}>Home </Link>
   </div>
  </li>
   <li className="list">
    <div className='navstyle'>
    <span className="icon"><ion-icon name="logo-github"></ion-icon></span>
    <Link className="text" href={"https://github.com/Deepak1181"}>Github </Link>
    </div>
  </li>
   <li className="list">
   <div className='navstyle'>
   <span className="icon"><ion-icon name="logo-instagram"></ion-icon></span>
    <Link className="text" href={"https://www.instagram.com/dprajapati041/"}>Instagram </Link>
   </div>
  </li>
   <li className="list">
   <div className='navstyle'>
   <span className="icon"><ion-icon name="logo-facebook"></ion-icon></span>
    <Link className="text" href={"https://www.facebook.com/profile.php?id=100009580750522"}>Facebook </Link>
   </div>
  </li>
   <li className="list">
    <div className='navstyle'>
    <span className="icon"><ion-icon name="logo-linkedin"></ion-icon></span>
    <Link className="text" href={"https://www.linkedin.com/in/deepak-prajapati-349564119/"}> linkedin</Link>
    </div>
  </li>
</ul>

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default SmallHeader