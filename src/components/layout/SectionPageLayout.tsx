"use client";

import BackButton from "../common/BackButton";

export default function SectionPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-20">
      <BackButton />
      {children}
    </div>
  );
}
