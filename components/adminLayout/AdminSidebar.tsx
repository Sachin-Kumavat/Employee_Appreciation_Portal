"use client";

import "../../styles/layout/Sidebar.css";
import {
  LayoutDashboard,
  Award,
  Plus,
  CheckSquare,
  Heart,
  User,
  Trophy,
  BarChart3,
  X,
  Newspaper,
  Badge
} from "lucide-react";

interface AdminSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

export default function AdminSidebar({
  currentPage,
  onNavigate,
  isOpen,
  onClose,
  darkMode,
}: AdminSidebarProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    // { id: "achievements", label: "Achievements", icon: Award },
    { id: "appreciation", label: "Peer Appreciation", icon: Heart },
    { id: "review", label: "Admin Review", icon: CheckSquare },
    // { id: "badges", label: "Badges & Points", icon: Trophy },
    // { id: "feed", label: "Appreciation Feed", icon: Newspaper },
    { id: "badgeSummary", label: "Badge Summary", icon: Badge },
    // { id: "analytics", label: "Admin Analytics", icon: BarChart3 },
    // { id: "add-achievement", label: "Add Achievement", icon: Plus },
    // { id: "profile", label: "My Profile", icon: User },
  ];

  return (
    <aside
      className={`sidebar ${darkMode ? "dark" : ""} ${
        isOpen ? "open" : "closed"
      }`}
    >
      <div className="sidebar-header">
        <div className="logo">
          <div className="logo-icon">🏆</div>
          <div className="logo-text">
            <h2 className={`${darkMode ? 'logo-title-dark' : ''}`}>Recognition</h2>
            <p>Portal</p>
          </div>
        </div>

        <button className="close-btn" onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      <nav className="nav">
        {menuItems.map((item) => {
          const Icon = item.icon;
          console.log("item--------->", item)
          console.log("currentPage--------->", currentPage)
          currentPage = currentPage ? currentPage : 'dashboard'
          return (
            <button
              key={item.id}
              className={`nav-item ${
                currentPage === item.id ? "active" : ""
              }`}
              onClick={() => {
                onNavigate(item.id);
                onClose();
              }}
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* <footer className="sidebar-footer">
        <p>© 2025 Your Company</p>
      </footer> */}
    </aside>
  );
}
