import React from 'react';
class Navbar extends React.Component {
 
    render() {
       
            const mystyle = {
              color: "gray",
              backgroundColor: "white",
              padding: "10px",
              fontFamily: "Arial"
            };
            return (
              <div>
              <a href="" style={mystyle}>Mac</a>
              <a href="" style={mystyle}>iPhone</a>
              <a href="" style={mystyle}>Mobile Phones</a>
              <a href="" style={mystyle}>iPad</a>
              <a href="" style={mystyle}>Laptops</a>
              <a href="" style={mystyle}>Smartwatches</a>
              <a href="" style={mystyle}>Camera</a>
              
              </div>
            );
          }
}
export default Navbar;