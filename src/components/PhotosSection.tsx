import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/photos/Snapchat for Web 2026-4-4 at 12_59_14 pm.png",
    alt: "Personal portrait",
    title: "Self Portrait",
    category: "Portrait"
  },
  {
    id: 2,
    src: "/photos/Snapchat-1298872259.jpg",
    alt: "Casual moment",
    title: "Casual Vibes",
    category: "Portrait"
  },
  {
    id: 3,
    src: "/photos/Snapchat-1604176005.jpg",
    alt: "Personal photograph",
    title: "Everyday Moments",
    category: "Portrait"
  },
  {
    id: 4,
    src: "/photos/Snapchat-1841863640.jpg",
    alt: "Portrait shot",
    title: "Portrait Study",
    category: "Portrait"
  },
  {
    id: 5,
    src: "/photos/Snapchat-79238901.jpg",
    alt: "Personal photo",
    title: "Snapshot",
    category: "Portrait"
  },
  {
    id: 6,
    src: "/photos/WhatsApp Image 2025-01-09 at 7.12.24 PM (2).jpeg",
    alt: "WhatsApp photo",
    title: "Memory Lane",
    category: "Portrait"
  },
  {
    id: 7,
    src: "/photos/WhatsApp Image 2025-01-15 at 6.16.46 PM.jpeg",
    alt: "Personal moment",
    title: "Captured Moment",
    category: "Portrait"
  },
  {
    id: 8,
    src: "/photos/WhatsApp Image 2025-02-03 at 12.45.35 PM.jpeg",
    alt: "Personal photograph",
    title: "Life in Motion",
    category: "Portrait"
  },
  {
    id: 9,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.53 (1).jpeg",
    alt: "Recent photo",
    title: "Recent Memories",
    category: "Portrait"
  },
  {
    id: 10,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.54 (1).jpeg",
    alt: "Personal snapshot",
    title: "Daily Life",
    category: "Portrait"
  },
  {
    id: 11,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.56.jpeg",
    alt: "Recent moment",
    title: "Current Times",
    category: "Portrait"
  },
  {
    id: 12,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.59.jpeg",
    alt: "Latest photo",
    title: "Latest Capture",
    category: "Portrait"
  }
];

const categories = ["All", "Portrait"];

const PhotosSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredPhotos = selectedCategory === "All"
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
    setLightboxIndex(filteredPhotos.findIndex(p => p.id === photo.id));
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (lightboxIndex + 1) % filteredPhotos.length;
    setLightboxIndex(nextIndex);
    setSelectedPhoto(filteredPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = lightboxIndex === 0 ? filteredPhotos.length - 1 : lightboxIndex - 1;
    setLightboxIndex(prevIndex);
    setSelectedPhoto(filteredPhotos[prevIndex]);
  };

  return (
    <section id="photos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Photography
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="text-gradient">Personal</span> Photos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my personal moments and memories captured through different times and experiences.
            Each photo tells a story from my journey and captures the essence of life's beautiful moments.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Photo Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border card-light cursor-pointer"
                onClick={() => openLightbox(photo)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-lg mb-1">{photo.title}</h3>
                    <p className="text-white/80 text-sm">{photo.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Camera className="w-4 h-4 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <Dialog open={!!selectedPhoto} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl w-full h-full max-h-[90vh] p-0 bg-black/95 border-0">
            {selectedPhoto && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
                  onClick={closeLightbox}
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Navigation Buttons */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  onClick={prevPhoto}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                  onClick={nextPhoto}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>

                {/* Photo */}
                <motion.img
                  key={selectedPhoto.id}
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="max-w-full max-h-full object-contain"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Photo Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-semibold mb-2">{selectedPhoto.title}</h3>
                  <p className="text-white/80">{selectedPhoto.category}</p>
                  <div className="flex items-center gap-4 mt-4 text-white/60 text-sm">
                    <span>{lightboxIndex + 1} of {filteredPhotos.length}</span>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PhotosSection;