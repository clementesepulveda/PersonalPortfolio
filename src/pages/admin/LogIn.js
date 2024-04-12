
import React, { useRef, useState } from "react"
import { useAuth } from "../../contexts/AuthContext"
import { useNavigate  } from "react-router-dom"

export default function LogIn() {
  const navigate = useNavigate();

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/admin")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="flex justify-center bg-gren-500">
        <div className="dark:bg-slate-700 shadow-2xl border rounded-xl border-slate-200 dark:border-slate-500 p-6 m-6 w-screen max-w-xl">
          
          <h2 className="text-center mb-4 text-3xl">Log In</h2>

          {error && <div className="bg-red-400 rounded p-2 mb-4 text-center">{error}</div>}

          <form onSubmit={handleSubmit} className="flex flex-col">
              <label>Email</label>
              <input type="email" ref={emailRef} className="text-black mt-2 rounded border p-1" required />

              <label className="mt-4">Password</label>
              <input type="password" ref={passwordRef} className="text-black mt-2 rounded border p-1" required />

            <button disabled={loading} className="bg-slate-800 text-white w-full rounded p-2 mt-8" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  )
}