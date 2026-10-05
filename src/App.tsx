import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Lightbox } from "./components/Lightbox";
import { FloatingTelegram } from "./components/FloatingTelegram";
import { AuditionModal } from "./components/AuditionModal";
import { ArticleModal } from "./components/ArticleModal";

import { Home } from "./pages/Home";
import { MaleModels } from "./pages/MaleModels";
import { FemaleModels } from "./pages/FemaleModels";
import { KidModels } from "./pages/KidModels";
import { CharacterArtists } from "./pages/CharacterArtists";
import { Pricing } from "./pages/Pricing";
import { Gallery } from "./pages/Gallery";
import { Auditions } from "./pages/Auditions";
import { Articles } from "./pages/Articles";
import { Contact } from "./pages/Contact";
import { Disclaimer } from "./pages/Disclaimer";

import { GalleryPhoto, PostItem } from "./data/siteData";

const getPathFromLocation = (): string => {
  if (typeof window === "undefined") return "/";
  // Check for GitHub Pages 404 query redirect
  const params = new URLSearchParams(window.location.search);
  const pParam = params.get("p");
  if (pParam) {
    const clean = "/" + decodeURIComponent(pParam).replace(/^\//, "");
    return clean;
  }
  // Check for hash routing fallback
  if (window.location.hash) {
    const hash = window.location.hash.replace(/^#\/?/, "");
    if (hash) return "/" + hash.replace(/\/$/, "");
  }
  // Check known routes ending with
  const fullPath = (window.location.pathname || "/").replace(/\/$/, "");
  const knownRoutes = [
    "/male-models",
    "/female-models",
    "/kid-models",
    "/character-artists",
    "/portfolio-price",
    "/gallery",
    "/audition-info",
    "/articles",
    "/contact",
    "/disclaimer"
  ];
  for (const r of knownRoutes) {
    if (fullPath.endsWith(r)) {
      return r;
    }
  }
  return "/";
};

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => getPathFromLocation());

  // Lightbox state
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number>(0);
  const [photoList, setPhotoList] = useState<GalleryPhoto[]>([]);

  // Audition modal state
  const [activeAudition, setActiveAudition] = useState<PostItem | null>(null);

  // Article modal state
  const [activeArticle, setActiveArticle] = useState<PostItem | null>(null);

  // Listen to popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getPathFromLocation());
    };
    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  const navigate = (path: string) => {
    const cleanPath = path === "" || path === "/" ? "/" : path.replace(/\/$/, "");
    if (cleanPath !== currentPath) {
      // If we are on GitHub Pages subfolder, use hash or pushState appropriately
      try {
        window.history.pushState({}, "", cleanPath);
      } catch (e) {
        window.location.hash = cleanPath;
      }
      setCurrentPath(cleanPath);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleOpenLightbox = (
    photo: GalleryPhoto,
    index?: number,
    list?: GalleryPhoto[]
  ) => {
    setActivePhoto(photo);
    if (list && list.length > 0) {
      setPhotoList(list);
      setActivePhotoIndex(index !== undefined ? index : list.findIndex((p) => p.id === photo.id));
    } else {
      setPhotoList([photo]);
      setActivePhotoIndex(0);
    }
  };

  const handleNextPhoto = () => {
    if (photoList.length > 1) {
      const nextIdx = (activePhotoIndex + 1) % photoList.length;
      setActivePhotoIndex(nextIdx);
      setActivePhoto(photoList[nextIdx]);
    }
  };

  const handlePrevPhoto = () => {
    if (photoList.length > 1) {
      const prevIdx = (activePhotoIndex - 1 + photoList.length) % photoList.length;
      setActivePhotoIndex(prevIdx);
      setActivePhoto(photoList[prevIdx]);
    }
  };

  // Render page by currentPath
  const renderCurrentPage = () => {
    switch (currentPath) {
      case "/":
        return <Home navigate={navigate} openLightbox={handleOpenLightbox} />;
      case "/male-models":
        return <MaleModels navigate={navigate} openLightbox={handleOpenLightbox} />;
      case "/female-models":
        return <FemaleModels navigate={navigate} openLightbox={handleOpenLightbox} />;
      case "/kid-models":
        return <KidModels navigate={navigate} openLightbox={handleOpenLightbox} />;
      case "/character-artists":
        return <CharacterArtists navigate={navigate} openLightbox={handleOpenLightbox} />;
      case "/portfolio-price":
        return <Pricing />;
      case "/gallery":
        return <Gallery openLightbox={handleOpenLightbox} />;
      case "/audition-info":
        return <Auditions openAudition={(post) => setActiveAudition(post)} />;
      case "/articles":
        return <Articles openArticle={(post) => setActiveArticle(post)} />;
      case "/contact":
        return <Contact />;
      case "/disclaimer":
        return <Disclaimer />;
      default:
        return <Home navigate={navigate} openLightbox={handleOpenLightbox} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0f17] text-slate-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Top Header Navigation */}
      <Header currentPath={currentPath} navigate={navigate} />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Floating Telegram Action & Scroll to Top */}
      <FloatingTelegram />

      {/* Global Lightbox Viewer */}
      <Lightbox
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onNext={photoList.length > 1 ? handleNextPhoto : undefined}
        onPrev={photoList.length > 1 ? handlePrevPhoto : undefined}
        currentIndex={activePhotoIndex}
        total={photoList.length}
      />

      {/* Audition Details Modal */}
      <AuditionModal
        post={activeAudition}
        onClose={() => setActiveAudition(null)}
      />

      {/* Article Details Modal */}
      <ArticleModal
        post={activeArticle}
        onClose={() => setActiveArticle(null)}
      />
    </div>
  );
}
