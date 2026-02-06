import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Upload, Cpu, CheckCircle, XCircle, FileText, 
  AlertTriangle, Lightbulb, Loader2, Target, 
  ShieldCheck, ArrowUpRight, Fingerprint, 
  Activity, Terminal, Globe, Zap
} from 'lucide-react';

export default function App() {
  const [file, setFile] = useState<File | null>(null);
  const [jd, setJd] = useState<string>('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>(["System initialized...", "Awaiting input stream..."]);

  const addLog = (msg: string) => {
    setLogs(prev => [msg, ...prev].slice(0, 5));
  };

  // Reset results when file or JD changes to ensure user knows it's a new session
  useEffect(() => {
    setResult(null);
  }, [file, jd]);

  const handleAnalyze = async () => {
    if (!file || !jd) {
      addLog("ERROR: Missing CV or Job Requirements");
      return;
    }

    // CRITICAL: Clear previous results and start loading
    setResult(null);
    setLoading(true);
    addLog(`Scanning CV: ${file.name}...`);
    
    const formData = new FormData();
    formData.append('file', file);
    formData.append('jd', jd);

    try {
      // Added a timestamp parameter to prevent API caching
const res = await axios.post('/analyze', formData);;

      // Synthetic delay to allow the "Neural Decryption" animation to play (looks better for Viva)
      setTimeout(() => {
        setResult(res.data);
        addLog(`Analysis Complete: Match Index ${res.data.score}%`);
        setLoading(false);
      }, 1200);

    } catch (err) {
      console.error(err);
      addLog("CRITICAL ERROR: Connection to Engine Refused");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020203] text-slate-400 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Engineering Grid Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="relative z-10 max-w-[1500px] mx-auto px-8 py-10">
        
        {/* TOP COMMAND BAR */}
        <nav className="flex items-center justify-between mb-12 p-6 bg-slate-900/10 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600 rounded-2xl shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Activity size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tighter text-white uppercase">Astra<span className="text-blue-500 font-light">.Core</span></h1>
              <p className="text-[9px] font-mono tracking-[0.3em] text-blue-500/60 uppercase italic">Neural Auditor v3.0</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-12 font-mono text-[10px]">
            <div className="space-y-1">
              <p className="text-slate-600 uppercase">Processing Node</p>
              <p className="text-blue-400">SRI_LANKA_WEST_01</p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-600 uppercase">Neural Status</p>
              <p className="text-emerald-500">SYNCHRONIZED</p>
            </div>
          </div>
        </nav>

        <main className="grid lg:grid-cols-12 gap-10">
          
          {/* LEFT: INPUT QUADRANT */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-[#080809] border border-white/5 rounded-[40px] p-8 space-y-8 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <Globe size={100} />
              </div>

              <div className="space-y-4 relative">
                <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase flex items-center gap-2">
                  <Terminal size={14} className="text-blue-500" /> Target Requirements
                </label>
                <textarea 
                  className="w-full h-56 bg-black/50 border border-white/5 rounded-3xl p-6 text-sm text-slate-300 focus:border-blue-500/50 transition-all outline-none resize-none placeholder:text-slate-700"
                  placeholder="Paste Job Description here..."
                  value={jd}
                  onChange={(e) => setJd(e.target.value)}
                />
              </div>

              <div className="space-y-4">
                <label className="text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-500" /> Source Identity
                </label>
                <div className="relative group border-2 border-dashed border-white/5 rounded-3xl p-10 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-pointer text-center">
                  <input 
                    type="file" 
                    onChange={(e) => setFile(e.target.files?.[0] || null)} 
                    className="absolute inset-0 opacity-0 z-20 cursor-pointer" 
                  />
                  <Upload size={32} className={`mx-auto mb-4 ${file ? 'text-blue-500' : 'text-slate-700'} group-hover:text-blue-500 transition-colors`} />
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-tight">
                    {file ? file.name : "Inject Candidate PDF"}
                  </p>
                </div>
              </div>

              <button 
                onClick={handleAnalyze}
                disabled={loading}
                className="w-full py-6 bg-white text-black font-black rounded-[24px] hover:bg-blue-600 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 flex items-center justify-center gap-4 group shadow-xl"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" />
                    <span className="tracking-widest text-xs">ANALYZING...</span>
                  </>
                ) : (
                  <>
                    <span className="tracking-widest text-xs">INITIATE SCAN</span>
                    <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </div>

            {/* LIVE SYSTEM LOGS */}
            <div className="bg-black/40 border border-white/5 rounded-3xl p-6 font-mono text-[10px] space-y-2 uppercase shadow-inner">
              {logs.map((log, i) => (
                <div key={i} className={i === 0 ? "text-blue-400" : "text-slate-700"}>
                  <span className="opacity-50">[{new Date().toLocaleTimeString([], {hour12: false})}]</span> {`> ${log}`}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: OUTPUT QUADRANT */}
          <div className="lg:col-span-8">
            <div className="h-full bg-slate-900/5 backdrop-blur-3xl border border-white/5 rounded-[50px] p-12 relative overflow-hidden flex flex-col items-center justify-center min-h-[700px] shadow-2xl">
              
              {!result && !loading && (
                <div className="text-center opacity-30 flex flex-col items-center">
                  <div className="relative mb-8">
                    <Cpu size={120} strokeWidth={0.5} className="animate-pulse text-blue-500" />
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                  </div>
                  <p className="font-mono text-xs tracking-[0.5em] uppercase">System Idle // Awaiting Input Stream</p>
                </div>
              )}

              {loading && (
                <div className="text-center space-y-8">
                  <div className="relative flex items-center justify-center">
                     <div className="w-32 h-32 border-4 border-blue-500/10 border-t-blue-500 rounded-full animate-spin" />
                     <Fingerprint size={40} className="absolute text-blue-500 animate-pulse" />
                  </div>
                  <p className="font-mono text-[10px] text-blue-500 animate-pulse tracking-[0.4em] uppercase">Decrypting Neural Experience Patterns...</p>
                </div>
              )}

              {result && (
                <div className="w-full space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-1000">
                  <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="relative group">
                      <div className="absolute -inset-10 bg-blue-500/20 blur-[100px] rounded-full group-hover:bg-blue-500/30 transition-all duration-1000" />
                      <div className="relative w-64 h-64 flex flex-col items-center justify-center bg-[#020203] border border-white/10 rounded-full shadow-2xl ring-8 ring-white/5">
                        <span className="text-[10px] font-black text-blue-500 tracking-[0.4em] mb-2 uppercase">Match Index</span>
                        <span className="text-9xl font-black text-white italic leading-none tracking-tighter">{result.score}</span>
                        <span className="text-2xl font-bold text-white/20 mt-2">%</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-center md:text-left">
                      <div className="inline-block px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-500 tracking-widest uppercase">
                        Integrity Verified
                      </div>
                      <h2 className="text-6xl font-black text-white tracking-tighter max-w-md leading-[0.85] uppercase">
                        Candidate <br/> <span className="text-blue-500">Audit Report</span>
                      </h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] group hover:bg-emerald-500/[0.05] transition-all duration-500">
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <CheckCircle size={16} className="text-emerald-500" /> Neural Matches
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.match_keywords.map((kw: string) => (
                          <span key={kw} className="px-4 py-2 bg-black text-white border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:border-emerald-500/50 transition-colors">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] group hover:bg-rose-500/[0.05] transition-all duration-500">
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                        <XCircle size={16} className="text-rose-500" /> Semantic Gaps
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {result.missing_keywords.map((kw: string) => (
                          <span key={kw} className="px-4 py-2 bg-black text-rose-500/80 border border-rose-500/20 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:border-rose-500/50 transition-colors">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-10 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent border border-white/5 border-l-8 border-l-blue-500 rounded-[40px] relative overflow-hidden group shadow-2xl">
                    <Zap className="absolute -right-8 -bottom-8 text-blue-500/10 -rotate-12 group-hover:scale-110 group-hover:text-blue-500/20 transition-all duration-1000" size={200} />
                    <div className="relative space-y-4">
                      <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] flex items-center gap-2">
                         Strategic Advisor
                      </h4>
                      <p className="text-slate-200 text-xl leading-relaxed italic font-light max-w-2xl">
                        "{result.suggestions}"
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}