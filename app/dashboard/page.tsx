"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import PeerAppreciation from "../appreciation/page";
import PeerAppreciationForm from "@/components/PeerAppreciationForm/PeerAppreciationForm";
import { useState } from "react";
import { redirect } from "next/navigation";
import { BadgesPoints } from "@/components/BadgesPoints/BadgesPoints";
import { useRouter } from "next/router";
type Page = 'login' | 'dashboard' | 'achievements' | 'add-achievement' | 'manager-review' | 'feed' | 'profile' | 'badges' | 'admin' | 'notifications';

export default function DashboardPage() {
    // const router = useRouter();
    const [darkMode, setDarkMode] = useState(false);
    const [currentPage, setCurrentPage] = useState('');

    const navigateTo=(page: string)=>{
        setCurrentPage(page)
        // router.push(`/${page}`);
        // window.location.href=`/${page}`
    }

    const renderPage = () => {
        switch(currentPage){
            case 'appreciation':
                return <PeerAppreciationForm />
            case 'badges':
                return <BadgesPoints />
            default:
                return <h1 className={darkMode ? "text-white" : "text-black"}>Dashboard</h1>
        }
    }

    return (
        <DashboardLayout
            currentPage={currentPage ?? 'dashboard'}
            darkMode={darkMode}
            onToggleDarkMode={() => setDarkMode(!darkMode)}
            onNavigate={navigateTo}
            onLogout={() => window.location.href = "/"}
        >
            {renderPage()}
        </DashboardLayout>
    );
}
