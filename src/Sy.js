/**
 * Created by Administrator on 2017/7/17.
 */
import React, {Component} from 'react';


class Sy extends Component {
    render() {
        return (
            <div className="Sy">
                <div id="myCarousel" className="carousel slide sy_carousel">
                    <ol className="carousel-indicators" id="sy_carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active sy_active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <img src="/wp-content/uploads/2014/07/slide1.png" alt="First slide" />
                        </div>
                        <div className="item">
                            <img src="/wp-content/uploads/2014/07/slide2.png" alt="Second slide" />
                        </div>
                        <div className="item">
                            <img src="/wp-content/uploads/2014/07/slide3.png" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control left" href="#myCarousel"
                       data-slide="prev">&lsaquo;
                    </a>
                    <a className="carousel-control right" href="#myCarousel"
                       data-slide="next">&rsaquo;
                    </a>
                </div>


            </div>
        )
    }
}

export default Sy;