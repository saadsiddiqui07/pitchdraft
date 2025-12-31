"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-pitch-bg text-pitch-text-primary overflow-hidden relative selection:bg-pitch-accent selection:text-white flex items-center justify-center">
      {/* Background Noise/Mesh Overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
      
      {/* Mesh Gradient Blob */}
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-pitch-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 w-full max-w-md px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-pitch-card border border-white/10 rounded-2xl p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="flex justify-center mb-8">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-pitch-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </Link>
          </div>

          <h1 className="text-2xl font-bold text-center mb-2">Welcome back</h1>
          <p className="text-pitch-text-secondary text-center mb-8 text-sm">Sign in to continue to PitchDraft</p>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 ml-1">Email address</label>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-pitch-accent transition-colors" />
                <input 
                  type="email" 
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-10 py-2.5 text-sm focus:outline-none focus:border-pitch-accent/50 focus:ring-1 focus:ring-pitch-accent/50 transition-all placeholder:text-slate-600"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400 ml-1">Password</label>
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-pitch-accent transition-colors" />
                <input 
                  type="password" 
                  className="w-full bg-black/20 border border-white/10 rounded-lg px-10 py-2.5 text-sm focus:outline-none focus:border-pitch-accent/50 focus:ring-1 focus:ring-pitch-accent/50 transition-all placeholder:text-slate-600"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button className="w-full bg-pitch-accent hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg transition-all active:scale-[0.98] mt-2">
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/" className="text-xs text-slate-500 hover:text-white transition-colors flex items-center justify-center gap-1">
              <ArrowLeft className="w-3 h-3" /> Back to Home
            </Link>
          </div>
        </motion.div>
        
        <p className="text-center text-xs text-slate-500 mt-8">
          Don&apos;t have an account? <span className="text-pitch-accent cursor-pointer hover:underline">Contact Sales</span>
        </p>
      </div>
    </div>
  );
}
