// import React from 'react'
// import { Link } from 'react-router-dom'



// function Menu() {
// return (
//     <div>
//         <div>
//             <Link className='list-group-item list-group-item-action' tag='a' to ='/home' action>Home</Link>
//         </div>
        
//         <div>
//             <Link className='list-group-item list-group-item-action' tag='a' to ='/service' action>Services</Link>
//         </div>

//         <div>
//             <Link className='list-group-item list-group-item-action' tag='a' to ='/about' action>About Us</Link>
//         </div>

//         <div>
//             <Link className='list-group-item list-group-item-action' tag='a' to ='/testing' action>Testing Process</Link>
//         </div>
//         <div>
//             <Link className='list-group-item list-group-item-action' tag='a' to ='/contact' action>Contact</Link>
//         </div>

//     </div>
// )
// }

// export default Menu

// import React from 'react';
// import { Link } from 'react-router-dom';

// function Menu() {
//   return (
//     <div>
//       <div>
//         <Link className='list-group-item list-group-item-action' to='/home'>Home</Link>
//       </div>
//       <div>
//         <Link className='list-group-item list-group-item-action' to='/service'>Services</Link>
//       </div>
//       <div>
//         <Link className='list-group-item list-group-item-action' to='/about'>About Us</Link>
//       </div>
//       <div>
//         <Link className='list-group-item list-group-item-action' to='/testing'>Testing Process</Link>
//       </div>
//       <div>
//         <Link className='list-group-item list-group-item-action' to='/contact'>Contact</Link>
//       </div>
//     </div>
//   );
// }

// export default Menu;

function Menu() {
  return (
    <div>
      <div>
        <Link className="list-group-item list-group-item-action" to="/home">Home</Link>
      </div>

      <div>
        <Link className="list-group-item list-group-item-action" to="/service">Services</Link>
      </div>

      <div>
        <Link className="list-group-item list-group-item-action" to="/about">About Us</Link>
      </div>

      <div>
        <Link className="list-group-item list-group-item-action" to="/process">Testing Process</Link>
      </div>

      <div>
        <Link className="list-group-item list-group-item-action" to="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Menu;
