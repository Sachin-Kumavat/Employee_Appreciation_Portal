"use client";
import React from 'react'
import { useState } from 'react';
import AwardCard from './AwardCard';


export const awardCards = [
  {
    title: 'Team Leadership Award',
    status: 'Pending',
    submittedBy: 'John Doe',
    description:
      'Led a team of 8 developers to successfully migrate legacy systems to cloud infrastructure.',
    date: 'Nov 12, 2025',
    tag: 'Leadership',
    pdfUrl: '/migration_report.pdf',
    avatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    title: 'Innovation Excellence',
    status: 'Approved',
    submittedBy: 'Alice Smith',
    description:
      'Developed a cutting-edge AI solution that reduced operational costs by 30%.',
    date: 'Oct 05, 2025',
    tag: 'Innovation',
    pdfUrl: '/ai_solution.pdf',
    avatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    title: 'Customer Success Award',
    status: 'Rejected',
    submittedBy: 'Robert Brown',
    description:
      'Implemented a new customer onboarding process that improved retention rates.',
    date: 'Sep 18, 2025',
    tag: 'Customer Success',
    pdfUrl: '/onboarding_report.pdf',
    avatarUrl: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    title: 'Operational Efficiency',
    status: 'Submitted',
    submittedBy: 'Emily Davis',
    description:
      'Optimized supply chain workflows resulting in a 15% increase in delivery speed.',
    date: 'Aug 22, 2025',
    tag: 'Operations',
    pdfUrl: '/efficiency_report.pdf',
    avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    title: 'Quality Assurance Award',
    status: 'Draft',
    submittedBy: 'Michael Johnson',
    description:
      'Introduced automated testing frameworks that reduced bugs by 40%.',
    date: 'Jul 10, 2025',
    tag: 'Quality',
    pdfUrl: '/qa_report.pdf',
    avatarUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
];


export function AdminReviewLanding() {
    return (
        <div style={{ padding: 24 }}>
            <div>
                <h1 style={{ color: "#171717" }}>Manager Review Queue</h1>
                <p style={{ color: "#525252", marginTop: "0.25rem" }}>
                    Review and approve pending achievements
                </p>
            </div>

            <div>
                {
                    awardCards.map((item, index) => (
                        <AwardCard
                            key={index}
                            title={item.title}
                            status={item.status}
                            submittedBy={item.submittedBy}
                            description={item.description}
                            date={item.date}
                            tag={item.tag}
                            pdfUrl={item.pdfUrl}
                            avatarUrl={item.avatarUrl}
                            onApprove={() => { }}
                            onReject={() => { }}
                        />
                    ))
                }


            </div>


        </div>
    )
}

export default AdminReviewLanding
