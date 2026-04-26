'use client';
import { Suspense } from 'react';
import NutritionInfo from '../../../views/NutritionInfo';
export default function Page() {
  return <Suspense fallback={<div className="min-h-screen" />}><NutritionInfo /></Suspense>;
}
