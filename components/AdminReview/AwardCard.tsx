
'use client';

import React from 'react';
import '../../styles/AdminReview/AwardCard.css';
import { Calendar, FileChartColumn } from "lucide-react";

type AwardCardProps = {
  title: string;
  status: string;
  submittedBy: string;
  description: string;
  date: string; // e.g., 'Nov 12, 2025'
  tag?: string; // e.g., 'Leadership'
  pdfUrl?: string; // e.g., '/migration_report.pdf'
  avatarUrl?: string; // e.g., '/avatar.png'
  onApprove?: () => void;
  onReject?: () => void;
};

const StatusChip: React.FC<{ label: string }> = ({ label }) => {
  return <span className={'statusChip'}>{label}</span>;
};

export default function AwardCard({
  title,
  status,
  submittedBy,
  description,
  date,
  tag,
  pdfUrl,
  avatarUrl = '/avatar.png',
  onApprove,
  onReject,
}: AwardCardProps) {
  return (
    <section className={'card'} role="article" aria-label={`${title} card`}>
      {/* Header */}
      <header className={'header'}>
        <div className={'leftHeader'}>
          <img
            src={avatarUrl}
            alt={`${submittedBy} avatar`}
            className={'avatar'}
            loading="lazy"
          />
          <div className={'titleBlock'}>
            <h3 className={'title'}>{title}</h3>
            <p className={'subtitle'}>Submitted by {submittedBy}</p>
          </div>
        </div>
        <StatusChip label={status} />
      </header>

      {/* Description + Tag + PDF */}
      <div className={'contentRow'}>
        <p className={'description'}>{description}</p>

        <div className={'rightMeta'}>
          {tag && <span className={'tag'}>{tag}</span>}

          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={'pdfLink'}
              aria-label="Open attached PDF in a new tab"
            >
              {/* simple icon (unicode) or replace with svg */}
              <span className={'pdfIcon'} ><FileChartColumn size={15} /></span>
              <span className={'pdfName'}>
                {pdfUrl.split('/').pop()}
              </span>
            </a>
          )}
        </div>
      </div>

      {/* Divider */}
      <hr className={'divider'} />

      {/* Footer: date + actions */}
      <footer className={'footer'}>
        <div className={'footerLeft'}>
            {/* <img className={'calendarIcon'} aria-hidden="true"><Calendar/></img> */}
          <span className={'calendarIcon'} aria-hidden="true"><Calendar size={17}/></span>
          <span className={'dateText'}>{date}</span>
        </div>

        <div className={'actions'}>
          <button
            type="button"
            className={`${'btn'} ${'btnApprove'}`}
            onClick={onApprove}
          >
            ✅ <span>Approve</span>
          </button>
          <button
            type="button"
            className={`${'btn'} ${'btnReject'}`}
            onClick={onReject}
          >
            ❌ <span>Reject</span>
          </button>
        </div>
      </footer>
    </section>
  );
}
