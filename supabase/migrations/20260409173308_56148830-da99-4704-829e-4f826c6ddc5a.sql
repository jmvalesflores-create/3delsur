-- Drop existing permissive policies
DROP POLICY IF EXISTS "Allow gallery uploads" ON storage.objects;
DROP POLICY IF EXISTS "Allow gallery deletes" ON storage.objects;
DROP POLICY IF EXISTS "Allow gallery updates" ON storage.objects;

-- Recreate with auth requirement
CREATE POLICY "Authenticated users can upload to gallery"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'gallery' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete from gallery"
ON storage.objects
FOR DELETE
USING (bucket_id = 'gallery' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update gallery"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'gallery' AND auth.role() = 'authenticated');
