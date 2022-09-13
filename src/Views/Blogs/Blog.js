import React, {useEffect, useState}  from 'react';
import ReactHtmlParser from 'react-html-parser';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

import Loader from '../../Components/Loader';

import img1 from "../../Images/1.png";
import M from "materialize-css";

import "./Blog.css"


const Blog = props => {

    const [blog, setBlog] = useState(false);
    const [similares, setSimilares] = useState(false);


    useEffect(() => {
        const { firestore } = props;
        var elems = document.querySelectorAll('.carousel');
        M.Carousel.init(elems, {
            fullWidth: true,
            indicators: true
        });

        if (props.blog) {
            setBlog(true);
            let resultado = [];
            firestore.collection("blog")
            .where("tipo", "==", props.blog.tipo)
            .where("titulo", "!=", props.blog.titulo)
            .limit(3)
            .get()
            .then(async function(querySnapshot) {
                if (querySnapshot.docs.length === 0) {
                    // console.log("no hay");
                    setSimilares([]);
                } else {
                    querySnapshot.forEach(function (doc) {
                        console.log(doc.id, ' => ', doc.data());
                        resultado.push(doc.data())
                    });
                    setSimilares(resultado);
                }
            }).catch(function(error) {
                // console.log("Error getting document:", error);
                setSimilares([]);
            });
        }
    }, [props.blog]);

    return (
        !blog ? (
            <div style={{height:"80vh"}}>
                <Loader /> 
            </div>
        ) : (
            <div>
                <div className='contenedor_1' style={{paddingTop:"50px"}} >
                    <img src={props.blog.ruta} alt={props.blog.titulo} className='imagen_blog_1'></img>
                </div>

                <div className='contenedor_3_blog blog_1'>
                    <h2 className='titulo_1'>{props.blog.titulo}</h2>      
                    {ReactHtmlParser(props.blog.contenido)}
                </div>

                <div className='fondo_1 blog_2'>
                    <div className='contenedor_2 invisible_movil'>
                        <h1 className='titulo_7 ' style={{ textAlign:"center" ,fontSize:"30px", marginTop:"0px", fontWeight:"normal"}}>
                            También te puede interesar
                        </h1>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"stretch", flexWrap:"wrap"}}>
                            {!similares ? (
                                <Loader /> 
                            ) : (
                                similares.map(blog => (
                                    <div style={{width:"33.33333%", padding:"10px"}} >
                                        <a href={`/blog/${blog.titulo}`}>
                                            <img src={blog.ruta} alt={blog.titulo} style={{width:"100%"}} />
                                            <p style={{color:"black"}}>
                                                {blog.tituloExterno} 
                                            </p>
                                        </a>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className='invisible'>
                        <div className='contenedor_2 fondo_1 blog_2'>
                            <p className='titulo_7 ' style={{ textAlign:"center" ,fontSize:"40px"}}>
                                También te puede interesar
                            </p>
                            <div class="carousel carousel-slider carrusel_blog">
                                <div class="carousel-item center">
                                    <a href="/blog">
                                        <img src={img1} className='imagen_carrusel_blog'></img>                                
                                        <div>
                                            <p style={{textAlign:"center", color:"black"}}>
                                                CAAVLOWEEN 2021 
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item center" >
                                    <a href="/blog">
                                        <img src={img1} className='imagen_carrusel_blog'></img>                                
                                        <div>
                                            <p style={{textAlign:"center", color:"black"}}>
                                                CAAVLOWEEN 2021 
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div class="carousel-item center" >
                                    <a href="/blog">
                                        <img src={img1} className='imagen_carrusel_blog'></img>                                
                                        <div>
                                            <p style={{textAlign:"center", color:"black"}}>
                                                CAAVLOWEEN 2021 
                                            </p>
                                        </div>
                                    </a>
                                </div>                     
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    );
}

export default compose(
    firestoreConnect(props => [ 
        { 
            collection: 'blog',
            where: [
                "titulo", "==", props.match.params.titulo
            ]
        } 
    ]),
    connect(({ firestore: { ordered }}, props ) => ({
        blog: ordered.blog && ordered.blog[0]
    }))
)(Blog)