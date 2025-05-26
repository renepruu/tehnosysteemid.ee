import { useEffect, useRef } from "react";

const MovingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const initialResizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Define line types with slight variations (except opacity)
    const lineTypes = [
      {
        amplitude: 70,
        frequency: 0.002,
        opacity: 0.7,
        speed: 50,
        color: "rgba(255, 223, 88, 0.7)",
        xOffset: 0,
      }, // Line 1
      {
        amplitude: 80,
        frequency: 0.003,
        opacity: 0.7,
        speed: 40,
        color: "rgba(238, 130, 238, 0.7)",
        xOffset: 0,
      }, // Line 2
      {
        amplitude: 88,
        frequency: 0.0015,
        opacity: 0.7,
        speed: 60,
        color: "rgba(255, 255, 255, 0.7)",
        xOffset: 0,
      }, // Line 3
      {
        amplitude: 90,
        frequency: 0.0025,
        opacity: 0.7,
        speed: 30,
        color: "rgba(0, 255, 255, 0.7)",
        xOffset: 0,
      }, // Line 4
      {
        amplitude: 70,
        frequency: 0.0035,
        opacity: 0.7,
        speed: 20,
        color: "rgba(64, 224, 208, 0.7)",
        xOffset: 0,
      }, // Line 6
    ];

    // Define vertical positions for the lines
    const verticalPositions = [
      canvas.height / 2, // Original line
      canvas.height / 2 - 200, // Line 5
      canvas.height / 2 + 400, // Line 4
      canvas.height / 2 + 200, // Line 5
      canvas.height / 2 - 400, // Line 5
    ];

    // Ensure lines are recalculated during resize
    const updateVerticalPositions = () => {
      verticalPositions[0] = canvas.height / 2;
      verticalPositions[1] = canvas.height / 2 - 200;
      verticalPositions[2] = canvas.height / 2 + 400;
      verticalPositions[3] = canvas.height / 2 + 200;
      verticalPositions[4] = canvas.height / 2 - 400;
    };

    // Resize logic
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateVerticalPositions();
    };

    window.addEventListener("resize", () => {
      initialResizeCanvas();
    });

    // Draw multiple squiggly lines
    const drawSquigglyLines = () => {
      let time = 0; // For animation

      const animate = () => {
        if (!canvas || !ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw each line
        verticalPositions.forEach((verticalPosition, index) => {
          const line = lineTypes[index]; // Get the line type for this line
          ctx.beginPath();

          let startX = 20;
          let startY =
            verticalPosition +
            exponentialWave(startX, time, line.frequency, line.amplitude); // Use exponential function
          ctx.moveTo(startX, startY);

          // Draw the line from 30px to (canvas.width - 30px)
          for (let x = startX; x < canvas.width - 20; x++) {
            const yOffset = exponentialWave(
              x,
              time,
              line.frequency,
              line.amplitude
            ); // Use exponential function
            ctx.lineTo(x, verticalPosition + yOffset);
          }

          // Set line style
          ctx.strokeStyle = line.color; // Use the line's color
          ctx.lineWidth = 3; // Fixed line width for consistency
          ctx.stroke();

          // Move the line horizontally
          line.xOffset += line.speed;

          // Reset xOffset if it exceeds canvas width
          if (line.xOffset > canvas.width) {
            line.xOffset = 0; // Reset to the beginning of the canvas
          }
        });

        time += 0.0005; // Increment time for animation
        requestAnimationFrame(animate);
      };

      // Start the animation loop
      animate();
    };

    // Exponential wave function
    const exponentialWave = (
      x: number,
      time: number,
      frequency: number,
      amplitude: number
    ) => {
      const t = x * frequency + time;
      return amplitude * Math.exp(-0.001 * t) * Math.sin(t); // Exponential decay with sine wave
    };

    // Initialize
    resizeCanvas();
    drawSquigglyLines();

    // Handle window resize
    window.addEventListener("resize", resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="moving-background"></canvas>;
};

export default MovingBackground;
