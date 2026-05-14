'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function TrackerInner() {
  const searchParams = useSearchParams();
  const trackedRef = useRef(false);

  useEffect(() => {
    const refCode = searchParams.get('ref');
    
    // Only track if there's a ref code, we haven't tracked it in this session, and it's not their own ref code
    if (refCode && !trackedRef.current) {
      const myCode = localStorage.getItem('fantastic_ref_code');
      const alreadyTracked = sessionStorage.getItem('tracked_refs') || '';
      
      if (refCode !== myCode && !alreadyTracked.includes(refCode)) {
        trackedRef.current = true;
        
        // Mark as tracked for this session so we don't spam the API on navigation
        sessionStorage.setItem('tracked_refs', alreadyTracked + ',' + refCode);
        
        // Ping the API to increment the click
        fetch('/api/referral', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ refCode })
        }).catch(err => console.error('Referral tracking failed', err));
      }
    }
  }, [searchParams]);

  return null;
}

export default function ReferralTracker() {
  return (
    <Suspense fallback={null}>
      <TrackerInner />
    </Suspense>
  );
}
