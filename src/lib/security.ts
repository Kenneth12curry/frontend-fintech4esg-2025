/**
 * FinTech4ESG - ReadyCash Platform
 * Copyright © 2025 Carlson Capital Denmark. All Rights Reserved.
 * CONFIDENTIAL AND PROPRIETARY
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 */

/**
 * Security module for ReadyCash Platform
 * Simplified version for production deployment
 */

export function initSecurity() {
  if (typeof window === 'undefined') return;

  const isProduction = process.env.NODE_ENV === 'production';

  // Basic content protection
  document.addEventListener('contextmenu', (e) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return true;
    }
    e.preventDefault();
    return false;
  });

  // Allow input field selection but prevent general content selection
  document.addEventListener('selectstart', (e) => {
    const target = e.target as HTMLElement;
    if (
      target.tagName === 'INPUT' || 
      target.tagName === 'TEXTAREA' ||
      target.classList.contains('e-wallet-simulator') ||
      target.classList.contains('ussd-simulator') ||
      target.classList.contains('financial-product-card') ||
      target.classList.contains('investor-data') ||
      target.classList.contains('budget-wizard')
    ) {
      return true;
    }
    e.preventDefault();
    return false;
  });

  // Simple copy protection
  document.addEventListener('copy', (e) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
      return true;
    }
    e.preventDefault();
    return false;
  });

  // Console warning
  console.warn('This application contains security measures against unauthorized use.');
}

/**
 * Show a warning message when protection is triggered - disabled for mobile experience
 */
function showWarning() {
  console.log("Security trigger detected but popup disabled for better mobile experience");
}