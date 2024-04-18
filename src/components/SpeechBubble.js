import React from 'react'
import './SpeechBubble.scss'

export default function SpeechBubble({ text }) {
    return (
        <blockquote className="speech-bubble">
            <p>{ text }</p>
        </blockquote>
    )
}
