import React from "react";
// import PropTypes from "prop-types";
// import circle from "../../images/circle.png"
import ceramics from "../../images/ceramic2.jpg"
import "./Title.css";


// import { motion} from 'framer-motion/dist/framer-motion'



function Title(props) {
  const { name, leadText } = props;
  const {move, setMove} = React.useState(false)

  return (
    <div className="container-fluid title">
      
      
      <div className="right-side">
      <div className="circle" ></div>
        <div className="text">
            <div id="wordident"><div>Floor Tiles  </div> <div>  Wall Tiles  </div> <div>  Sanitaryware  </div> </div>
            <h1 >Shri Akshara Tile World</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            {/* <motion.div 
            animate={{ x: move ? 200 : -200 }}
            transition = {{ delay: 2 }}
            onClick = {() => {
              setMove(!move);
            }}
            className="morph"> */}
              {/* <div className="glass"> */}

              <h4 className="text-center text-dark name" >
              See our <span id="red">Products</span> &rarr;
              </h4>
              
              

              
              {/* </div> */}
            {/* </motion.div> */}
        </div>
      </div>
      <div className="circle2" ></div>
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
