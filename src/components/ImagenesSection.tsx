import { useState, useEffect } from "react";
import { ImagePlus, ZoomIn } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";

interface ImageItem {
  id: string;
  url: string;
  name: string;
}

const BUCKET = "gallery";

const ImagenesSection = () => {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    const { data, error } = await supabase.storage.from(BUCKET).list("", {
      sortBy: { column: "created_at", order: "desc" },
    });
    if (error || !data) return;

    const filtered = data.filter((f) => f.name !== ".emptyFolderPlaceholder");
    if (filtered.length === 0) {
      setImages([]);
      return;
    }

    const { data: signedData, error: signError } = await supabase.storage
      .from(BUCKET)
      .createSignedUrls(
        filtered.map((f) => f.name),
        3600
      );

    if (signError || !signedData) return;

    const items: ImageItem[] = filtered.map((file, i) => ({
      id: file.id,
      url: signedData[i]?.signedUrl ?? "",
      name: file.name,
    }));
    setImages(items);
  };

  return (
    <section id="imagenes" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-display text-xs tracking-[0.3em] text-primary uppercase">
            Galería
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4">
            Imágenes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conocé nuestros trabajos y proyectos realizados.
          </p>
        </div>

        {/* Gallery grid */}
        {images.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-border rounded-sm">
            <ImagePlus className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <p className="text-muted-foreground text-sm">
              No hay imágenes cargadas todavía.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img) => (
              <div
                key={img.id}
                className="group relative aspect-square overflow-hidden rounded-sm border border-border bg-muted"
              >
                <img
                  src={img.url}
                  alt={img.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    onClick={() => setSelectedImage(img)}
                    className="p-2 bg-primary text-primary-foreground rounded-sm"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2 bg-background border-border">
          {selectedImage && (
            <img
              src={selectedImage.url}
              alt={selectedImage.name}
              className="w-full h-auto max-h-[80vh] object-contain rounded-sm"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ImagenesSection;
