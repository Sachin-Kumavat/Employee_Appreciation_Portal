"use client";

import { useState } from 'react';
import { Trophy, Lock, TrendingUp, Award, Zap } from 'lucide-react';
import "../../styles/BadgesPoints/BadgesPoints.css"

// Dummy Data
const currentUser = {
    points: 150,
};

const mockBadges = [
    { id: 1, name: 'Achiever', icon: <Trophy />, description: 'You completed your first task!', unlocked: true, unlockedDate: '2023-10-01', pointsRequired: 50 },
    { id: 2, name: 'Explorer', icon: <Award />, description: 'You explored the platform.', unlocked: true, unlockedDate: '2023-09-15', pointsRequired: 100 },
    { id: 3, name: 'Contributor', icon: <TrendingUp />, description: 'You contributed valuable content.', unlocked: false, unlockedDate: null, pointsRequired: 200 },
    { id: 4, name: 'Master', icon: <Zap />, description: 'You are the master of the platform!', unlocked: false, unlockedDate: null, pointsRequired: 300 },
];

const topContributors = [
    { name: 'John Doe', points: 500 },
    { name: 'Jane Smith', points: 450 },
    { name: 'Alice Johnson', points: 400 },
    { name: 'Bob Brown', points: 350 },
];

export function BadgesPoints() {
    const [showUnlockModal, setShowUnlockModal] = useState(false);
    const unlockedBadges = mockBadges.filter(b => b.unlocked);
    const lockedBadges = mockBadges.filter(b => !b.unlocked);
    const nextBadge = lockedBadges[0];
    const pointsToNext = nextBadge ? nextBadge.pointsRequired - currentUser.points : 0;
    const progressPercent = nextBadge
        ? Math.min((currentUser.points / nextBadge.pointsRequired) * 100, 100)
        : 100;

    return (
        <div className="badges-container">
            {/* Header */}
            <div className="header">
                <h1>Your Badges & Gamification</h1>
                <p>Track your progress and unlock achievements</p>
            </div>

            {/* Current Progress */}
            <div className="progress-card">
                <div className="progress-content">
                    <div className="current-points">
                        <p>Your Current Points</p>
                        <p className="points">{currentUser.points}</p>
                        <p>
                            {pointsToNext > 0
                                ? `${pointsToNext} points to next badge`
                                : 'All badges unlocked! 🎉'
                            }
                        </p>
                    </div>
                    <div className="progress-bar-container">
                        {nextBadge && (
                            <>
                                <div className="progress-header">
                                    <span>{`Progress to ${nextBadge.name}`}</span>
                                    <span>{Math.round(progressPercent)}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div
                                        className="progress-bar-fill"
                                        style={{ width: `${progressPercent}%` }}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Points Rules */}
            <div className="points-rules">
                <h2>
                    <Zap className="icon" />
                    How to Earn Points
                </h2>
                <div className="points-cards">
                    <div className="points-card green">
                        <div className="points-header">
                            <span>Approved Achievement</span>
                            <span>+10</span>
                        </div>
                        <p>When your achievement gets approved</p>
                    </div>
                    <div className="points-card blue">
                        <div className="points-header">
                            <span>Received Appreciation</span>
                            <span>+3</span>
                        </div>
                        <p>Each appreciation you receive</p>
                    </div>
                    <div className="points-card purple">
                        <div className="points-header">
                            <span>Post Reaction</span>
                            <span>+2</span>
                        </div>
                        <p>When someone reacts to your post</p>
                    </div>
                </div>
            </div>

            {/* Badge Gallery */}
            <div className="badge-gallery">
                <h2>
                    <Trophy className="icon" />
                    Badge Gallery
                </h2>

                {/* Unlocked Badges */}
                <div className="badge-category">
                    <h3>Unlocked ({unlockedBadges.length})</h3>
                    <div className="badge-grid">
                        {unlockedBadges.map((badge) => (
                            <div key={badge.id} className="badge-item" onClick={() => setShowUnlockModal(true)}>
                                <div className="badge-content">
                                    <div className="badge-icon">{badge.icon}</div>
                                    <h4>{badge.name}</h4>
                                    <p>{badge.description}</p>
                                    {badge.unlockedDate && (
                                        <p className="unlocked-date">
                                            {new Date(badge.unlockedDate).toLocaleDateString()}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Locked Badges */}
                <div className="badge-category">
                    <h3>Locked ({lockedBadges.length})</h3>
                    <div className="badge-grid">
                        {lockedBadges.map((badge) => (
                            <div key={badge.id} className="badge-item locked">
                                <div className="badge-content">
                                    <div className="badge-icon grayscale">{badge.icon}</div>
                                    <Lock className="lock-icon" />
                                </div>
                                <h4>{badge.name}</h4>
                                <p>{badge.description}</p>
                                <p>{badge.pointsRequired} points required</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
