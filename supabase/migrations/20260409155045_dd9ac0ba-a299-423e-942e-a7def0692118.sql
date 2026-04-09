-- Allow anyone to upload images to the gallery bucket
CREATE POLICY "Allow gallery uploads"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'gallery');

-- Allow anyone to delete images from the gallery bucket
CREATE POLICY "Allow gallery deletes"
ON storage.objects
FOR DELETE
USING (bucket_id = 'gallery');

-- Allow anyone to update images in the gallery bucket
CREATE POLICY "Allow gallery updates"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'gallery');
