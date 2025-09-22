import { useEffect } from "react";              // ← add this
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import News from "./pages/News";
import Blog from "./pages/Blog";
import SRTalk from "./pages/SRTalk";
import NewsLetter from "./pages/NewsLetter";
import Index from "./pages/Index";
import Team from "./pages/Team";
import ResearchPaper from "./pages/ResearchPaper";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PublicationsPage from "./pages/PublicationPage";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.title = "ETIL - Research Team Page"; 
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/paper/:id" element={<ResearchPaper />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/publications/:topic" element={<PublicationsPage />}/>
                  <Route path="/publications" element={<PublicationsPage />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/sr-talk" element={<SRTalk />} />
                  <Route path="/newsletter" element={<NewsLetter />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
