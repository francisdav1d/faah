import React, { useState, useEffect } from 'react'
import './login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [btnHover, setBtnHover] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      setMousePos({ x: moveX, y: moveY })
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  function submit(e) {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <>
      <div className="grain-overlay"></div>
      <div 
        aria-hidden="true" 
        className="watermark-r"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        R
      </div>
      
      <header className="fixed top-0 w-full z-50 bg-surface flex justify-between items-center px-8 h-20">
        <div className="font-display text-3xl font-black text-primary-container tracking-tighter">RESONATOR</div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-on-surface-variant font-label uppercase text-xs tracking-widest hover:text-primary transition-colors duration-0" href="#">DISCOVER</a>
          <a className="text-on-surface-variant font-label uppercase text-xs tracking-widest hover:text-primary transition-colors duration-0" href="#">COMMUNITY</a>
          <a className="text-on-surface-variant font-label uppercase text-xs tracking-widest hover:text-primary transition-colors duration-0" href="#">ARCHIVE</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-on-surface hover:text-primary-container transition-colors" data-icon="search">search</button>
          <button className="bg-primary-container text-on-primary-container font-label text-xs font-bold px-5 py-2 hover:bg-primary-fixed transition-colors duration-0">JOIN</button>
          <button className="material-symbols-outlined text-on-surface md:hidden" data-icon="menu">menu</button>
        </div>
      </header>

      <main className="relative z-20 min-h-screen flex items-center justify-center pt-20 pb-12 px-6">
        <div className="w-full max-w-md bg-transparent">
          <div className="mb-12">
            <p className="font-label text-[0.6875rem] uppercase tracking-[0.3em] text-outline mb-4">ACCESS PORTAL</p>
            <h1 className="font-display text-6xl font-bold tracking-tight text-on-surface leading-[0.9]">
                                BACK TO THE <br/>
              <span className="italic text-primary-container">NOISE</span>
            </h1>
          </div>
          
          <form className="space-y-10" onSubmit={submit}>
            <div className="group">
              <label className="block font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant mb-2 group-focus-within:text-primary-container transition-colors" htmlFor="email">Email Address</label>
              <input 
                className="input-underline w-full text-on-surface font-body text-lg" 
                id="email" 
                name="email" 
                placeholder="name@domain.com" 
                required 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            <div className="group">
              <div className="flex justify-between items-end mb-2">
                <label className="block font-label text-[0.6875rem] uppercase tracking-widest text-on-surface-variant group-focus-within:text-primary-container transition-colors" htmlFor="password">Password</label>
                <a className="font-label text-[0.6875rem] uppercase tracking-widest text-primary-container hover:text-on-surface transition-colors" href="#">Forgot Password?</a>
              </div>
              <input 
                className="input-underline w-full text-on-surface font-body text-lg" 
                id="password" 
                name="password" 
                placeholder="��������" 
                required 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-3">
              <input id="remember" name="remember" type="checkbox"/>
              <label className="font-label text-[0.6875rem] uppercase tracking-widest text-secondary cursor-pointer select-none" htmlFor="remember">Remember this device</label>
            </div>
            
            <div className="pt-4">
              <button 
                className="w-full bg-primary-container text-on-primary-container font-label font-bold py-5 text-sm uppercase hover:bg-[#ffdad5] active:bg-[#ffdad5] transition-colors duration-0" 
                type="submit"
                style={{ letterSpacing: btnHover ? '0.3em' : '0.2em', transition: 'letter-spacing 0.2s ease, background-color 0s' }}
                onMouseEnter={() => setBtnHover(true)}
                onMouseLeave={() => setBtnHover(false)}
              >
                  ENTER THE VOID
              </button>
              <div className="mt-8 text-center">
                <p className="font-label text-[0.75rem] tracking-widest text-secondary opacity-60">
                    New here? <a className="text-on-surface underline underline-offset-4 decoration-1 hover:text-primary-container transition-colors" href="#">Join the collective.</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer className="relative z-20 w-full py-12 bg-surface-container-lowest flex flex-col md:flex-row justify-between items-center px-8 border-t border-outline-variant/15">
        <div className="font-display italic text-on-surface mb-6 md:mb-0">RESONATOR</div>
        <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
          <a className="font-label text-xs uppercase tracking-widest text-secondary opacity-60 hover:text-on-surface hover:opacity-100 transition-opacity" href="#">MANIFESTO</a>
          <a className="font-label text-xs uppercase tracking-widest text-secondary opacity-60 hover:text-on-surface hover:opacity-100 transition-opacity" href="#">PRIVACY</a>
          <a className="font-label text-xs uppercase tracking-widest text-secondary opacity-60 hover:text-on-surface hover:opacity-100 transition-opacity" href="#">TERMS</a>
          <a className="font-label text-xs uppercase tracking-widest text-secondary opacity-60 hover:text-on-surface hover:opacity-100 transition-opacity" href="#">CONTACT</a>
        </div>
        <div className="font-label text-xs uppercase tracking-widest text-outline opacity-40">
            � 2024 RESONATOR. THE UNDERGROUND LIVES.
        </div>
      </footer>
    </>
  )
}
