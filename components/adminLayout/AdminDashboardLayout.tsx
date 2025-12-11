"use client";

import { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminTopNav from "./AdminTopNav";
import "../../styles/layout/DashboardLayout.css";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export default function AdminDashboardLayout({
  children,
  currentPage,
  onNavigate,
  onLogout,
  darkMode,
  onToggleDarkMode,
}: AdminDashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div style={{ width: '100%' }} className={`dashboard-container ${darkMode ? "dark-mode" : ""}`}>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <AdminSidebar
        currentPage={currentPage}
        onNavigate={onNavigate}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        darkMode={darkMode}
      />

      {/* MAIN */}
      <div style={{ width: '80%' }} className="main-content">
        <AdminTopNav
          onMenuClick={() => setSidebarOpen(!sidebarOpen)}
          onNavigate={onNavigate}
          onLogout={onLogout}
          darkMode={darkMode}
          onToggleDarkMode={onToggleDarkMode}
        />
        <div style={{ maxHeight: '90vh', overflowY: 'auto' }} className="page-content">{children}</div>
      </div>
    </div>
  );
}
