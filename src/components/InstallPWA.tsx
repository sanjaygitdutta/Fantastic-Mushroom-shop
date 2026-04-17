import { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
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

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  if (!isInstallable) return null;

  return (
    <div className="mt-8 pt-8 border-t border-forest-800/50 flex flex-col items-center">
      <div className="bg-gradient-to-r from-forest-800 to-moss-900 p-6 rounded-2xl border border-forest-700 w-full max-w-md text-center shadow-lg">
        <h4 className="text-white font-bold mb-2 font-display">Get the Fantastic Food App</h4>
        <p className="text-forest-300 text-sm mb-4">Install our app for a faster native experience on your phone.</p>
        <button 
          onClick={handleInstallClick}
          className="w-full bg-amber-500 hover:bg-amber-600 text-forest-900 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
        >
          <Download className="w-4 h-4" /> Install App to Home Screen
        </button>
      </div>
    </div>
  );
}
