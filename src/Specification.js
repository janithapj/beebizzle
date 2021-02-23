import React from 'react';
import inbox from './inTheBox.png';
import handset from './Handset.png';
class Specification extends React.Component {

    render() {
        const style = {
            backgroundColor: "white",
            color: "black",
        };
        const myStyle = {
            border: '1px solid black',
            textAlign:'left',
            color:"#6A6767",
            fontFamily:'sans-serif',
            fontSize:"14px"
        };

        return (

            <div style={style}>
                <div style={{ textAlign: 'left' }}> In The Box</div>
                <div>    <img src={inbox} /></div>
                <div>
                    <h6>Specifications</h6>
                    <table style={myStyle}>
                        <tr>
                            <td>In The Box</td>
                            <td><img src={handset} /></td>
                        </tr>
                        <tr>
                            <td>Model Number</td>
                            <td>MWLX2HN/A</td>
                        </tr>
                        <tr>
                            <td>Model Name</td>
                            <td>iPhone11</td>
                        </tr>
                        <tr>
                            <td>Color</td>
                            <td>Purple</td>
                        </tr>
                        <tr>
                            <td>Browse Type</td>
                            <td>Smartphones</td>
                        </tr>
                        <tr>
                            <td>SIM Type</td>
                            <td>Dual SIM</td>
                        </tr>
                        <tr>
                            <td>Hybrid SIM Slot</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <td>Touch Screen </td>
                            <td>Yes</td>
                        </tr>
                        <tr>
                            <td>OTG Compatable</td>
                            <td>No</td>
                        </tr>
                    </table>
                </div>
            </div>

        )
    }
}
export default Specification;