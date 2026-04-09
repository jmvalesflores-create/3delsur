# Galería de imágenes — cómo agregar fotos

La sección **Imágenes** del sitio lee los archivos desde **Supabase Storage**, bucket **`gallery`**. No hay carga desde la web pública: las fotos se suben desde el panel de Supabase (o con herramientas de administración que usen credenciales válidas).

## Requisitos

- Acceso al proyecto en [Supabase](https://supabase.com) (mismo proyecto que usa la app: URL y claves en `.env` con prefijo `VITE_SUPABASE_`).

## Subir fotos desde el panel (recomendado)

1. Entrá a **Supabase Dashboard** → tu proyecto.
2. Menú **Storage**.
3. Abrí el bucket **`gallery`**. Si no existe, crealo con ese nombre exacto (el código lo usa tal cual).
4. **Upload file** (o arrastrá archivos) en la **raíz** del bucket, no dentro de subcarpetas.  
   El sitio lista solo el nivel raíz (`/` del bucket).
5. Guardá los cambios y recargá la página del sitio para ver las nuevas imágenes.

### Consejos prácticos

- **Formatos:** JPG, PNG, WebP u otros que el navegador muestre bien.
- **Peso:** conviene comprimir imágenes grandes para que la galería cargue rápido.
- **Nombres:** evitá caracteres raros en el nombre del archivo; letras, números, guiones y puntos suelen ir bien.
- **Orden en el sitio:** la app ordena por fecha de creación en Storage (**más recientes primero**).

## Políticas de Storage (RLS)

En el repositorio hay migraciones que definen políticas sobre el bucket `gallery`. En el estado actual del esquema, **subir, borrar o actualizar** objetos vía API suele requerir usuario **autenticado**; la **lectura** para mostrar la galería en el sitio está pensada para funcionar con las URLs firmadas que genera el cliente.

Subir archivos **desde el Dashboard de Supabase** como administrador del proyecto no depende del mismo flujo que un visitante anónimo en la web, por eso es el método habitual para cargar fotos sin login en el sitio.

Si necesitás automatizar subidas (CI, script), usá la **service role key** solo en entornos seguros (nunca en el frontend ni en repos públicos).

## Verificación rápida

1. Subí una imagen de prueba al bucket `gallery`.
2. Abrí el sitio en la sección **Imágenes** (ancla `#imagenes`).
3. Si no aparece: revisá que el archivo esté en la raíz del bucket, que no sea solo el placeholder `.emptyFolderPlaceholder`, y recargá con caché limpio si hace falta.

## Referencia en código

- Bucket: constante `gallery` en `src/components/ImagenesSection.tsx`.
- Cliente Supabase: `src/integrations/supabase/client.ts`.
