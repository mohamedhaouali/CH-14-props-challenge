import React from 'react';
import Car from '../Car/Car';
import image from "../../image/mercdes.jpg";
import image1 from "../../image/ford.jpg";
import image2 from "../../image/Citroen.jpg";
import image3 from "../../image/Peugeot.jpg";




function Cars() {

    //Button alert
    const handleClick = (name) => {
        alert(`You have to pay  to buy ${name}`);
    }


    return (

        <div className="row row-cols-1 row-cols-md-3 g-4">

            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={image} className="card-img-top" alt="Mercdes"
                            width="5px" />
                        <Car

                            name="Mercedes"
                            price="200 000"
                            handleClick={handleClick}


                        >

                        </Car>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={image1} className="card-img-top" alt="ford"
                            width="5px" />
                        <Car
                            name="Ford"
                            price="100 000"
                            handleClick={handleClick}

                        >

                        </Car>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={image2} className="card-img-top" alt="ford"
                            width="5px" />
                        <Car
                            name="Citroen"
                            price="100 000"
                            handleClick={handleClick}
                        >

                        </Car>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="card h-100">
                    <div className="card-body">
                        <img src={image3} className="card-img-top" alt="peugot"
                            width="5px" />
                        <Car
                            name="Peugot"
                            price="200 000"
                            handleClick={handleClick}

                        >

                        </Car>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Cars;
