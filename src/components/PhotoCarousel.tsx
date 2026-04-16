import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const portraitPhotos: Photo[] = [
  {
    id: 1,
    src: "/photos/Snapchat for Web 2026-4-4 at 12_59_14 pm.png",
    alt: "Personal portrait",
    title: "Self Portrait"
  },
  {
    id: 2,
    src: "/photos/Snapchat-1298872259.jpg",
    alt: "Casual moment",
    title: "Casual Vibes"
  },
  {
    id: 3,
    src: "/photos/Snapchat-1604176005.jpg",
    alt: "Personal photograph",
    title: "Everyday Moments"
  },
  {
    id: 4,
    src: "/photos/Snapchat-1841863640.jpg",
    alt: "Portrait shot",
    title: "Portrait Study"
  },
  {
    id: 5,
    src: "/photos/Snapchat-79238901.jpg",
    alt: "Personal photo",
    title: "Snapshot"
  },
  {
    id: 6,
    src: "/photos/WhatsApp Image 2025-01-09 at 7.12.24 PM (2).jpeg",
    alt: "WhatsApp photo",
    title: "Memory Lane"
  },
  {
    id: 7,
    src: "/photos/WhatsApp Image 2025-01-15 at 6.16.46 PM.jpeg",
    alt: "Personal moment",
    title: "Captured Moment"
  },
  {
    id: 8,
    src: "/photos/WhatsApp Image 2025-02-03 at 12.45.35 PM.jpeg",
    alt: "Personal photograph",
    title: "Life in Motion"
  },
  {
    id: 9,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.53 (1).jpeg",
    alt: "Recent photo",
    title: "Recent Memories"
  },
  {
    id: 10,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.54 (1).jpeg",
    alt: "Personal snapshot",
    title: "Daily Life"
  },
  {
    id: 11,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.56.jpeg",
    alt: "Recent moment",
    title: "Current Times"
  },
  {
    id: 12,
    src: "/photos/WhatsApp Image 2026-04-04 at 12.44.59.jpeg",
    alt: "Latest photo",
    title: "Latest Capture"
  }
];

export const PhotoCarousel = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate photos for seamless loop
  const duplicatedPhotos = [...portraitPhotos, ...portraitPhotos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // Adjust speed here

    const animate = () => {
      position -= speed;
      scrollContainer.style.transform = `translateX(${position}px)`;

      // Reset position when first set of photos has scrolled completely
      if (Math.abs(position) >= scrollContainer.children[0].clientWidth * portraitPhotos.length) {
        position = 0;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const handlePhotoClick = () => {
    navigate("/gallery");
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradient overlays for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrolling container */}
      <div
        ref={scrollRef}
        className="flex gap-6 cursor-pointer"
        onClick={handlePhotoClick}
        style={{ width: `${duplicatedPhotos.length * 200}px` }} // Adjust based on photo width
      >
        {duplicatedPhotos.map((photo, index) => (
          <motion.div
            key={`${photo.id}-${index}`}
            className="relative flex-shrink-0 w-48 h-64 rounded-2xl overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="text-white text-sm font-semibold mb-1">{photo.title}</h4>
                <p className="text-white/80 text-xs">Click to view gallery</p>
              </div>
            </div>

            {/* Hover indicator */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-6 h-6 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Click prompt */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-center mt-6"
      >
        <p className="text-sm text-muted-foreground">
          📸 <span className="text-primary font-medium">Click any photo</span> to explore my complete gallery
        </p>
      </motion.div>
    </div>
  );
};