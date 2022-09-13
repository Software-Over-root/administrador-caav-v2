import React, {useEffect, useState} from 'react';
import M from 'materialize-css';

//carusel
import imagenes from '../ImagenesCarruselIndex';
import { Jumbotron } from 'react-bootstrap';

import "./CarruselImagenes.css";

const CarruselImagenes = () => {
    const [posicion, setPosicion] = useState(0)

    useEffect(() => {
        var elems = document.querySelectorAll('.carousel');
        var instance = M.Carousel.init(elems, {
            fullWidth: true,
            indicators: false
        });
    });

    const siguiente = e => {
        e.preventDefault();
        var elems = document.querySelectorAll('.carousel');
        var instance = M.Carousel.getInstance(elems[0]);
        instance.next();
    }

    const anterior = e => {
        e.preventDefault();
        var elems = document.querySelectorAll('.carousel');
        var instance = M.Carousel.getInstance(elems[0]);
        instance.prev();
    }


    return(
        <div>
            <div className='wrap' style={{
                display:"flex", 
                justifyContent:"center", 
                alignItems:"center"
            }}>
                <button onClick={anterior} 
                    className="order_2"
                    style={{border:"none", 
                    background:"#ffffff", 
                    borderRadius:"50%", 
                    margin:"0px 15px", 
                    width:"40px", 
                    height:"40px"
                }}>
                    <p style={{
                        fontSize:"40px", 
                        fontWeight:"bold", 
                        margin:"0px", 
                        color:"#A80938", 
                        marginTop:"-8px"
                    }}>
                        <i style={{
                            fontSize:"50px", 
                            position:"relative", 
                            left:"-12px", 
                            top:"3px"
                        }} class="material-icons" >
                            chevron_left
                        </i>
                    </p>
                </button>

                <div class="carousel carousel-slider altura_carrusel order_1">
                    {imagenes.map(imagen => (
                        <a class="carousel-item" href="#">
                            <img src={imagen} />
                        </a>
                    ))}
                </div>

                <button 
                    className="order_2"
                    style={{
                        border:"none", 
                        background:"#ffffff", 
                        borderRadius:"50%", 
                        margin:"0px 15px", 
                        width:"40px", 
                        height:"40px"
                    }} 
                onClick={siguiente} >
                    <p style={{
                        fontSize:"40px", 
                        fontWeight:"bold", 
                        margin:"0px", 
                        color:"#A80938", 
                        marginTop:"-8px"
                    }}>
                        <i style={{
                            fontSize:"50px", 
                            position:"relative", 
                            left:"-9px", 
                            top:"3px"
                        }} class="material-icons">
                            chevron_right
                        </i>
                    </p>
                </button>
            </div>
        </div>
    );
}

export default CarruselImagenes;