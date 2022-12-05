import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { containerVariant } from "./Home"

const Order = ({ pizza, setShowModal }) => {
  const [showOrder, setShowOrder] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 5000)
  }, setShowModal)

  return (
    <motion.div
      className="container order"
      variants={containerVariant}
      exit="exit"
    >
      <AnimatePresence>
        {showOrder && (
          <motion.h2 exit={{ y: -1000 }}>Thank you for your order :)</motion.h2>
        )}
      </AnimatePresence>

      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}
    </motion.div>
  )
}

export default Order
