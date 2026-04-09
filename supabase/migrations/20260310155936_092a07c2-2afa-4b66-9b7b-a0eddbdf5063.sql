INSERT INTO storage.buckets (id, name, public) VALUES ('gallery', 'gallery', true);

CREATE POLICY "Gallery images are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'gallery');

CREATE POLICY "Anyone can upload gallery images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Anyone can delete gallery images" ON storage.objects FOR DELETE USING (bucket_id = 'gallery');