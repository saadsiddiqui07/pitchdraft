"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Zap, 
  DollarSign, 
  Share2, 
  Menu,
  Check
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-pitch-bg text-pitch-text-primary overflow-x-hidden relative selection:bg-pitch-accent selection:text-white">
      {/* Background Noise/Mesh Overlay */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150 mix-blend-overlay"></div>
      
      {/* Mesh Gradient Blob */}
      <div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-pitch-accent/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="fixed bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Sticky Nav */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 glass-nav"
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-pitch-accent rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">PitchDraft</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-pitch-text-secondary">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <Link href="/login">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm transition-all"
              >
                Sign In
              </motion.button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-pitch-accent mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            AI-Powered Proposal Builder
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 max-w-4xl mx-auto leading-[1.1]">
            From messy briefs to <br className="hidden md:block" />
            <span className="text-gradient">winning proposals in minutes.</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-lg md:text-xl text-pitch-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop manual scoping. Use AI to generate professional proposals, timelines, and pricing instantly.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link href="/login">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden bg-pitch-accent text-white px-8 py-3.5 rounded-full font-semibold text-sm shadow-[0_0_40px_-10px_rgba(99,102,241,0.5)] group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Drafting Now <ArrowRight className="w-4 h-4" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] animate-shimmer" />
              </motion.button>
            </Link>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full font-semibold text-sm text-pitch-text-primary hover:text-white transition-colors flex items-center gap-2"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-white border-b-[4px] border-b-transparent ml-0.5"></div>
              </div>
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Transformation Visual */}
      <section className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Left: Messy Brief */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-pitch-card border border-white/5 rounded-xl p-6 h-[400px] flex flex-col shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono ml-2">email_client_brief.txt</div>
              </div>
              <div className="font-mono text-sm text-slate-400 space-y-4 overflow-hidden">
                <p>Hey,</p>
                <p>We need a new website. Nothing too fancy but needs to look good. Maybe some AI features? Idk.</p>
                <p>Need it done by next month. Budget is around 5k-ish?</p>
                <p>Can you send a proposal?</p>
                <p className="opacity-50">Sent from my iPhone</p>
                <div className="w-full h-32 bg-white/5 rounded animate-pulse mt-4"></div>
              </div>
            </div>
          </div>

          {/* Right: Professional Proposal */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pitch-accent to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative bg-pitch-card border border-white/10 rounded-xl p-0 h-[420px] flex flex-col shadow-2xl overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-pitch-accent to-purple-500"></div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">Web Revamp Proposal</h3>
                    <p className="text-xs text-slate-400 mt-1">Prepared for Acme Corp</p>
                  </div>
                  <div className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded border border-green-500/20">
                    Draft Ready
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Scope</div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300">UX/UI Design</span>
                      <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300">Next.js Dev</span>
                      <span className="text-xs bg-white/5 border border-white/10 px-2 py-1 rounded text-slate-300">AI Integration</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Timeline</div>
                      <div className="text-sm text-white font-medium flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-pitch-accent" /> 4 Weeks
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Investment</div>
                      <div className="text-sm text-white font-medium flex items-center gap-2">
                        <DollarSign className="w-3.5 h-3.5 text-pitch-accent" /> $5,500 - $7,000
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-white/5">
                     <motion.button
                       whileHover={{ scale: 1.02 }}
                       className="w-full bg-white text-black py-2 rounded-lg text-sm font-semibold hover:bg-slate-200 transition-colors"
                     >
                       Review & Send
                     </motion.button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Arrow connecting the two */}
            <div className="hidden md:block absolute top-1/2 left-[-32px] transform -translate-y-1/2 -translate-x-1/2 z-20">
              <div className="w-12 h-12 rounded-full bg-pitch-card border border-white/10 flex items-center justify-center shadow-xl">
                 <ArrowRight className="w-5 h-5 text-pitch-accent" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Feature Bento Grid */}
      <section id="features" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Everything you need to <br /><span className="text-gradient">close the deal.</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
          {/* Feature 1: AI Scoping - Large Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-pitch-card border border-white/5 p-8"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-pitch-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10 h-full flex flex-col">
               <div className="w-10 h-10 rounded-lg bg-pitch-accent/20 flex items-center justify-center mb-4">
                 <Zap className="w-5 h-5 text-pitch-accent" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">AI Instant Scoping</h3>
               <p className="text-pitch-text-secondary max-w-md">Paste a messy email, Slack message, or voice note. PitchDraft extracts deliverables, requirements, and constraints instantly.</p>
               
               <div className="mt-auto relative w-full h-32 bg-black/20 rounded-lg border border-white/5 overflow-hidden p-4">
                 <div className="space-y-2 opacity-50">
                    <div className="h-2 w-3/4 bg-slate-700 rounded animate-pulse" />
                    <div className="h-2 w-1/2 bg-slate-700 rounded animate-pulse" />
                    <div className="h-2 w-5/6 bg-slate-700 rounded animate-pulse" />
                 </div>
                 <div className="absolute bottom-4 right-4 bg-pitch-accent/20 border border-pitch-accent/50 text-pitch-accent text-xs px-2 py-1 rounded">Processing...</div>
               </div>
             </div>
          </motion.div>

          {/* Feature 2: Smart Timelines */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden rounded-2xl bg-pitch-card border border-white/5 p-8"
          >
             <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
               <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                 <Clock className="w-5 h-5 text-blue-400" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Smart Timelines</h3>
               <p className="text-pitch-text-secondary text-sm">Automated milestones based on project complexity.</p>
               <div className="mt-6 space-y-3">
                 <div className="flex items-center gap-3 text-xs text-slate-400">
                   <div className="w-2 h-2 rounded-full bg-blue-500" />
                   <span>Discovery (1 wk)</span>
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-400">
                   <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                   <span>Design (2 wks)</span>
                 </div>
                 <div className="flex items-center gap-3 text-xs text-slate-400">
                   <div className="w-2 h-2 rounded-full bg-blue-500/20" />
                   <span>Dev (3 wks)</span>
                 </div>
               </div>
             </div>
          </motion.div>

          {/* Feature 3: Pricing Intelligence */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="relative group overflow-hidden rounded-2xl bg-pitch-card border border-white/5 p-8"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10">
               <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                 <DollarSign className="w-5 h-5 text-green-400" />
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Pricing Intel</h3>
               <p className="text-pitch-text-secondary text-sm">Suggested rates based on market data and project size.</p>
               <div className="mt-6">
                 <div className="text-2xl font-bold text-white tracking-tight">$5,000</div>
                 <div className="text-xs text-green-400 font-mono">+15% vs market avg</div>
               </div>
             </div>
          </motion.div>

          {/* Feature 4: One-Click Export */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-pitch-card border border-white/5 p-8"
          >
             <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                 <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
                   <Share2 className="w-5 h-5 text-purple-400" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">One-Click Export</h3>
                 <p className="text-pitch-text-secondary">Generate beautiful PDF links or hosted proposal pages that clients can sign digitally.</p>
               </div>
               <div className="flex-1 w-full flex justify-center">
                 <div className="bg-black/30 p-4 rounded-xl border border-white/10 w-full max-w-xs">
                   <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5 mb-2">
                     <span className="text-xs text-slate-300">proposal-v1.pdf</span>
                     <CheckCircle2 className="w-4 h-4 text-green-500" />
                   </div>
                   <div className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-white/5">
                     <span className="text-xs text-slate-300">Share Link</span>
                     <div className="text-[10px] bg-pitch-accent px-2 py-0.5 rounded text-white">Copy</div>
                   </div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 max-w-7xl mx-auto z-10 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Simple, transparent <span className="text-gradient">pricing.</span></h2>
          <p className="text-pitch-text-secondary max-w-xl mx-auto">Choose the plan that fits your workflow. Cancel anytime.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-pitch-card border border-white/5 rounded-2xl p-8 flex flex-col relative"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Starter</h3>
            <p className="text-pitch-text-secondary text-sm mb-6">Perfect for freelancers just starting out.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$0</span>
              <span className="text-slate-500">/mo</span>
            </div>
            
            <Link href="/login" className="block mb-8">
              <button className="w-full py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium transition-colors">
                Get Started
              </button>
            </Link>

            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                3 Proposals per month
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                Basic AI Scoping
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                PDF Export
              </div>
            </div>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-pitch-card border border-pitch-accent/50 rounded-2xl p-8 flex flex-col relative shadow-[0_0_40px_-10px_rgba(99,102,241,0.15)]"
          >
            <div className="absolute top-0 right-0 bg-pitch-accent text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg rounded-tr-lg uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Pro</h3>
            <p className="text-pitch-text-secondary text-sm mb-6">For serious freelancers and consultants.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$29</span>
              <span className="text-slate-500">/mo</span>
            </div>
            
            <Link href="/login" className="block mb-8">
              <button className="w-full py-2.5 rounded-lg bg-pitch-accent hover:bg-indigo-500 text-white font-medium transition-colors shadow-lg shadow-indigo-500/25">
                Start Free Trial
              </button>
            </Link>

            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                Unlimited Proposals
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                Advanced AI Models
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                Custom Branding
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                Client Analytics
              </div>
            </div>
          </motion.div>

          {/* Agency Plan */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-pitch-card border border-white/5 rounded-2xl p-8 flex flex-col relative"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Agency</h3>
            <p className="text-pitch-text-secondary text-sm mb-6">Scale your agency operations.</p>
            <div className="mb-6">
              <span className="text-4xl font-bold text-white">$99</span>
              <span className="text-slate-500">/mo</span>
            </div>
            
            <Link href="/login" className="block mb-8">
              <button className="w-full py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-white font-medium transition-colors">
                Contact Sales
              </button>
            </Link>

            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                Everything in Pro
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                5 Team Members
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                Priority Support
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check className="w-4 h-4 text-pitch-accent" />
                API Access
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-pitch-accent/50 rounded flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
            <span className="font-bold tracking-tight text-slate-300">PitchDraft</span>
          </div>
          <div className="text-sm text-slate-500">
            © 2024 PitchDraft Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
