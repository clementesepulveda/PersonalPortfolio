import React from 'react'
import './SpeechBubble.scss'

export default function SpeechBubble({ text }) {
    return (
        <blockquote className="speech-bubble px-2 py-1 rounded-md">
            <p>{ text }</p>
        </blockquote>
    )
}
