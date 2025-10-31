'use client';

import Link from 'next/link';

export default function SubHeader() {
  return (
    <div className="px-5 py-2.5 flex flex-wrap items-center justify-between gap-2.5 min-h-(--sidebar-header-height) border-b border-border shrink-0 bg-muted/40">
      <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-1 lg:gap-5">
        <ol className="kt-breadcrumb">
          <li className="kt-breadcrumb-item">
            <Link className="kt-breadcrumb-link" href="/">Home</Link>
          </li>
          <li className="kt-breadcrumb-separator">/</li>
          <li className="kt-breadcrumb-item">
            <Link className="kt-breadcrumb-link" href="/dashboard">General</Link>
          </li>
          <li className="kt-breadcrumb-separator">/</li>
          <li className="kt-breadcrumb-item">
            <span className="kt-breadcrumb-page">Public Profiles</span>
          </li>
        </ol>
      </div>
      <div className="flex items-center gap-2.5">
        <button className="kt-btn kt-btn-icon kt-btn-outline" type="button">
          <i className="ki-filled ki-coffee"></i>
        </button>
        <button className="kt-btn kt-btn-icon kt-btn-outline" type="button">
          <i className="ki-filled ki-bookmark"></i>
        </button>
        <button className="kt-btn kt-btn-icon kt-btn-outline" type="button">
          <i className="ki-filled ki-pin"></i>
        </button>
        <div className="kt-input">
          <i className="ki-filled ki-magnifier"></i>
          <input className="kt-input" placeholder="Email address" type="text" />
        </div>
      </div>
    </div>
  );
}
