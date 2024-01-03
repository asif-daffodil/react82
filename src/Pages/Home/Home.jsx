import Myslide from "../../Components/Home/Myslide/Myslide";
import OurTeam from "../../Components/Home/OurTeam/OurTeam";
import Menubar from "../../Components/Menubar/Menubar";

const Home = () => {
    const ceoDes = "CEO Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
    const chairmanDes = "Chairman Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
    const mdDes = "MD Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.";
    return (
        <div>
            <Menubar />
            <Myslide />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 display-6 text-center my-5 ">
                        Our Team
                    </div>
                    <div className="col-md-4">
                        <OurTeam title="CEO" des={ceoDes} img="ceo.jpg" />
                    </div>
                    <div className="col-md-4">
                        <OurTeam title="Chairman" des={chairmanDes} img="ceo.jpg" />
                    </div>
                    <div className="col-md-4">
                        <OurTeam title="MD" des={mdDes} img="ceo.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;