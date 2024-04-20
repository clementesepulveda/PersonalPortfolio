import React from 'react'
import FamiliarTechList from '../FamiliarTechList'

export default function FamiliarTech() {

    const frontendTech = [
        'react', 'svelte', 'vue',
        'html', 'tailwind'
    ]

    const backendTech = [
        'fast api', 'koa', 'aws',
        'firebase', 'node'
    ]

    const programmingLanguages = [
        'python', 'javascript', 'C sharp', 'C',
    ]

    const otherTech = [
        'unity', 'echarts', 'microsoft graph api', 
    ]

    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold'>Technology I'm familiar with</h1>

            <h3 className='pt-8 pb-4'>Front End</h3>
            <FamiliarTechList items={frontendTech}/>

            <h3 className='pt-16 pb-4'>Back End</h3>
            <FamiliarTechList items={backendTech}/>

            <h3 className='pt-16 pb-4'>Programming Languages</h3>
            <FamiliarTechList items={programmingLanguages}/>

            <h3 className='pt-16 pb-4'>Other</h3>
            <FamiliarTechList items={otherTech}/>

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
