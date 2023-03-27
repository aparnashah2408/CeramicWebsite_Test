import React from "react";
// import PropTypes from "prop-types";
// import circle from "../../images/circle.png"
import ceramics from "../../images/ceramics.jpg"
import "./Title.css";
import { motion} from 'framer-motion/dist/framer-motion'



function Title(props) {
  const { name, leadText } = props;
  const {move, setMove} = React.useState(false)

  return (
    <div className="container-fluid title">
      
      
      <div className="right-side">
        <div className="text">
            <p id="wordident">Tiles  Sanitaryware Doors</p>
            <h1 >Ceramics Name</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <motion.div 
            animate={{ x: move ? 200 : -200 }}
            // transition = {{ delay: 2 }}
            onClick = {() => {
              setMove(!move);
            }}
            className="morph">
              {/* <div className="glass"> */}

              {/* <h4 className="text-center text-dark name" > */}
              {/* Hi I am, <span className="text-warning font1">Aparna Shah.</span>  */}
              {/* <br/> */}
              See our <span className="text-warning font1">Products</span>
              {/* </h4> */}
              {/* </div> */}
            </motion.div>
        </div>
      </div>
      <div className="ceramicsimg">
      <img src={ceramics} ></img>
      </div>

    </div>
  );
}


{/* Title.propTypes = {
  name: PropTypes.string.isRequired,
}; */}

export default Title;
