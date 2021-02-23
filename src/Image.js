import React from 'react';
import logo from './images.jpg'; 
import rectangle from './Rectangle.png'; 
import image1771X from './image1771X.png';
import image1791X from './image1791X.png';
import image1801X from './image1801X.png';
import image1821X from './image1821X.png';
import assured from './Assured.png';// with import
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.6.0/css/bootstrap.min.css"
  integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
  crossorigin="anonymous"
/>
class Image extends React.Component {

  render() {
    const style = {
      backgroundColor: "white", 
      color:"#6A6767", 
    };
    
    return (
      
<>
        <div style={style}>
          <div style={{float:'left'}}>
          <img src={image1771X} /></div>
        <div style={{clear:'both'}}>
          <img src={image1801X} />
        <img src={image1791X}  /></div>
       
            <div  style={{float:'right'},{textAlign:'left'}}>
            <img src={assured} />
              <p style={{fontFamily:"Roboto-Regular"},{fontSize:'20px'}}>Apple iPhone 11 (Includes Earpods and power adapter)</p>
              <p style={{fontFamily:"Roboto-Regular"},{fontSize:'14px'}}>Minimally used. Negligible Scratches. Fully Functional</p>

              <p style={{fontFamily:"Roboto-Regular"},{fontSize:'20px'}}>AED 8349 <span style={{fontSize:'12px'}}>AED 9000</span> </p>
              <div style={{textAlign:'center'}}><Button variant="outline-danger">Buy Now</Button> <Button variant="danger">Add to Cart </Button></div>
              </div>

        </div>
      
      </>
    );
  }
}
export default Image;