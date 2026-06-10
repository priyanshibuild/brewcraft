import { useEffect, useRef } from "react";

interface Bean {
  x: number;
  y: number;
  size: number; // radius of the bean
  speedY: number;
  driftSpeed: number;
  driftRange: number;
  driftOffset: number;
  angle: number;
  rotationSpeed: number;
  opacity: number;
}

export default function CanvasBeans() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width;
    let height = canvas.height;

    // Beans configuration
    const numBeans = 80;
    const beans: Bean[] = [];

    const createBean = (startY: number): Bean => {
      const size = Math.random() * 8 + 4; // size range: 4 to 12px
      return {
        x: Math.random() * width,
        y: startY,
        size,
        speedY: Math.random() * 0.3 + 0.15, // float slow
        driftSpeed: Math.random() * 0.01 + 0.005,
        driftRange: Math.random() * 15 + 5,
        driftOffset: Math.random() * Math.PI * 2,
        angle: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.005, // rotate slow
        opacity: Math.random() * 0.25 + 0.08, // subtle transclucent
      };
    };

    // Initialize beans across the screen space
    const initBeans = () => {
      beans.length = 0;
      for (let i = 0; i < numBeans; i++) {
        beans.push(createBean(Math.random() * height));
      }
    };

    // Resize handler with ResizeObserver
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        canvas.width = newWidth;
        canvas.height = newHeight;
        width = newWidth;
        height = newHeight;
        initBeans();
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Drawing loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Warm golden glow light source from bottom-center
      const gradient = ctx.createRadialGradient(
        width / 2,
        height,
        0,
        width / 2,
        height,
        height * 0.8
      );
      gradient.addColorStop(0, "rgba(212, 168, 83, 0.06)"); // Brand gold ultra light
      gradient.addColorStop(0.5, "rgba(200, 149, 108, 0.02)"); // Caramel ultra light
      gradient.addColorStop(1, "rgba(13, 5, 0, 0)"); // Transparent black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw and update each bean
      for (let i = 0; i < numBeans; i++) {
        const bean = beans[i];
        if (!bean) continue;

        // Update Position
        bean.y -= bean.speedY;
        bean.angle += bean.rotationSpeed;
        // Float drift drift x
        const curDrift = Math.sin(bean.y * bean.driftSpeed + bean.driftOffset) * bean.driftRange * 0.1;
        const drawX = bean.x + curDrift;

        // Reset if offscreen top
        if (bean.y + bean.size * 2 < 0) {
          beans[i] = createBean(height + bean.size * 2);
          continue;
        }

        // Draw Bean Shape
        ctx.save();
        ctx.translate(drawX, bean.y);
        ctx.rotate(bean.angle);

        // Coffee Bean Outer Oval (Ellipse)
        ctx.beginPath();
        // Drawing an oval bean with height > width
        ctx.ellipse(0, 0, bean.size * 0.65, bean.size, 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(44, 24, 16, ${bean.opacity})`; // #2C1810 with alpha
        ctx.fill();

        // Bean highlight glow edge
        ctx.strokeStyle = `rgba(200, 149, 108, ${bean.opacity * 0.4})`; // Caramel highlight
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // 3. Draw the center crease of the coffee bean (curved central line)
        ctx.beginPath();
        ctx.moveTo(0, -bean.size);
        ctx.quadraticCurveTo(
          bean.size * 0.15, // curve control point
          0,
          0,
          bean.size
        );
        ctx.strokeStyle = `rgba(212, 168, 83, ${bean.opacity * 0.7})`; // Gold vein crease
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial load
    if (containerRef.current) {
      width = containerRef.current.clientWidth;
      height = containerRef.current.clientHeight;
      canvas.width = width;
      canvas.height = height;
      initBeans();
      animate();
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
