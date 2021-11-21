import React from 'react';

//Constructeur

const Car = ({ name, price, Button, handleClick }) => {

    //console.log(props.children);
    //console.log(props);


    return (
        <div className="col">
            <div className="card h-100">

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price} DT</p>
                    <button style={{ background: "#008CBA", fontSize: "20px", color: "white" }} onClick={() =>
                        handleClick(name)}>Click</button>
                </div>



            </div>


        </div >



    )

}


export default Car;