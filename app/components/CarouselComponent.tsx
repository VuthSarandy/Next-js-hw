import {Carousel} from "flowbite-react";

const CarouselComponent = () => {
    return (
        <>
            <section className="h-[90vh]">
                <Carousel>
                    <img
                        src="./assets/slide3.png"
                        alt="..."/>
                    <img
                        src="./assets/slide2.jpg"
                        alt="..."/>
                    <img
                        src="./assets/slide1.png"
                        alt="..."/>
                </Carousel>
            </section>
        </>
    )
}
export default CarouselComponent;