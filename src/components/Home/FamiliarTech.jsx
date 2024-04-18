import React from 'react'

export default function FamiliarTech() {
    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Technology I'm familiar with</h1>
            <h3 >Front End</h3>

            <ul>
                <li>React</li>
                <li>Svelte</li>
                <li>Vue</li>
                <li>Html</li>
            </ul>

            <h3>Back End</h3>

            <ul>
                <li>Koa</li>
                <li>Express.js</li>
                <li>FastAPI</li>
            </ul>

            <h3>Programming Languages</h3>

            <ul>
                <li>Python</li>
                <li>JavaScript</li>
                <li>C#</li>
                <li>C</li>
                <li>Bash</li>
            </ul>

            <h3>Other</h3>

            <ul>
                <li>a</li>
                <li>b</li>
                <li>c</li>
            </ul>

            <style>{`
        h3 {
          padding: 0.5rem;
          font-size: 2rem;
          line-height: 1.75rem;
        }
      `}</style>
        </div>
    )
}
