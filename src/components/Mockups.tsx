"use client";

import React from "react";
import {
  CheckCircle2, Clock, Settings, Database, Server, Users, FileText, Layout,
  Mail, Link, Globe, Search, Cpu, Laptop, Play, Filter
} from "lucide-react";

// ==========================================
// 1. CRMS - Car Rental Management System Mockup
// ==========================================
export const CrmsDashboardMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl">
      {/* Window Header */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-zinc-500 text-[10px] ml-2">crms.indomobil.co.id/dashboard</span>
        </div>
        <div className="flex items-center gap-2 bg-zinc-950 px-2 py-0.5 rounded text-[10px] text-brand-cyan border border-zinc-800">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse"></span>
          <span>1,024 Active Users</span>
        </div>
      </div>

      {/* Main App Workspace */}
      <div className="flex flex-1 min-h-0">
        {/* Mini Sidebar */}
        <div className="w-12 bg-zinc-950 border-r border-zinc-900 flex flex-col items-center py-4 gap-4">
          <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-brand-cyan">
            <Layout size={16} />
          </div>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-400">
            <Users size={16} />
          </div>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-400">
            <Clock size={16} />
          </div>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-zinc-600 hover:text-zinc-400">
            <Settings size={16} />
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-4 overflow-y-auto no-scrollbar space-y-4">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-white font-bold text-sm tracking-tight font-sans">CRMS Enterprise</h4>
              <p className="text-[10px] text-zinc-500">Indomobil Group Approval & Fleet Registry</p>
            </div>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-zinc-900 border border-zinc-800 rounded text-[10px] text-zinc-300">Region: DKI Jakarta</span>
            </div>
          </div>

          {/* KPI Stats */}
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-zinc-900/40 border border-zinc-800/60 p-2.5 rounded-lg">
              <p className="text-[10px] text-zinc-500">TOTAL FLEET</p>
              <p className="text-base font-bold text-white font-sans mt-0.5">342 <span className="text-[10px] text-green-500 font-normal">+12%</span></p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/60 p-2.5 rounded-lg">
              <p className="text-[10px] text-zinc-500">ACTIVE LEASES</p>
              <p className="text-base font-bold text-brand-cyan font-sans mt-0.5">284 <span className="text-[10px] text-zinc-500 font-normal">util. 83%</span></p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800/60 p-2.5 rounded-lg">
              <p className="text-[10px] text-zinc-500">PENDING APPROVALS</p>
              <p className="text-base font-bold text-yellow-500 font-sans mt-0.5">14 <span className="text-[10px] text-yellow-500/50 animate-pulse">● Urgent</span></p>
            </div>
          </div>

          {/* Active Approvals Table */}
          <div className="bg-zinc-900/30 border border-zinc-800/50 rounded-lg overflow-hidden">
            <div className="bg-zinc-900/50 px-3 py-1.5 flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-800">
              <span>ACTIVE VEHICLE REQUESTS</span>
              <span className="text-zinc-600">Updated just now</span>
            </div>
            <div className="divide-y divide-zinc-900 p-1">
              <div className="flex items-center justify-between p-2 hover:bg-zinc-900/20">
                <div className="flex flex-col">
                  <span className="text-white font-sans text-[11px] font-medium">Toyota Innova Zenix</span>
                  <span className="text-[9px] text-zinc-500">Req-2026-904 • ID: CSM-9042</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-yellow-500/10 text-yellow-500 text-[9px] rounded-full border border-yellow-500/20">Manager Approval</span>
                  <span className="text-zinc-500 text-[9px]">Jakarta Branch</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-2 hover:bg-zinc-900/20">
                <div className="flex flex-col">
                  <span className="text-white font-sans text-[11px] font-medium">Mitsubishi Pajero Sport</span>
                  <span className="text-[9px] text-zinc-500">Req-2026-898 • ID: CSM-8981</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-[9px] rounded-full border border-green-500/20">Assigned / Active</span>
                  <span className="text-zinc-500 text-[9px]">Surabaya Branch</span>
                </div>
              </div>
            </div>
          </div>

          {/* Workflow Status Tracking Visual */}
          <div className="bg-zinc-950 p-3 rounded-lg border border-zinc-900">
            <p className="text-[9px] text-zinc-500 mb-2.5">LIVE APPROVAL STAGES</p>
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500 text-green-500 flex items-center justify-center text-[9px] font-bold">1</div>
                <span className="text-[8px] text-zinc-400">Request</span>
              </div>
              <div className="flex-1 h-[1px] bg-green-500/50 mx-1"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-green-500/20 border border-green-500 text-green-500 flex items-center justify-center text-[9px] font-bold">2</div>
                <span className="text-[8px] text-zinc-400">Verify</span>
              </div>
              <div className="flex-1 h-[1px] bg-brand-cyan/50 mx-1"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-brand-cyan/20 border border-brand-cyan text-brand-cyan flex items-center justify-center text-[9px] font-bold animate-pulse">3</div>
                <span className="text-[8px] text-brand-cyan font-bold">Approving</span>
              </div>
              <div className="flex-1 h-[1px] bg-zinc-800 mx-1"></div>
              <div className="flex flex-col items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-600 flex items-center justify-center text-[9px]">4</div>
                <span className="text-[8px] text-zinc-600">Dispatched</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 2. CRMS BI - Business Intelligence Mockup
// ==========================================
export const BiChartsMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl">
      {/* Window Header */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-zinc-500 text-[10px] ml-2">bi.crms.indomobil.id/reports</span>
        </div>
        <div className="flex items-center gap-1 bg-zinc-900 px-2 py-0.5 rounded text-[10px] text-zinc-400 border border-zinc-800">
          <Filter size={10} />
          <span>Filters: Last 12 Months</span>
        </div>
      </div>

      {/* BI Work Area */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar">
        {/* KPI Dashboard Grid */}
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-between">
            <span className="text-[9px] text-zinc-500 tracking-wider">TOTAL VOLUME</span>
            <span className="text-sm font-bold text-white mt-1 font-sans">10,480+ <span className="text-[9px] font-normal text-green-500">+18.2%</span></span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-between">
            <span className="text-[9px] text-zinc-500 tracking-wider">UTILIZATION RATE</span>
            <span className="text-sm font-bold text-brand-blue mt-1 font-sans">89.4% <span className="text-[9px] font-normal text-zinc-500">Peak Q2</span></span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 p-3 rounded-lg flex flex-col justify-between">
            <span className="text-[9px] text-zinc-500 tracking-wider">REVENUE ESTIMATE</span>
            <span className="text-sm font-bold text-green-500 mt-1 font-sans">IDR 4.8B <span className="text-[9px] font-normal text-green-500">Target Hit</span></span>
          </div>
        </div>

        {/* Charts Visualizer */}
        <div className="grid grid-cols-2 gap-3">
          {/* Monthly Trend Area Chart (Mocked with SVGs) */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-3 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] text-zinc-500 font-bold">RENTAL DEMAND TREND</span>
              <span className="text-[8px] text-zinc-600">MONTH-OVER-MONTH</span>
            </div>
            <div className="flex-1 min-h-[80px] flex items-end justify-between relative pt-4 px-1 border-b border-l border-zinc-800">
              {/* Grid Lines */}
              <div className="absolute inset-x-0 top-1/3 h-[1px] bg-zinc-900/60 border-dashed"></div>
              <div className="absolute inset-x-0 top-2/3 h-[1px] bg-zinc-900/60 border-dashed"></div>

              {/* Bar charts or SVG lines */}
              <div className="w-[10%] bg-zinc-900 h-[20%] rounded-t-sm hover:bg-brand-blue transition-all" title="Jan"></div>
              <div className="w-[10%] bg-zinc-900 h-[35%] rounded-t-sm hover:bg-brand-blue transition-all" title="Feb"></div>
              <div className="w-[10%] bg-zinc-900 h-[45%] rounded-t-sm hover:bg-brand-blue transition-all" title="Mar"></div>
              <div className="w-[10%] bg-brand-blue/30 h-[65%] rounded-t-sm hover:bg-brand-blue transition-all" title="Apr"></div>
              <div className="w-[10%] bg-brand-blue/40 h-[55%] rounded-t-sm hover:bg-brand-blue transition-all" title="May"></div>
              <div className="w-[10%] bg-brand-blue/60 h-[75%] rounded-t-sm hover:bg-brand-blue transition-all" title="Jun"></div>
              <div className="w-[10%] bg-brand-blue/80 h-[82%] rounded-t-sm hover:bg-brand-blue transition-all" title="Jul"></div>
              <div className="w-[10%] bg-brand-cyan h-[95%] rounded-t-sm hover:bg-brand-cyan transition-all" title="Aug"></div>
            </div>
            <div className="flex justify-between text-[8px] text-zinc-600 mt-1 px-1">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Aug</span>
            </div>
          </div>

          {/* Region Share Pie Chart (Mocked in CSS/SVG) */}
          <div className="bg-zinc-900/30 border border-zinc-800/60 rounded-lg p-3 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] text-zinc-500 font-bold">REGION SHARE</span>
              <span className="text-[8px] text-zinc-600">CSM FLEET</span>
            </div>
            <div className="flex flex-1 items-center justify-center gap-3">
              {/* Fake Donut Chart */}
              <div className="relative w-14 h-14 rounded-full border-4 border-zinc-900 flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border-4 border-t-brand-blue border-r-brand-cyan border-b-brand-purple border-l-zinc-900 animate-spin-slow"></div>
                <span className="text-[8px] text-white font-sans font-bold">IDN</span>
              </div>
              {/* Legends */}
              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between text-[8px]">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-blue rounded-full"></span>
                    <span className="text-zinc-400">Jakarta DKI</span>
                  </div>
                  <span className="text-white">62%</span>
                </div>
                <div className="flex items-center justify-between text-[8px]">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-cyan rounded-full"></span>
                    <span className="text-zinc-400">Surabaya</span>
                  </div>
                  <span className="text-white">21%</span>
                </div>
                <div className="flex items-center justify-between text-[8px]">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-brand-purple rounded-full"></span>
                    <span className="text-zinc-400">Tangerang</span>
                  </div>
                  <span className="text-white">17%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data processing console output */}
        <div className="bg-zinc-950 p-2.5 rounded-lg border border-zinc-900 text-[10px] text-zinc-500 font-mono space-y-1">
          <p className="text-zinc-400 flex items-center justify-between">
            <span>&gt;_ query_execution_log.go</span>
            <span className="text-[8px] px-1 py-0.2 bg-green-500/10 text-green-500 rounded font-sans">COMPLETED</span>
          </p>
          <p className="text-brand-cyan/70">INF: Connected to MS-SQL Server at 172.16.104.53:1433</p>
          <p className="text-zinc-500">INF: Scanning lease_registry table... found 10,480 total rows</p>
          <p className="text-zinc-500">INF: Aggregating analytics. Cache hit on Redis (ttl 300s)</p>
          <p className="text-green-500/80">INF: Report generation finished in 184ms.</p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 3. HRIS - Human Resources Information System Mockup
// ==========================================
export const HrisMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl">
      {/* Window Header */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-zinc-500 text-[10px] ml-2">hris.indomobil.id/employee-leave</span>
        </div>
        <div className="bg-zinc-950 px-2 py-0.5 rounded text-[10px] text-zinc-400 border border-zinc-800">
          SYS_ONLINE
        </div>
      </div>

      {/* HRIS Interface */}
      <div className="flex-1 p-4 space-y-3 overflow-y-auto no-scrollbar">
        {/* Profile Card Header */}
        <div className="bg-zinc-900/40 border border-zinc-800/80 p-3 rounded-lg flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden flex items-center justify-center text-brand-cyan">
            <Users size={20} />
          </div>
          <div className="flex-1">
            <h5 className="text-white font-bold font-sans text-xs">Muhammad Fathi Farhat</h5>
            <p className="text-[10px] text-zinc-500">Fullstack Developer • IDM-0094</p>
          </div>
          <div className="text-right">
            <span className="px-1.5 py-0.5 bg-green-500/10 text-green-400 text-[9px] rounded font-sans border border-green-500/20">Active Leave Balance: 12 Days</span>
          </div>
        </div>

        {/* Dynamic Approval Workflow Component */}
        <div className="bg-zinc-900/20 border border-zinc-800/60 rounded-lg p-3 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] text-zinc-500 font-bold">SUBMITTED LEAVE REQUEST</span>
            <span className="text-[8px] bg-yellow-500/10 text-yellow-500 px-1 rounded">PENDING REVIEWS</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[10px] text-zinc-400">
            <div className="bg-zinc-950/50 p-2 rounded border border-zinc-900">
              <p className="text-[8px] text-zinc-600">LEAVE TYPE</p>
              <p className="text-zinc-300 font-sans mt-0.5">Annual Paid Leave</p>
            </div>
            <div className="bg-zinc-950/50 p-2 rounded border border-zinc-900">
              <p className="text-[8px] text-zinc-600">DURATION</p>
              <p className="text-zinc-300 font-sans mt-0.5">Nov 18 - Nov 21 (3 Days)</p>
            </div>
          </div>

          {/* Sequential Step Timeline */}
          <div className="space-y-2 pt-1 font-sans text-[10px]">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-zinc-300 font-bold leading-tight">Submitted by Employee</p>
                <p className="text-[8px] text-zinc-500 font-mono">Approved automatically via validation system • 10:14 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 size={12} className="text-green-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-zinc-300 font-bold leading-tight">Tech Lead Approval</p>
                <p className="text-[8px] text-zinc-500 font-mono">Approved by Division Lead (Indomobil IT) • 11:30 AM</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={12} className="text-yellow-500 mt-0.5 flex-shrink-0 animate-pulse" />
              <div>
                <p className="text-yellow-500 font-bold leading-tight">Corporate HRD Approval</p>
                <p className="text-[8px] text-zinc-500 font-mono">Pending authorization queue #3 • Jakarta Head Office</p>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance & Missed Clock Log */}
        <div className="bg-zinc-950 p-2 rounded-lg border border-zinc-900">
          <p className="text-[8px] text-zinc-500 mb-2">WEEKLY ATTENDANCE SUMMARY (VITE FRONTEND)</p>
          <div className="grid grid-cols-5 gap-1 text-center font-sans">
            <div className="bg-zinc-900/60 p-1.5 rounded border border-zinc-800">
              <span className="text-[8px] text-zinc-500 block">MON</span>
              <span className="text-[10px] text-green-400 font-bold">08:58</span>
            </div>
            <div className="bg-zinc-900/60 p-1.5 rounded border border-zinc-800">
              <span className="text-[8px] text-zinc-500 block">TUE</span>
              <span className="text-[10px] text-green-400 font-bold">08:45</span>
            </div>
            <div className="bg-zinc-900/60 p-1.5 rounded border border-zinc-800">
              <span className="text-[8px] text-zinc-500 block">WED</span>
              <span className="text-[10px] text-green-400 font-bold">08:52</span>
            </div>
            <div className="bg-zinc-900/60 p-1.5 rounded border border-zinc-800">
              <span className="text-[8px] text-zinc-500 block">THU</span>
              <span className="text-[10px] text-green-400 font-bold">08:30</span>
            </div>
            <div className="bg-zinc-900/60 p-1.5 rounded border border-zinc-800">
              <span className="text-[8px] text-zinc-500 block">FRI</span>
              <span className="text-[10px] text-yellow-400 font-bold font-mono">Leave</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. FLOWGO.ID - No-Code SaaS Workflow Builder Mockup
// ==========================================
export const FlowgoMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl relative">
      {/* SaaS App Header */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800 z-10">
        <div className="flex items-center gap-2 font-sans">
          <span className="text-white font-black tracking-tighter text-xs flex items-center gap-1">
            <span className="w-4 h-4 rounded bg-brand-cyan text-black flex items-center justify-center font-bold text-[10px]">FG</span>
            FLOWGO.ID
          </span>
          <span className="bg-zinc-800 text-zinc-400 text-[8px] px-1.5 py-0.2 rounded">BETA BUILD</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-brand-cyan/15 border border-brand-cyan/30 text-brand-cyan hover:bg-brand-cyan/25 px-2 py-0.5 rounded text-[10px] font-bold font-sans flex items-center gap-1">
            <Play size={10} />
            Run Canvas
          </button>
        </div>
      </div>

      {/* Grid Canvas Background for builder */}
      <div className="flex-1 bg-grid-pattern relative p-4 overflow-hidden flex flex-col justify-center items-center gap-4">
        {/* Floating Indicator */}
        <div className="absolute top-2 left-2 bg-zinc-900/80 backdrop-blur border border-zinc-800 px-2 py-1 rounded text-[8px] text-zinc-500 z-10">
          Canvas Scale: 100% (Draggable)
        </div>

        {/* Trigger Node */}
        <div className="w-56 glass-panel rounded-lg border border-brand-cyan/40 p-2.5 relative shadow-lg flex flex-col gap-1.5 transition-all hover:scale-[1.02] hover:border-brand-cyan">
          <div className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5 text-white font-bold font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></span>
              Trigger Node
            </div>
            <span className="text-[8px] bg-brand-cyan/10 text-brand-cyan px-1 rounded border border-brand-cyan/20">On Leave Form</span>
          </div>
          <p className="text-[9px] text-zinc-500 font-mono">Listener: /api/v1/webhooks/leave_sub</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border border-brand-cyan flex items-center justify-center z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
          </div>
        </div>

        {/* Flow Line Vector */}
        <div className="h-4 w-[2px] bg-gradient-to-b from-brand-cyan to-brand-purple"></div>

        {/* Approval Node */}
        <div className="w-56 glass-panel rounded-lg border border-brand-purple/40 p-2.5 relative shadow-lg flex flex-col gap-1.5 transition-all hover:scale-[1.02] hover:border-brand-purple">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border border-brand-purple flex items-center justify-center z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5 text-white font-bold font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-purple"></span>
              Condition Filter
            </div>
            <span className="text-[8px] bg-brand-purple/10 text-brand-purple px-1 rounded border border-brand-purple/20">Check HRD</span>
          </div>
          <p className="text-[9px] text-zinc-400 font-sans">If &apos;LeaveDays&apos; &gt; 3 then route to Senior Partner</p>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border border-brand-purple flex items-center justify-center z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-purple"></div>
          </div>
        </div>

        {/* Flow Line Vector */}
        <div className="h-4 w-[2px] bg-gradient-to-b from-brand-purple to-zinc-800"></div>

        {/* Notification Node */}
        <div className="w-56 glass-panel rounded-lg border border-zinc-800 p-2.5 relative shadow-lg flex flex-col gap-1.5 transition-all hover:scale-[1.02] hover:border-zinc-700">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center z-10">
            <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
          </div>
          <div className="flex items-center justify-between text-[10px]">
            <div className="flex items-center gap-1.5 text-zinc-300 font-bold font-sans">
              <Mail size={10} className="text-zinc-500" />
              Action Node
            </div>
            <span className="text-[8px] bg-zinc-800 text-zinc-400 px-1 rounded">REST API Call</span>
          </div>
          <p className="text-[9px] text-zinc-500">POST: telegram_bot_notify.id</p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 5. WEBSET.ID - Domain Platform Mockup
// ==========================================
export const WebsetMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl">
      {/* Window Header */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-zinc-500 text-[10px] ml-2">webset.id/portal</span>
        </div>
        <div className="flex items-center gap-1 bg-zinc-950 px-2 py-0.5 rounded text-[10px] text-green-400 border border-zinc-800">
          <Globe size={10} />
          <span>SSL_SECURE</span>
        </div>
      </div>

      {/* Domain Interface Content */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar">
        {/* Search Mockup */}
        <div className="space-y-1.5">
          <p className="text-[8px] text-zinc-500 font-bold">FIND YOUR PREMIUM DOMAIN</p>
          <div className="flex gap-1.5">
            <div className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-2.5 py-1.5 flex items-center gap-2 text-zinc-300">
              <Search size={12} className="text-zinc-500" />
              <span className="font-sans font-medium">fathifarhat.id</span>
            </div>
            <button className="bg-white text-black font-sans font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-zinc-200 transition-colors">
              Check
            </button>
          </div>
        </div>

        {/* Search result and pricing details */}
        <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-3 space-y-2.5">
          <div className="flex items-center justify-between">
            <span className="text-white font-sans font-bold text-xs">fathifarhat.id</span>
            <span className="px-1.5 py-0.2 bg-green-500/10 text-green-500 text-[8px] rounded border border-green-500/20">AVAILABLE</span>
          </div>
          <div className="flex items-end justify-between border-t border-zinc-900 pt-2">
            <div>
              <p className="text-[8px] text-zinc-500">REGISTRATION FEE</p>
              <p className="text-white font-bold font-sans mt-0.5">IDR 145,000<span className="text-[9px] font-normal text-zinc-500">/year</span></p>
            </div>
            <span className="text-[8px] text-zinc-500 italic">Includes DNS Management</span>
          </div>
        </div>

        {/* Mini Invoice Billing Item */}
        <div className="bg-zinc-950 border border-zinc-900 p-2.5 rounded-lg space-y-2">
          <div className="flex items-center justify-between text-[8px] text-zinc-500">
            <span>BILLING INVOICE #INV-90214</span>
            <span>UNPAID</span>
          </div>
          <div className="flex justify-between text-[10px] text-zinc-300">
            <span>Domain Reg: fathifarhat.id</span>
            <span className="font-sans">IDR 145,000</span>
          </div>
          <div className="flex justify-between text-[10px] text-zinc-300 border-b border-zinc-900 pb-1.5">
            <span>Gateway Admin Fee</span>
            <span className="font-sans">IDR 4,500</span>
          </div>
          <div className="flex justify-between text-[11px] font-bold text-white">
            <span>Grand Total</span>
            <span className="font-sans text-brand-cyan">IDR 149,500</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. Newsletter Platform Mockup
// ==========================================
export const NewsletterMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl">
      {/* Window Header */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-zinc-500 text-[10px] ml-2">newsletter.aidi.co.id/campaigns</span>
        </div>
        <div className="bg-zinc-950 px-2 py-0.5 rounded text-[10px] text-zinc-400 border border-zinc-800">
          TRACKER_ONLINE
        </div>
      </div>

      {/* Newsletter Content */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar">
        {/* Campaign Metrics */}
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-zinc-900/40 border border-zinc-800 p-2.5 rounded-lg flex flex-col">
            <div className="flex items-center gap-1 text-[8px] text-zinc-500 font-bold">
              <Mail size={10} className="text-brand-purple" />
              EMAIL OPEN RATE
            </div>
            <span className="text-base font-bold text-white mt-1 font-sans">64.2% <span className="text-[9px] text-green-500">+4.8%</span></span>
          </div>
          <div className="bg-zinc-900/40 border border-zinc-800 p-2.5 rounded-lg flex flex-col">
            <div className="flex items-center gap-1 text-[8px] text-zinc-500 font-bold">
              <Link size={10} className="text-brand-cyan" />
              LINK CLICK RATE
            </div>
            <span className="text-base font-bold text-brand-cyan mt-1 font-sans">18.5% <span className="text-[9px] text-zinc-500">Avg 12s</span></span>
          </div>
        </div>

        {/* Real-time Open Analytics Visual */}
        <div className="bg-zinc-900/10 border border-zinc-800/80 p-3 rounded-lg space-y-2">
          <span className="text-[9px] text-zinc-500 font-bold">RECIPIENT TRACKING (NODE.JS API)</span>
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zinc-300">budi.hartono@domain.id</span>
              <div className="flex gap-2 items-center">
                <span className="text-[8px] text-zinc-500 font-mono">10:48:12 AM</span>
                <span className="px-1.5 py-0.2 bg-green-500/10 text-green-500 text-[8px] rounded font-sans">Opened Email</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zinc-300">clara.suwignyo@corp.co.id</span>
              <div className="flex gap-2 items-center">
                <span className="text-[8px] text-zinc-500 font-mono">10:49:05 AM</span>
                <span className="px-1.5 py-0.2 bg-brand-cyan/10 text-brand-cyan text-[8px] rounded font-sans">Clicked Link</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px]">
              <span className="text-zinc-300">dani.susanto@go.id</span>
              <div className="flex gap-2 items-center">
                <span className="text-[8px] text-zinc-500 font-mono">10:50:00 AM</span>
                <span className="px-1.5 py-0.2 bg-green-500/10 text-green-500 text-[8px] rounded font-sans">Opened Email</span>
              </div>
            </div>
          </div>
        </div>

        {/* Custom open rate link tracking info */}
        <div className="bg-zinc-950 p-2 rounded border border-zinc-900 text-[9px] text-zinc-500">
          <p className="text-zinc-400">Tracking Pixel URL:</p>
          <code className="text-brand-purple block truncate mt-0.5 text-[8px]">https://tracker.aidi.co.id/pixel.gif?cid=9042&amp;uid=80421</code>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 7. Company Internal Portal Mockup
// ==========================================
export const CompanyPortalMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl">
      {/* Window Header */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-zinc-500 text-[10px] ml-2">portal.csm.indomobil.co.id</span>
        </div>
        <div className="bg-zinc-950 px-2 py-0.5 rounded text-[10px] text-zinc-500 border border-zinc-800">
          VITE_GO_STACK
        </div>
      </div>

      {/* Portal Interface */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar">
        {/* Portal Quick Links */}
        <div className="space-y-1.5">
          <span className="text-[9px] text-zinc-500 font-bold">INTEGRATED COMPANY APPLICATIONS</span>
          <div className="grid grid-cols-2 gap-2 font-sans">
            <div className="bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 p-2 rounded-lg flex items-center gap-2 transition-all">
              <span className="w-6 h-6 rounded bg-brand-cyan/25 text-brand-cyan flex items-center justify-center font-bold text-[10px]">CR</span>
              <div>
                <p className="text-[10px] text-white font-bold leading-none">CRMS App</p>
                <p className="text-[8px] text-zinc-500 mt-0.5">Fleet lease</p>
              </div>
            </div>
            <div className="bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 p-2 rounded-lg flex items-center gap-2 transition-all">
              <span className="w-6 h-6 rounded bg-brand-blue/25 text-brand-blue flex items-center justify-center font-bold text-[10px]">BI</span>
              <div>
                <p className="text-[10px] text-white font-bold leading-none">CRMS BI</p>
                <p className="text-[8px] text-zinc-500 mt-0.5">Analytics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Central SOP Document Management */}
        <div className="bg-zinc-900/20 border border-zinc-800/80 rounded-lg p-3 space-y-2">
          <span className="text-[9px] text-zinc-500 font-bold">CENTRAL DOCUMENT REPOSITORY</span>
          <div className="space-y-1.5">
            <div className="bg-zinc-950 p-2 rounded border border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={12} className="text-brand-purple" />
                <span className="text-zinc-300 text-[10px] font-sans">CSM_Sales_Playbook_2026.pdf</span>
              </div>
              <span className="text-[8px] text-zinc-600">v2.4 • 4.2 MB</span>
            </div>
            <div className="bg-zinc-950 p-2 rounded border border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileText size={12} className="text-brand-blue" />
                <span className="text-zinc-300 text-[10px] font-sans">Indomobil_IT_Security_SOP.pdf</span>
              </div>
              <span className="text-[8px] text-zinc-600">v1.1 • 1.8 MB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 8. KLIP.ID - Twibbon Platform Mockup
// ==========================================
export const KlipMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl">
      {/* Window Header */}
      <div className="bg-zinc-900 px-4 py-2.5 flex items-center justify-between border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-zinc-500 text-[10px] ml-2">klip.id/indomobil-anniversary</span>
        </div>
        <div className="bg-zinc-950 px-2 py-0.5 rounded text-[10px] text-zinc-400 border border-zinc-800">
          EDITOR_ACTIVE
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto no-scrollbar flex items-center justify-between">
        {/* Circular Avatar Photo Editor */}
        <div className="relative w-28 h-28 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
          {/* Mock User Image (Faded placeholder) */}
          <div className="absolute inset-2 rounded-full bg-zinc-800 flex items-center justify-center">
            <Users size={40} className="text-zinc-700" />
          </div>
          {/* Circular Frame Overlay (Twibbon frame border decoration) */}
          <div className="absolute inset-0 rounded-full border-4 border-dashed border-brand-cyan animate-spin-slow"></div>
          {/* Logo Badge Overlay on bottom of circle */}
          <div className="absolute bottom-1 bg-brand-cyan text-black font-sans font-bold text-[8px] px-1.5 py-0.2 rounded-full leading-none border border-zinc-950">
            CSM 2026
          </div>
        </div>

        {/* Customization controls on right */}
        <div className="flex-1 pl-4 space-y-2.5">
          <div>
            <span className="text-[8px] text-zinc-500 font-bold block">CAMPAIGN TITLE</span>
            <span className="text-white font-sans text-xs font-bold leading-tight block mt-0.5">Indomobil Group 50th Anniversary Campaign</span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[8px] text-zinc-500">
              <span>AVATAR SCALE</span>
              <span>100%</span>
            </div>
            <div className="h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full w-[60%] bg-brand-cyan rounded-full"></div>
            </div>
          </div>

          <button className="w-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/35 font-sans font-bold py-1 px-2 rounded text-[10px] text-center transition-colors">
            Export Twibbon
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 9. API Architecture Diagram Mockup
// ==========================================
export const ApiMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex flex-col shadow-2xl">
      <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500">BACKEND API ARCHITECTURE DIAGRAM</span>
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
      </div>
      <div className="flex-1 p-4 flex flex-col justify-between items-center gap-2">
        {/* Node 1: Client */}
        <div className="bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded flex items-center gap-2 w-48 justify-center">
          <Laptop size={12} className="text-zinc-500" />
          <span className="font-sans text-[10px]">Client (React/Next.js UI)</span>
        </div>
        
        {/* Vector Arrow */}
        <div className="h-3 w-[1px] bg-brand-cyan relative">
          <div className="absolute -bottom-1 -left-[3.5px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-brand-cyan"></div>
        </div>

        {/* Node 2: GoFiber REST API Router */}
        <div className="bg-zinc-900 border border-brand-cyan/50 px-3 py-1.5 rounded flex items-center gap-2 w-48 justify-center shadow-[0_0_15px_-3px_rgba(6,182,212,0.15)]">
          <Server size={12} className="text-brand-cyan" />
          <span className="font-sans text-[10px] font-bold text-white">GoFiber REST Endpoint</span>
        </div>

        {/* Vector Split Arrows */}
        <div className="flex justify-between w-40 h-3 border-x border-t border-zinc-800 relative">
          <div className="absolute -bottom-1 -left-[4.5px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-zinc-800"></div>
          <div className="absolute -bottom-1 -right-[4.5px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-zinc-800"></div>
        </div>

        {/* Node 3 & 4: Databases */}
        <div className="flex gap-4 w-full justify-center">
          <div className="bg-zinc-900/60 border border-zinc-800 px-2 py-1 rounded flex items-center gap-1.5 flex-1 max-w-[100px] justify-center">
            <Database size={10} className="text-brand-blue" />
            <span className="text-[9px]">SQL Server</span>
          </div>
          <div className="bg-zinc-900/60 border border-zinc-800 px-2 py-1 rounded flex items-center gap-1.5 flex-1 max-w-[100px] justify-center">
            <Cpu size={10} className="text-red-500" />
            <span className="text-[9px]">Redis Cache</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 10. Database / Backend Schema Mockup
// ==========================================
export const DatabaseMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-[9px] text-zinc-400 select-none flex flex-col shadow-2xl">
      <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-b border-zinc-800">
        <span className="text-[10px] text-zinc-500">SCHEMATIC: MS-SQL RELATIONAL SCHEMA</span>
        <span className="text-zinc-600 font-sans">v1.0.4</span>
      </div>
      <div className="flex-1 p-3 grid grid-cols-2 gap-3 overflow-y-auto no-scrollbar">
        {/* Table 1: rentals */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded overflow-hidden">
          <div className="bg-zinc-900 px-2 py-0.5 text-white font-bold border-b border-zinc-800">
            dbo.lease_registry
          </div>
          <div className="p-1 space-y-0.5">
            <div className="flex justify-between">
              <span className="text-brand-cyan">🔑 id</span>
              <span className="text-zinc-500">VARCHAR(36)</span>
            </div>
            <div className="flex justify-between">
              <span>👤 employee_id</span>
              <span className="text-zinc-500">VARCHAR(36)</span>
            </div>
            <div className="flex justify-between">
              <span>🚗 vehicle_id</span>
              <span className="text-zinc-500">VARCHAR(36)</span>
            </div>
            <div className="flex justify-between">
              <span>📅 start_date</span>
              <span className="text-zinc-500">DATETIME</span>
            </div>
            <div className="flex justify-between">
              <span>📈 status_id</span>
              <span className="text-zinc-500">INT</span>
            </div>
          </div>
        </div>

        {/* Table 2: vehicles */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded overflow-hidden">
          <div className="bg-zinc-900 px-2 py-0.5 text-white font-bold border-b border-zinc-800">
            dbo.vehicles
          </div>
          <div className="p-1 space-y-0.5">
            <div className="flex justify-between">
              <span className="text-brand-cyan">🔑 id</span>
              <span className="text-zinc-500">VARCHAR(36)</span>
            </div>
            <div className="flex justify-between">
              <span>🚗 model_name</span>
              <span className="text-zinc-500">VARCHAR(100)</span>
            </div>
            <div className="flex justify-between">
              <span>🏷️ plate_number</span>
              <span className="text-zinc-500">VARCHAR(20)</span>
            </div>
            <div className="flex justify-between">
              <span>⚙️ engine_cc</span>
              <span className="text-zinc-500">INT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 11. Code Editor Mockup
// ==========================================
export const CodeMockup = () => {
  return (
    <div className="w-full h-full bg-[#0d0e15] rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-[10px] text-zinc-400 select-none flex flex-col shadow-2xl">
      {/* VS Code Window Header */}
      <div className="bg-[#090a0f] px-4 py-2 flex items-center justify-between border-b border-[#1b1c26]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 block"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 block"></span>
          </div>
          <span className="text-zinc-500 text-[9px] ml-1">main.go • GoFiber Routing Backend</span>
        </div>
        <span className="text-brand-cyan font-bold text-[9px]">GOLANG 1.22</span>
      </div>
      {/* Code Text Grid */}
      <div className="p-4 flex-1 overflow-y-auto no-scrollbar bg-[#0d0e15]">
        <div className="space-y-1">
          <p><span className="text-pink-500">package</span> main</p>
          <p className="text-zinc-500">{"//"} Initialize Indomobil CRM approval service API router</p>
          <p><span className="text-pink-500">import</span> (</p>
          <p className="pl-4">&quot;github.com/gofiber/fiber/v2&quot;</p>
          <p className="pl-4">&quot;github.com/gofiber/fiber/v2/middleware/logger&quot;</p>
          <p>)</p>
          <p><span className="text-pink-500">func</span> <span className="text-blue-400">main</span>() &#123;</p>
          <p className="pl-4">app := fiber.<span className="text-yellow-400">New</span>()</p>
          <p className="pl-4">app.<span className="text-yellow-400">Use</span>(logger.<span className="text-yellow-400">New</span>())</p>
          <p className="pl-4 text-zinc-500">{"//"} Secure API Endpoint Gateway for internal HRIS portal &amp; BI data</p>
          <p className="pl-4">api := app.<span className="text-yellow-400">Group</span>(<span className="text-green-300">&quot;/api/v1&quot;</span>)</p>
          <p className="pl-4">api.<span className="text-yellow-400">Get</span>(<span className="text-green-300">&quot;/approvals&quot;</span>, func(c *fiber.Ctx) error &#123;</p>
          <p className="pl-8"><span className="text-pink-500">return</span> c.<span className="text-yellow-400">JSON</span>(fiber.Map&#123;</p>
          <p className="pl-12">&quot;status&quot;: &quot;healthy&quot;,</p>
          <p className="pl-12">&quot;claims&quot;: 10480,</p>
          <p className="pl-8">&#125;)</p>
          <p className="pl-4">&#125;)</p>
          <p className="pl-4">app.<span className="text-yellow-400">Listen</span>(<span className="text-green-300">&quot;:8080&quot;</span>)</p>
          <p>&#125;</p>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 12. Mobile Responsive UI Mockup
// ==========================================
export const MobileUiMockup = () => {
  return (
    <div className="w-full h-full bg-zinc-950 rounded-xl border border-zinc-800/80 overflow-hidden font-mono text-xs text-zinc-400 select-none flex justify-center items-center p-3 shadow-2xl">
      {/* Fake Phone shell */}
      <div className="w-[140px] h-[190px] border-4 border-zinc-800 rounded-2xl bg-zinc-950 overflow-hidden relative flex flex-col">
        {/* Notch */}
        <div className="absolute top-0 inset-x-0 h-3 bg-zinc-800 flex justify-center">
          <div className="w-10 h-1.5 rounded-full bg-zinc-950 mt-0.5"></div>
        </div>

        {/* Phone screen workspace */}
        <div className="flex-1 pt-3.5 px-2 pb-2 space-y-1.5 flex flex-col justify-between overflow-hidden">
          {/* Status indicators */}
          <div className="flex justify-between text-[6px] text-zinc-600 font-sans">
            <span>11:45 AM</span>
            <span>LTE 🔋 98%</span>
          </div>

          {/* Core Content */}
          <div className="flex-1 flex flex-col justify-center gap-1.5 font-sans">
            <span className="text-[7px] text-brand-cyan uppercase tracking-widest leading-none font-bold">CRMS Mobile</span>
            <p className="text-[10px] text-white font-extrabold leading-none">Vehicle Dispatched</p>
            
            {/* Tiny Map Placeholder */}
            <div className="h-14 bg-zinc-900 rounded border border-zinc-800 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-dot-pattern"></div>
              {/* Fake route dot */}
              <div className="w-2 h-2 rounded-full bg-brand-cyan absolute left-1/3 top-1/2 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-brand-purple absolute right-1/4 top-1/3"></div>
              <span className="text-[6px] text-zinc-500 font-mono absolute bottom-1 right-1">GPS LINKED</span>
            </div>

            {/* Tiny Details */}
            <div className="bg-zinc-900/60 p-1 rounded border border-zinc-800/50 flex justify-between items-center text-[7px]">
              <span className="text-zinc-400 leading-none">Plate ID:</span>
              <span className="text-white font-mono font-bold leading-none">B 9042 CSM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
