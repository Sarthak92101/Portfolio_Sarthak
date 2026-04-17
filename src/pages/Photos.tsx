import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Download, Heart, RotateCw, Search, Share2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  date?: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/photos/Snapchat%20for%20Web%202026-4-4%20at%2012_59_14%20pm.png",
    alt: "Personal portrait",
    title: "Self Portrait",
    category: "Portrait",
    date: "April 2026"
  },
  {
    id: 2,
    src: "/photos/Snapchat-1298872259.jpg",
    alt: "Casual moment",
    title: "Casual Vibes",
    category: "Portrait",
    date: "Recent"
  },
  {
    id: 3,
    src: "/photos/Snapchat-1604176005.jpg",
    alt: "Personal photograph",
    title: "Everyday Moments",
    category: "Portrait",
    date: "2025"
  },
  {
    id: 4,
    src: "/photos/Snapchat-1841863640.jpg",
    alt: "Portrait shot",
    title: "Portrait Study",
    category: "Portrait",
    date: "2025"
  },
  {
    id: 5,
    src: "/photos/Snapchat-79238901.jpg",
    alt: "Personal photo",
    title: "Snapshot",
    category: "Portrait",
    date: "2025"
  },
  {
    id: 6,
    src: "/photos/WhatsApp%20Image%202025-01-09%20at%207.12.24%20PM%20(2).jpeg",
    alt: "WhatsApp photo",
    title: "Memory Lane",
    category: "Portrait",
    date: "January 2025"
  },
  {
    id: 7,
    src: "/photos/WhatsApp%20Image%202025-01-15%20at%206.16.46%20PM.jpeg",
    alt: "Personal moment",
    title: "Captured Moment",
    category: "Portrait",
    date: "January 2025"
  },
  {
    id: 8,
    src: "/photos/WhatsApp%20Image%202025-02-03%20at%2012.45.35%20PM.jpeg",
    alt: "Personal photograph",
    title: "Life in Motion",
    category: "Portrait",
    date: "February 2025"
  },
  {
    id: 9,
    src: "/photos/WhatsApp%20Image%202026-04-04%20at%2012.44.53%20(1).jpeg",
    alt: "Recent photo",
    title: "Recent Memories",
    category: "Portrait",
    date: "April 2026"
  },
  {
    id: 10,
    src: "/photos/WhatsApp%20Image%202026-04-04%20at%2012.44.54%20(1).jpeg",
    alt: "Personal snapshot",
    title: "Daily Life",
    category: "Portrait",
    date: "April 2026"
  },
  {
    id: 11,
    src: "/photos/WhatsApp%20Image%202026-04-04%20at%2012.44.56.jpeg",
    alt: "Recent moment",
    title: "Current Times",
    category: "Portrait",
    date: "April 2026"
  },
  {
    id: 12,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.59.jpeg",
    alt: "Latest photo",
    title: "Latest Capture",
    category: "Portrait",
    date: "April 2026"
  }
];

const PhotoCard = ({ photo, index, onRemove, onClick }: { photo: Photo; index: number; onRemove?: (id: number) => void; onClick?: () => void }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotationDeg, setRotationDeg] = useState<number>(0);
  const [naturalSize, setNaturalSize] = useState<{ w: number; h: number } | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0.95]);

  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const springOpacity = useSpring(opacity, { stiffness: 300, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  const rotated90 = Math.abs(rotationDeg % 180) === 90;
  const isLandscape = naturalSize ? naturalSize.w > naturalSize.h : false;
  // Card is portrait-shaped; when the (possibly rotated) image is landscape, use `contain`
  // so it stays fully visible instead of being cropped by `cover`.
  const shouldContain = naturalSize ? (rotated90 ? !isLandscape : isLandscape) : rotated90;

  return (
    <motion.div
      ref={cardRef}
      style={{
        y: springY,
        opacity: springOpacity,
        scale: springScale,
      }}
      className="relative group mb-20 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-3xl bg-card border border-border card-light shadow-2xl">
        {/* Image */}
          <div className="relative aspect-square overflow-hidden">
          <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full"
              style={{
                transform: `rotate(${rotationDeg}deg)`,
                transformOrigin: "center",
                objectFit: shouldContain ? "contain" : "cover"
              }}
              loading="lazy"
              onError={(e) => {
                console.error('Failed to load image:', photo.src);
                e.currentTarget.style.display = 'none';
              }}
              onLoad={(e) => {
                const img = e.currentTarget;
                // Some browsers can have 0 natural size during failed loads; guard it.
                if (img.naturalWidth > 0 && img.naturalHeight > 0) {
                  setNaturalSize({ w: img.naturalWidth, h: img.naturalHeight });
                }
              }}
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-white text-lg sm:text-2xl font-bold mb-2">{photo.title}</h3>
                <p className="text-white/80 text-sm sm:text-lg mb-4">{photo.category}</p>
                {photo.date && (
                  <p className="text-white/60 text-sm">{photo.date}</p>
                )}
              </motion.div>

              {/* Action buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2 mt-6"
              >
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 flex-1 sm:flex-none">
                  <Heart className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Like</span>
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 flex-1 sm:flex-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    setRotationDeg((prev) => (prev + 90) % 360);
                  }}
                >
                  <RotateCw className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Rotate</span>
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 hover:bg-white/30 text-white border-white/30 flex-1 sm:flex-none"
                  onClick={(e) => {
                    e.stopPropagation();
                    try {
                      const link = document.createElement('a');
                      link.href = photo.src;
                      link.download = `${photo.title.replace(/\s+/g, '_').toLowerCase()}.jpg`;
                      link.target = '_blank'; // Prevent navigation for regular URLs
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    } catch (error) {
                      console.error('Download failed:', error);
                      // Fallback: open in new tab
                      window.open(photo.src, '_blank');
                    }
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Download</span>
                </Button>
                <Button size="sm" variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 flex-1 sm:flex-none">
                  <Share2 className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">Share</span>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Remove button for uploaded photos */}
        {onRemove && (
          <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button
              size="sm"
              variant="destructive"
              className="w-8 h-8 p-0 bg-red-500/80 hover:bg-red-600"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(photo.id);
              }}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Floating elements */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: index * 0.5,
          }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-20"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 0.3,
          }}
          className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full opacity-30"
        />
      </div>
    </motion.div>
  );
};

const Photos = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [uploadedPhotos, setUploadedPhotos] = useState<Photo[]>([]);
  const [showUpload, setShowUpload] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activePhotoId, setActivePhotoId] = useState<number | null>(null);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newPhotos: Photo[] = [];
    Array.from(files).forEach((file, index) => {
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        newPhotos.push({
          id: Date.now() + index,
          src: url,
          alt: file.name,
          title: file.name.replace(/\.[^/.]+$/, ""),
          category: "Uploaded",
          date: new Date().toLocaleDateString()
        });
      }
    });

    setUploadedPhotos(prev => [...prev, ...newPhotos]);
    setShowUpload(false);
  };

  const removeUploadedPhoto = (id: number) => {
    setUploadedPhotos(prev => {
      const photoToRemove = prev.find(p => p.id === id);
      if (photoToRemove && photoToRemove.src.startsWith('blob:')) {
        URL.revokeObjectURL(photoToRemove.src);
      }
      return prev.filter(p => p.id !== id);
    });
  };

  // Combine static and uploaded photos
  const allPhotos = [...photos, ...uploadedPhotos];
  const categories = ["All", ...Array.from(new Set(allPhotos.map((p) => p.category)))];

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredPhotos = allPhotos.filter((p) => {
    const matchesCategory = categoryFilter === "All" ? true : p.category === categoryFilter;
    const matchesQuery =
      normalizedQuery.length === 0
        ? true
        : p.title.toLowerCase().includes(normalizedQuery) ||
          p.alt.toLowerCase().includes(normalizedQuery);
    return matchesCategory && matchesQuery;
  });

  const activePhoto = activePhotoId === null ? null : allPhotos.find((p) => p.id === activePhotoId) ?? null;
  const activeIndex = filteredPhotos.findIndex((p) => p.id === activePhotoId);

  const openPhoto = (photo: Photo) => setActivePhotoId(photo.id);
  const closePhoto = () => setActivePhotoId(null);

  const goPrev = () => {
    if (filteredPhotos.length === 0) return;
    const idx = activeIndex === -1 ? 0 : activeIndex;
    const prev = filteredPhotos[(idx - 1 + filteredPhotos.length) % filteredPhotos.length];
    setActivePhotoId(prev.id);
  };

  const goNext = () => {
    if (filteredPhotos.length === 0) return;
    const idx = activeIndex === -1 ? 0 : activeIndex;
    const next = filteredPhotos[(idx + 1) % filteredPhotos.length];
    setActivePhotoId(next.id);
  };

  useEffect(() => {
    if (activePhotoId === null) return;
    // If the active photo disappears due to upload/remove/filter, close the modal.
    if (activeIndex === -1) setActivePhotoId(null);
  }, [activeIndex, activePhotoId]);

  useEffect(() => {
    if (activePhotoId === null) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [activePhotoId]);

  useEffect(() => {
    if (activePhotoId === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePhoto();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePhotoId, activeIndex, filteredPhotos]);

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="fixed inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pointer-events-none"
      />

      {/* Header */}
      <motion.header
        style={{ opacity: headerOpacity, y: headerY }}
        className="sticky top-0 z-40 glass border-b border-border/50 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 hover:bg-accent/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back to Portfolio</span>
            </Button>

            <div className="text-center">
              <h1 className="text-xl sm:text-2xl font-bold text-gradient">My Personal Gallery</h1>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {allPhotos.length} memories • Scroll to explore
              </p>
            </div>

            <div className="flex gap-2 sm:gap-3">
              <Button
                onClick={() => setShowUpload(!showUpload)}
                variant="outline"
                size="sm"
                className="flex items-center gap-2"
              >
                <Upload className="w-4 h-4" />
                <span className="hidden sm:inline">Upload Photos</span>
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                size="sm"
                className="hidden sm:flex"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Upload Interface */}
      <AnimatePresence>
        {showUpload && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-card/50 backdrop-blur-sm border-b border-border/50"
          >
            <div className="max-w-4xl mx-auto px-6 py-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-4">Upload Your Photos</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <Button
                    onClick={() => fileInputRef.current?.click()}
                    className="flex items-center gap-2"
                  >
                    <Upload className="w-4 h-4" />
                    Choose Photos
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Select multiple photos to add to your gallery
                  </p>
                </div>
                {uploadedPhotos.length > 0 && (
                  <p className="text-sm text-primary mt-2">
                    {uploadedPhotos.length} photo{uploadedPhotos.length !== 1 ? 's' : ''} uploaded
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
              <Heart className="w-4 h-4" />
              Personal Collection
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              My <span className="text-gradient">Personal</span> Journey
            </h2>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
              A visual diary of moments, memories, and experiences that define my story.
              Each photograph captures a piece of my journey through time.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="text-sm text-muted-foreground bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-border/50">
                <span className="text-primary font-medium">{allPhotos.length}</span> cherished memories • Scroll down to explore
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
          }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity },
          }}
          className="absolute bottom-20 right-10 w-20 h-20 bg-accent/10 rounded-full blur-xl"
        />
      </section>

      {/* Photo Gallery */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12"
          >
            {filteredPhotos.map((photo, index) => (
              <PhotoCard 
                key={photo.id} 
                photo={photo} 
                index={index} 
                onRemove={removeUploadedPhoto}
                onClick={() => openPhoto(photo)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-20 px-6 text-center"
      >
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">Thank You for Exploring</h3>
          <p className="text-muted-foreground mb-8">
            These photographs represent moments that matter to me. Each one tells a story,
            captures an emotion, or preserves a memory worth keeping.
          </p>

          <div className="flex justify-center gap-4">
            <Button onClick={() => navigate("/")} variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            <Button>
              <Heart className="w-4 h-4 mr-2" />
              View More
            </Button>
          </div>
        </div>
      </motion.footer>

      {/* Photo Modal */}
      <Dialog open={!!activePhoto} onOpenChange={closePhoto}>
        <DialogContent className="max-w-5xl w-full h-full max-h-[90vh] p-0 bg-black/95 border-0">
          {activePhoto && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                onClick={closePhoto}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goPrev}
                disabled={filteredPhotos.length <= 1}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={goNext}
                disabled={filteredPhotos.length <= 1}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              {/* Photo */}
              <motion.img
                key={activePhoto.id}
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="max-w-full max-h-full object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />

              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-semibold mb-2">{activePhoto.title}</h3>
                <p className="text-white/80 mb-2">{activePhoto.category}</p>
                {activePhoto.date && (
                  <p className="text-white/60 text-sm mb-4">{activePhoto.date}</p>
                )}
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span>{activeIndex + 1} of {filteredPhotos.length}</span>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Photos;