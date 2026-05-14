'use client';
import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    // Check if the event was already captured globally by index.html
    const existingPrompt = (window as any).deferredPrompt;
    if (existingPrompt) {
      setDeferredPrompt(existingPrompt);
      setIsInstallable(true);
    }

    const handleBeforeInstallPrompt = (e: any) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      (window as any).deferredPrompt = e;
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    window.addEventListener('appinstalled', () => {
      // Clear the deferredPrompt so it can be garbage collected
      setDeferredPrompt(null);
      setIsInstallable(false);
      console.log('PWA was installed');
    });

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const [showInstructions, setShowInstructions] = useState(false);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // Show the install prompt
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log(`User response to the install prompt: ${outcome}`);
      setDeferredPrompt(null);
      setIsInstallable(false);
    } else {
      setShowInstructions(!showInstructions);
    }
  };

  return (
    <div className="mt-8 pt-8 border-t border-forest-800/50 flex flex-col items-center">
      <div className="bg-linear-to-r from-forest-800 to-moss-900 p-6 rounded-2xl border border-forest-700 w-full max-w-md text-center shadow-lg">
        <h4 className="text-white font-bold mb-2 font-display">Get the Fantastic Food App</h4>
        <p className="text-forest-300 text-sm mb-4">Install our app for a faster native experience on your phone.</p>
        
        {showInstructions && !isInstallable ? (
          <div className="bg-forest-900/50 p-4 rounded-xl border border-forest-600/50 text-left mb-4">
            <p className="text-forest-200 text-xs font-medium mb-2">How to install:</p>
            <ul className="text-forest-300 text-xs list-disc pl-4 space-y-1">
              <li><strong>iOS (Safari):</strong> Tap the <strong>Share</strong> button at the bottom, then scroll and tap <strong>Add to Home Screen</strong>.</li>
              <li><strong>Android/Chrome:</strong> Tap the 3-dot menu and select <strong>Install app</strong> or <strong>Add to Home screen</strong>.</li>
            </ul>
          </div>
        ) : null}

        <button 
          onClick={handleInstallClick}
          className="w-full bg-amber-500 hover:bg-amber-600 text-forest-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
        >
          <Download className="w-4 h-4" /> 
          {isInstallable ? 'Install App to Home Screen' : showInstructions ? 'Hide Instructions' : 'How to Install App'}
        </button>
      </div>
    </div>
  );
}
