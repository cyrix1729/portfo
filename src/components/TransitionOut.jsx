import { motion } from "framer-motion";
const TransitionOut = () => {
  const calculateRandomBlockDelay = (rowIndex, totalRows) => {
    const blockDelay = Math.random() * 0.5;
    const rowDelay = (totalRows - rowIndex - 1) * 0.05;
    return blockDelay + rowDelay;
  };
  return (
    <>
      <div className="blocks-container transition-out">
{Array.from({ length: 10 }).map((_, rowIndex) => (
  <div className="row" key={rowIndex}>
    {Array.from({ length: 11 }).map((_, blockIndex) => (
      <motion.div
        key={blockIndex}
        className="block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay: calculateRandomBlockDelay(rowIndex, 10),
        }}
      ></motion.div>
    ))}
  </div>
))}
</div>
  </>
);
};

export default TransitionOut;
