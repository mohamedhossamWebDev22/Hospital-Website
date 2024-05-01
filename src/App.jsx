import NavBarComp from "./components/navBarComp";
import SCard from "./components/SCard";
import DCard from "./components/DCard";

import img1 from "./assets/images/1.png";

import icon1 from "./assets/icons/1.svg";
import icon2 from "./assets/icons/2.svg";
import icon3 from "./assets/icons/3.svg";

import doc1 from "./assets/images/doctors/1.jpeg";
import doc2 from "./assets/images/doctors/2.jpeg";
import doc3 from "./assets/images/doctors/3.jpeg";
import doc4 from "./assets/images/doctors/4.jpeg";


import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

AOS.init({
  duration: 1200,
});



function App() {
  return (
    <>
      <NavBarComp />

      {/* landing page section */}
      <div id="home" className="first bg-primary py-5">
        <div className="py-5 w-100">
          <div className="text-light">
            <div className="row p-0 m-0">
              <div className="col-12 col-sm-8 px-5 text-center">
                <div className="display-1 h1">
                  The Hospital <i class="fa-regular fa-hospital"></i>
                </div>
                <hr />
                <p className="lead mt-5 pt-5">
                  Step into our sanctuary of healing where compassion,
                  expertise, and innovation converge to create a haven of hope
                  and wellness at our state-of-the-art hospital.
                </p>

                <div className="my-5 pt-1 display-3 px-5 mx-5">
                  <a href="#about" className="text-light">
                    <i class="fa-solid fa-circle-arrow-down"></i>
                  </a>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <img id="imgSSS" className="w-100" src={img1} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About section */}
      <div data-aos="fade-in" id="about" className="second py-5 bg-primary-light">
        <h1 className="display-3 text-center pt-5 pb-3 text-decoration-underline">
          About Us
        </h1>
        <p className="mt-5 mb-5 mx-5 px-5 text-center">
          Our hospital is a trusted place where you can find excellent medical
          care supported by state-of-the-art facilities and a highly skilled
          team of healthcare professionals. We are constantly striving to
          improve our services and adapt to the changing needs of our patients.
          Our commitment to innovation and patient-centered care ensures that
          you receive personalized treatment in a safe and nurturing
          environment. Your well-being is our top priority, and we are dedicated
          to providing you with the best possible care to promote healing and
          recovery.
        </p>
      </div>

      {/* services section */}
      <div data-aos="fade-in" id="services">
        <div className="bg-primary py-5 text-light">
          <div className="container">
            <h1 className="display-3 text-center text-decoration-underline">
              Our Services
            </h1>

            <div className="row pt-5 my-3">
              <div className="col-sm-4 col-12">
                <SCard title="The Best Doctors" src={icon1} />
              </div>
              <div className="col-sm-4 col-12">
                <SCard title="All The Staff Will Care" src={icon2} />
              </div>
              <div className="col-sm-4 col-12">
                <SCard title="Modern Technology" src={icon3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div data-aos="fade-in" id="doctors">
        <div className="bg-primary-light text-center">
          <div className="container">
            <div className="py-5">
              <h1 className="my-5 display-3 text-decoration-underline">
                Our Doctors
              </h1>

              <div className="row pt-5 my-3">
                <div className="col-sm-3 col-6">
                  <DCard title="Sameh Ahmed" src={doc1} />
                </div>
                <div className="col-sm-3 col-6">
                  <DCard title="Ali Sherif" src={doc2} />
                </div>
                <div className="col-sm-3 col-6">
                  <DCard title="Refaat Ismaiel" src={doc3} />
                </div>
                <div className="col-sm-3 col-6">
                  <DCard title="Badr Mohamed" src={doc4} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last Section */}
      <div data-aos="fade-in" id="MS" className="bg-primary py-3">
        <div className="container my-4">
          <div className="text-center py-3">
            <div className="mt-5">
              <h1 className="text-decoration-underline display-3">
                Medical Specialties
              </h1>
              <p className="h3 mt-5 font-weight-light">
                EveryThing You Will Find <a className="M text-light">Here</a>
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="pt-5 bg-primary">
        <div className="bg-primary mt-5">
          <div className="text-center">
            <hr />
            <h1 className="display-2">
              The Hospital <i class="fa-regular fa-hospital"></i>
            </h1>

            <p className="lead m-0 py-5">
              Made By <a className="text-light M">Mohamed Hossam</a>
            </p>
          </div>
        </div>
      </footer>
    
    </>
  );
}

export default App;
