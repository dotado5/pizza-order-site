import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

function Modal({ showModal, setShowModal }) {
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    hModal: {
      y: "-100vh",
      opacity: 0,
    },
    vModal: {
      y: "200px",
      opacity: 1,
      transition: { delay: 0.5 },
    },
    exit: {
      y: "-100vh",
      transition: { ease: "easeInOut" },
    },
  }

  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="modal"
            variants={backdrop}
            initial="hModal"
            animate="vModal"
            exit="exit"
          >
            <p>Want to make another order?</p>
            <Link to={"/"}>
              <button onClick={() => setShowModal(false)}>Re-Order</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
