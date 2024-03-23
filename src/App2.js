import './App.css';
import React, { useRef, useEffect } from 'react'
import { visualRange, protectedRange, boidSize, avoidfactor, minSpeed, maxSpeed, matchingfactor, centeringFactor } from './boidConst.js'
import { Boid } from './boid.js'

function App() {
  const width = 1000;
  const height = 500;

  const canvasRef = useRef(null);

  const boids = []
  boids.push(
    new Boid(
      width / 3 + 50,
      height / 2 - 15,

      2,
      0,
    )
  )
  boids.push(
    new Boid(
      2 * width / 3 - 100,
      height / 2 + 16,

      -1,
      0,
    )
  )
  for (let i = 0; i < 50; i++) {
    boids.push(
      new Boid(
        Math.floor(Math.random() * width),
        Math.floor(Math.random() * height),

        Math.floor(Math.random() * 10) - 5,
        Math.floor(Math.random() * 10) - 5,
      )
    )
  }

  function moveBoids() {
    boids.forEach(boid => {
      boidSeparation(boid)
      boidAlignment(boid)
      boidCohesion(boid)

      // TODO Slow step! Lookup the "alpha max plus beta min" algorithm
      const speed = Math.sqrt(boid.vx*boid.vx + boid.vy*boid.vy)
      if (speed < minSpeed) {
        boid.vx = (boid.vx/speed)*minSpeed
        boid.vy = (boid.vy/speed)*minSpeed
      }
      if (speed > maxSpeed) {
        boid.vx = (boid.vx/speed)*maxSpeed
        boid.vy = (boid.vy/speed)*maxSpeed
      }

      boid.x = boid.x + boid.vx
      boid.x = ((boid.x % width) + width) % width;
      
      boid.y = boid.y + boid.vy
      boid.y = ((boid.y % height) + height) % height;

      // boid.y = (boid.y + boid.vy) % height)
    })
  }

  function boidSeparation(boid) {
    let close_dx = 0
    let close_dy = 0

    boids.forEach(otherboid => {
      if (boid !== otherboid) {
        if (Math.abs(boid.x - otherboid.x) < protectedRange && Math.abs(boid.y - otherboid.y) < protectedRange) {
          close_dx += boid.x - otherboid.x
          close_dy += boid.y - otherboid.y
        }
      }
    })

    boid.vx += close_dx * avoidfactor;
    boid.vy += close_dy * avoidfactor;
  }

  function boidAlignment(boid) {
    let xvel_avg = 0
    let yvel_avg = 0
    let neighboring_boids = 0
    
    boids.forEach(otherboid => {
      if (boid !== otherboid) {
        if (Math.abs(boid.x - otherboid.x) < visualRange && Math.abs(boid.y - otherboid.y) < visualRange) {
          xvel_avg += otherboid.vx
          yvel_avg += otherboid.vy
          neighboring_boids += 1
        }
      }
    })
     
    if (neighboring_boids >0) {
      boid.vx += (xvel_avg - boid.vx)*matchingfactor
      boid.vy += (yvel_avg - boid.vx)*matchingfactor
    }
  }

  function boidCohesion(boid) {
    let xpos_avg = 0
    let ypos_avg = 0
    let neighboring_boids = 0
    
    boids.forEach(otherboid => {
      if (boid !== otherboid) {
        if (Math.abs(boid.x - otherboid.x) < visualRange && Math.abs(boid.y - otherboid.y) < visualRange) {
          xpos_avg += otherboid.x
          ypos_avg += otherboid.y
          neighboring_boids += 1
        }
      }
    })
     
    if (neighboring_boids >0) {
      xpos_avg = xpos_avg/neighboring_boids
      ypos_avg = ypos_avg/neighboring_boids
  
      boid.vx += (xpos_avg - boid.x)*centeringFactor
      boid.vy += (ypos_avg - boid.y)*centeringFactor
    }
  }

  function drawBoids() {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    boids.forEach(boid => {
      const x = boid.x;
      const y = boid.y;

      // ctx.beginPath();
      // ctx.arc(x, y, visualRange, 0, 2 * Math.PI);
      // ctx.stroke();

      // ctx.beginPath();
      // ctx.arc(x, y, protectedRange, 0, 2 * Math.PI);
      // ctx.fillStyle = "rgba(255, 0, 0, 0.3)";
      // ctx.fill();
      // ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, boidSize, 0, 2 * Math.PI);
      ctx.fillStyle = 'black';
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + boid.vx * 7, y + boid.vy * 7);
      ctx.stroke();
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      moveBoids();
      drawBoids();
    }, 16.7);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <br />
      <br />
      <canvas ref={canvasRef} width={width} height={height} ></canvas>
    </div>
  );
}

export default App;
