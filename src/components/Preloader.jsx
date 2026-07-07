import { useState, useEffect } from "react";
import { motion } from "motion/react";

/**
 * Premium Preloader component inspired by Framer's Animation Loader.
 * Animates a counter from 0 to 100% and a progress bar, followed by a liquid peel-up reveal.
 * 
 * @param {Object} props
 * @param {string} props.brandName - The brand name displayed at the top (default: "rehan®")
 * @param {number} props.duration - Duration of the count animation in seconds (default: 3)
 * @param {string} props.backgroundColor - Hex or Tailwind class for background (default: "#040D1F")
 * @param {string} props.textColor - Text color (default: "#f8fafc")
 * @param {string} props.accentColor - Accent color for the progress bar (default: "#10b981")
 * @param {function} props.onComplete - Callback triggered when the exit animation finishes
 */
export default function Preloader({
  brandName = "rehan®",
  duration = 3,
  backgroundColor = "#040D1F",
  textColor = "#f8fafc",
  accentColor = "#10b981", // Emerald-500 matching the site's accent
  onComplete,
}) {
  const [count, setCount] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Scroll lock when preloader mounts
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    // Standard high-performance linear/eased counter
    const startTime = performance.now();
    const durationMs = duration * 1000;

    let frameId;

    const updateCounter = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      
      // Custom cubic-bezier-like easing for speed variation
      // Starts fast, slows down towards the end for premium feel
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Cubic easeOut

      const currentCount = Math.round(easeProgress * 100);
      setCount(currentCount);

      if (progress < 1) {
        frameId = requestAnimationFrame(updateCounter);
      } else {
        // Hold 100% for 300ms before starting exit transition
        setTimeout(() => {
          setIsExiting(true);
        }, 300);
      }
    };

    frameId = requestAnimationFrame(updateCounter);

    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [duration]);

  return (
    <div 
      className="fixed inset-0 z-[9999] pointer-events-none"
      style={{ overflow: "hidden" }}
    >
      <motion.div
        className="absolute inset-0 flex flex-col justify-between p-8 md:p-16 pointer-events-auto"
        initial={{ 
          y: 0, 
          borderBottomLeftRadius: "0px", 
          borderBottomRightRadius: "0px" 
        }}
        animate={isExiting ? {
          y: "-100%",
          borderBottomLeftRadius: "30vh",
          borderBottomRightRadius: "30vh",
        } : {
          y: 0,
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
        }}
        transition={{
          duration: 0.85,
          ease: [0.76, 0, 0.24, 1], // Premium easing
        }}
        onAnimationComplete={() => {
          // If we completed the exit animation (y is at -100%)
          if (isExiting) {
            // Restore scroll
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            if (onComplete) onComplete();
          }
        }}
        style={{ 
          backgroundColor,
          color: textColor,
          transformOrigin: "bottom center",
          willChange: "transform, border-radius"
        }}
      >
        {/* Top Section */}
        <div className="flex justify-between items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light tracking-tight select-none font-sans"
          >
            {brandName}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-xs md:text-sm font-mono text-slate-500 uppercase tracking-widest select-none"
          >
            portfolio &copy; 2026
          </motion.div>
        </div>

        {/* Middle Section (Sleek Progress Bar) */}
        <div className="w-full flex flex-col items-start gap-4">
          <div className="w-full h-[1px] bg-slate-800/80 relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 h-full"
              style={{ 
                backgroundColor: accentColor,
                width: `${count}%`,
                boxShadow: `0 0 10px ${accentColor}80` 
              }}
              transition={{ type: "tween", ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Bottom Section (Gigantic Elegant Counter) */}
        <div className="flex justify-between items-end w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block text-xs md:text-sm text-slate-500 tracking-wide max-w-xs text-left"
          >
            Crafting scalable architecture and high-performance user interfaces.
          </motion.div>
          
          <div className="flex items-baseline font-light select-none tracking-tighter">
            <motion.span 
              className="text-[20vw] md:text-[14vw] lg:text-[12vw] leading-[0.8] select-none"
              style={{
                fontFamily: '"Geist Variable", "Inter", sans-serif',
                fontWeight: 200,
              }}
            >
              {String(count).padStart(2, "0")}
            </motion.span>
            <span 
              className="text-[6vw] md:text-[4vw] lg:text-[3vw] ml-2 leading-[0.8]"
              style={{ color: accentColor }}
            >
              %
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
