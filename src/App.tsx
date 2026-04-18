import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import AIAssistant from './components/AIAssistant';
import Footer from './components/Footer';
import { WishlistProvider } from './context/WishlistContext';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const Compare = lazy(() => import('./pages/Compare'));
const MushroomShop = lazy(() => import('./pages/MushroomShop'));
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
const FoodItemPage = lazy(() => import('./pages/FoodItemPage'));
const BasketCalculator = lazy(() => import('./pages/BasketCalculator'));
const MealCostCalculator = lazy(() => import('./pages/MealCostCalculator'));
const Coupons = lazy(() => import('./pages/Coupons'));
const CityPage = lazy(() => import('./pages/CityPage'));
const RecipePage = lazy(() => import('./pages/RecipePage'));
const ChefAika = lazy(() => import('./pages/ChefAika'));
const SitemapDirectory = lazy(() => import('./pages/SitemapDirectory'));

const MealPlanner = lazy(() => import('./pages/MealPlanner'));
const SavedLists = lazy(() => import('./pages/SavedLists'));
const SeasonalGuide = lazy(() => import('./pages/SeasonalGuide'));
const FestivalPlanner = lazy(() => import('./pages/FestivalPlanner'));
const NutritionInfo = lazy(() => import('./pages/NutritionInfo'));
const FoodScore = lazy(() => import('./pages/FoodScore'));
const CommunityFeed = lazy(() => import('./pages/CommunityFeed'));

// Admin Pages
const AdminRoute = lazy(() => import('./pages/admin/AdminRoute'));
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const Products = lazy(() => import('./pages/admin/Products'));
const Orders = lazy(() => import('./pages/admin/Orders'));
const ManageProducts = lazy(() => import('./pages/admin/ManageProducts'));
const ManageSubscriptions = lazy(() => import('./pages/admin/ManageSubscriptions'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin')); // Isolated admin login

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-cream-100">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-forest-200 border-t-forest-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-forest-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ProductProvider>
        <AuthProvider>
          <WishlistProvider>
          <div className="min-h-screen flex flex-col">
            <Toaster position="top-center" />
            <Navbar />
            <div className="flex-grow">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} />
                  <Route path="/compare" element={<Compare />} />
                  <Route path="/mushroom-shop" element={<MushroomShop />} />
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
                  <Route path="/food/:item" element={<FoodItemPage />} />
                  <Route path="/basket" element={<BasketCalculator />} />
                  <Route path="/meal-calculator" element={<MealCostCalculator />} />
                  <Route path="/coupons" element={<Coupons />} />
                  <Route path="/city/:citySlug" element={<CityPage />} />
                  <Route path="/recipe/:recipeId" element={<RecipePage />} />
                  <Route path="/chef-aika" element={<ChefAika />} />
                  <Route path="/directory" element={<SitemapDirectory />} />
                  <Route path="/meal-planner" element={<MealPlanner />} />
                  <Route path="/saved" element={<SavedLists />} />
                  <Route path="/seasonal" element={<SeasonalGuide />} />
                  <Route path="/festival" element={<FestivalPlanner />} />
                  <Route path="/health" element={<NutritionInfo />} />
                  <Route path="/savings" element={<FoodScore />} />
                  <Route path="/community" element={<CommunityFeed />} />

                  {/* Admin Routes */}
                  <Route path="/admin/login" element={<AdminLogin />} />
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
            <AIAssistant />
          </div>
        </WishlistProvider>
       </AuthProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;


