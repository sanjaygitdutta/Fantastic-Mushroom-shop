import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import AIChatWidget from './components/AIChatWidget';
import VoiceAssistant from './components/VoiceAssistant';
import Footer from './components/Footer';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import { Mic } from 'lucide-react';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const CreateProfile = lazy(() => import('./pages/CreateProfile'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Profile = lazy(() => import('./pages/Profile'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const B2B = lazy(() => import('./pages/B2B'));
const Subscription = lazy(() => import('./pages/Subscription'));
const Recipes = lazy(() => import('./pages/Recipes'));
const RecipeDetails = lazy(() => import('./pages/RecipeDetails'));
const About = lazy(() => import('./pages/About'));

// Category Pages
const FreshMushrooms = lazy(() => import('./pages/categories/FreshMushrooms'));
const DriedMushrooms = lazy(() => import('./pages/categories/DriedMushrooms'));
const SnacksReadyToEat = lazy(() => import('./pages/categories/SnacksReadyToEat'));
const ReadyToCook = lazy(() => import('./pages/categories/ReadyToCook'));
const SpicesSauces = lazy(() => import('./pages/categories/SpicesSauces'));
const GrowLearn = lazy(() => import('./pages/categories/GrowLearn'));
const GiftsBundles = lazy(() => import('./pages/categories/GiftsBundles'));
const MerchFun = lazy(() => import('./pages/categories/MerchFun'));

// Admin Pages
const AdminRoute = lazy(() => import('./pages/admin/AdminRoute'));
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Products = lazy(() => import('./pages/admin/Products'));
const Orders = lazy(() => import('./pages/admin/Orders'));
const ManageProducts = lazy(() => import('./pages/admin/ManageProducts'));
const ManageSubscriptions = lazy(() => import('./pages/admin/ManageSubscriptions'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-mushroom-50">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-mushroom-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  const [showVoiceAssistant, setShowVoiceAssistant] = useState(false);

  return (
    <Router>
      <AuthProvider>
        <WishlistProvider>
          <div className="min-h-screen flex flex-col">
            <Toaster position="top-center" />
            <Navbar />
            <div className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/create-profile" element={<CreateProfile />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/b2b" element={<B2B />} />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route path="/recipes" element={<Recipes />} />
                  <Route path="/recipes/:id" element={<RecipeDetails />} />
                  <Route path="/about" element={<About />} />

                  {/* Category Pages */}
                  <Route path="/category/fresh" element={<FreshMushrooms />} />
                  <Route path="/category/dried" element={<DriedMushrooms />} />
                  <Route path="/category/snacks" element={<SnacksReadyToEat />} />
                  <Route path="/category/ready-to-cook" element={<ReadyToCook />} />
                  <Route path="/category/spices" element={<SpicesSauces />} />
                  <Route path="/category/grow-learn" element={<GrowLearn />} />
                  <Route path="/category/gifts" element={<GiftsBundles />} />
                  <Route path="/category/merch" element={<MerchFun />} />

                  {/* Admin Routes */}
                  <Route element={<AdminRoute />}>
                    <Route path="/admin" element={<AdminLayout />}>
                      <Route index element={<Dashboard />} />
                      <Route path="products" element={<Products />} />
                      <Route path="orders" element={<Orders />} />
                      <Route path="manage-products" element={<ManageProducts />} />
                      <Route path="manage-subscriptions" element={<ManageSubscriptions />} />
                    </Route>
                  </Route>
                </Routes>
              </Suspense>
            </div>
            <Cart />
            <Footer />
            <AIChatWidget />

            {/* Alexa-style Voice Assistant Floating Button */}
            <button
              onClick={() => setShowVoiceAssistant(true)}
              className="fixed bottom-24 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40 group"
              title="Shroom - AI Voice Assistant"
            >
              <Mic className="w-8 h-8 text-white" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse border-2 border-white"></span>

              {/* Pulsing ring animation */}
              <span className="absolute inset-0 rounded-full bg-blue-400 opacity-75 animate-ping"></span>
            </button>

            {/* Voice Assistant Modal */}
            {showVoiceAssistant && (
              <VoiceAssistant onClose={() => setShowVoiceAssistant(false)} />
            )}
          </div>
        </WishlistProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;


