import { useEffect, useRef } from "react";

const MovingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Initialization Section ---

    // Initialize canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Exponential wave function
    const exponentialWave = (
      x: number,
      time: number,
      frequency: number,
      amplitude: number
    ) => {
      const t = x * frequency + time;
      return amplitude * Math.exp(-0.001 * t) * Math.sin(t);
    };

    const lineTypes = [
      {
        amplitude: 70,
        frequency: 0.002,
        opacity: 0.7,
        speed: 50,
        color: "rgba(255, 223, 88, 0.7)",
        xOffset: 0,
      },
      {
        amplitude: 80,
        frequency: 0.003,
        opacity: 0.7,
        speed: 40,
        color: "rgba(238, 130, 238, 0.7)",
        xOffset: 0,
      },
      {
        amplitude: 88,
        frequency: 0.0015,
        opacity: 0.7,
        speed: 60,
        color: "rgba(255, 255, 255, 0.7)",
        xOffset: 0,
      },
      {
        amplitude: 90,
        frequency: 0.0025,
        opacity: 0.7,
        speed: 30,
        color: "rgba(0, 255, 255, 0.7)",
        xOffset: 0,
      },
      {
        amplitude: 70,
        frequency: 0.0035,
        opacity: 0.7,
        speed: 20,
        color: "rgba(64, 224, 208, 0.7)",
        xOffset: 0,
      },
    ];

    // Vertical positions
    const verticalPositions = [
      canvas.height / 2,
      canvas.height / 2 - 200,
      canvas.height / 2 + 400,
      canvas.height / 2 + 200,
      canvas.height / 2 - 400,
    ];

    const updateVerticalPositions = () => {
      verticalPositions[0] = canvas.height / 2;
      verticalPositions[1] = canvas.height / 2 - 200;
      verticalPositions[2] = canvas.height / 2 + 400;
      verticalPositions[3] = canvas.height / 2 + 200;
      verticalPositions[4] = canvas.height / 2 - 400;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      updateVerticalPositions();
    };

    // --- Animation Section ---

    const drawSquigglyLines = () => {
      let time = 0;

      const animate = () => {
        if (!canvas || !ctx) return;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        verticalPositions.forEach((verticalPosition, index) => {
          const line = lineTypes[index];
          ctx.beginPath();

          let startX = 20;
          let startY =
            verticalPosition +
            exponentialWave(startX, time, line.frequency, line.amplitude);
          ctx.moveTo(startX, startY);

          for (let x = startX; x < canvas.width - 20; x++) {
            const yOffset = exponentialWave(
              x,
              time,
              line.frequency,
              line.amplitude
            );
            ctx.lineTo(x, verticalPosition + yOffset);
          }

          ctx.strokeStyle = line.color;
          ctx.lineWidth = 3;
          ctx.stroke();

          line.xOffset += line.speed;
          if (line.xOffset > canvas.width) {
            line.xOffset = 0;
          }
        });

        time += 0.0005;
        requestAnimationFrame(animate);
      };

      animate();
    };

    // --- Execution & Cleanup ---

    drawSquigglyLines();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="moving-background"></canvas>;
};

export default MovingBackground;
