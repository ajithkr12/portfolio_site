
import './Styles.css';
import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const links = [
  { name: "Home", to: "#home", id: 1 },
  { name: "About", to: "#about", id: 2 },
  { name: "Services", to: "#services", id: 3 },
  { name: "Portfolio", to: "#portfolio", id: 4 },
  { name: "Contact", to: "#contact", id: 5 }
];

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: { opacity: 1 }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1
    }
  }
};

export default function Navigation() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <div className="main">
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
          > <motion.h1 href="#home" className="logo">Portfolio</motion.h1>
            <motion.div
              className="container"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
             
              {links.map(({ name, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={itemVariants}
                >
                  {name}
                </motion.a>
              ))}
            </motion.div>
                       <motion.div className="follow">
           <a href="#" class="fab fa-facebook-f"/>
              <a href="#" class="fab fa-twitter"/>
              <a href="#" class="fab fa-instagram"/>
              <a href="#" class="fab fa-linkedin"/>
             <a href="#" class="fab fa-github"/>
            </motion.div> 
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        {/* <button onClick={cycleOpen} className="fas fa-bars">{open ? "Close" : "Open"}</button> */}
        <button onClick={cycleOpen} className="fas fa-bars"></button>

      </div>
    </div>
  );
}
























