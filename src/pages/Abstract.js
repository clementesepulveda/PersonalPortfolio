// import './App.css';
import React, { useRef, useEffect } from 'react'

function App() {
  const width = 1000;
  const height = 500;
  const minDistance = 50
  const maxDistance = 180
  const minVel = 2
  const maxVel = 3

  const canvasRef = useRef(null);
  let mousePos = [0, 0];
  let circles = [];
  // circles.push([
  //   100,100,0,0
  // ])
  for (let i = 0; i < 50; i++) {
    circles.push([
      Math.floor(Math.random() * width),
      Math.floor(Math.random() * height),
      (-1)**(Math.floor(Math.random()*2+1)) * Math.floor(Math.random() * maxVel) + minVel,
      (-1)**(Math.floor(Math.random()*2+1)) * Math.floor(Math.random() * maxVel) + minVel,
    ])
  }

  function modulo(x,n) {
    return ((x % n) + n) % n;
  }
  function moveCircles() {
    circles.forEach(circle => {
      circle[0] = modulo(circle[0] + circle[2], width+50)
      circle[1] = modulo(circle[1] + circle[3], height+50)
    })
  }

  function drawCircles() {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    circles.forEach(circle => {
      // WITH MOUSE
      ctx.beginPath();
      ctx.arc(circle[0], circle[1], 5, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(0, 0, 0, 1)";
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(circle[0], circle[1]);
      ctx.lineTo(mousePos[0], mousePos[1]);
      const distance = Math.sqrt((mousePos[0]-circle[0])**2 + (mousePos[1]-circle[1])**2)
      const opacity = 1/(minDistance-maxDistance) * distance - maxDistance/(minDistance-maxDistance)
      ctx.strokeStyle = `rgba(0,0,0,${opacity})`;
      ctx.stroke();

      // WITH OTHER CIRCLES
      circles.forEach(circle2 => {
        if (circle !== circle2) {
          ctx.beginPath();
          ctx.moveTo(circle[0], circle[1]);
          ctx.lineTo(circle2[0], circle2[1]);
          const distance = Math.sqrt((circle2[0]-circle[0])**2 + (circle2[1]-circle[1])**2)
          const opacity = 1/(minDistance-maxDistance) * distance - maxDistance/(minDistance-maxDistance)
          ctx.strokeStyle = `rgba(0,0,0,${opacity})`;
          ctx.stroke();
        }
      })
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      moveCircles();
      drawCircles();
    }, 16.7);
  // }, 100);
    return () => clearInterval(interval);
  }, []);

  function updateMousePosition(e) {
    var pos = getMousePos(e);
    mousePos = [pos.x, pos.y];
  }
  
  window.addEventListener('mousemove', updateMousePosition, false);
  function getMousePos(evt) {
    const canvas = canvasRef.current
    if (canvas == null) { 
      return {
        x: 0,
        y: 0
      }
    }

    var rect = canvas.getBoundingClientRect();
    if (rect) {

      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    }
    return {
      x: 0,
      y: 0
    }
  }


  return (
    <div className="App">
      <br />
      <br />
      <canvas ref={canvasRef} width={width} height={height} ></canvas>
    </div>
  );
}

export default App;
