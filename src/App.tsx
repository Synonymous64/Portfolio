
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy, useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazily load the CustomCursor to prevent it from blocking rendering
const CustomCursor = lazy(() => import("./components/CustomCursor"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Clear App.css styles to prevent conflicts
import "./App.css";

const App = () => {
  const [cursorLoaded, setCursorLoaded] = useState(false);
  
  useEffect(() => {
    // Apply dark mode based on user preference
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Delay cursor loading to ensure main content renders first
    const timer = setTimeout(() => {
      setCursorLoaded(true);
    }, 1500);
    
    // Set up intersection observer for section animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
    
    return () => {
      clearTimeout(timer);
      // Clean up observer
      observer.disconnect();
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative overflow-x-hidden min-h-screen">
          <Toaster />
          <Sonner />
          {cursorLoaded && (
            <Suspense fallback={null}>
              {/* <CustomCursor /> */}
            </Suspense>
          )}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
