# Adding Your Photos to the Portfolio

## How to Replace the Sample Photos

The Photos section currently uses placeholder images from Unsplash. To add your own photos:

### 1. Add Your Photos to the Public Folder

Place your photos in the `public/photos/` directory. Create the folder if it doesn't exist:

```
public/
  photos/
    photo1.jpg
    photo2.jpg
    photo3.jpg
    ...
```

### 2. Update the Photos Data

Edit `src/components/PhotosSection.tsx` and replace the `photos` array with your own photos:

```typescript
const photos: Photo[] = [
  {
    id: 1,
    src: "/photos/your-photo-1.jpg", // Path to your photo
    alt: "Description of your photo",
    title: "Photo Title",
    category: "Nature" // Choose from: Nature, Urban, Portrait, Architecture, Macro
  },
  // Add more photos...
];
```

### 3. Photo Specifications

For best results:
- **Format**: JPG, PNG, or WebP
- **Size**: 800x600px or larger (will be cropped to square)
- **Quality**: High resolution for crisp display
- **File size**: Keep under 2MB per photo for fast loading

### 4. Categories

Available categories:
- `Nature` - Landscapes, wildlife, outdoor scenes
- `Urban` - Cityscapes, street photography, architecture
- `Portrait` - People, self-portraits, candid shots
- `Architecture` - Buildings, structures, design
- `Macro` - Close-up photography, details, patterns

### 5. Adding More Categories

To add new categories:
1. Add the category name to the `categories` array
2. Use the new category in your photo objects

### 6. Photo Optimization Tips

- Use WebP format for better compression
- Resize photos to 1200x1200px max
- Compress images using tools like TinyPNG or ImageOptim
- Add descriptive alt text for accessibility

## Features Included

✅ **Responsive Grid Layout** - Works on all screen sizes
✅ **Category Filtering** - Filter photos by type
✅ **Lightbox Gallery** - Click to view full-size images
✅ **Smooth Animations** - Framer Motion powered transitions
✅ **Keyboard Navigation** - Arrow keys to navigate in lightbox
✅ **Touch Support** - Swipe on mobile devices
✅ **Accessibility** - Screen reader friendly

## Customization Options

- Change the number of columns in the grid
- Modify the lightbox styling
- Add photo descriptions or metadata
- Implement lazy loading for many photos
- Add social sharing buttons
- Include photo download functionality