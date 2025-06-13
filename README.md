# LEGITY™ Proxy

Proxy service para acceder a datos del Boletín Oficial desde N8N Cloud.

## Deploy en Vercel

1. Subir esta carpeta a tu GitHub
2. Conectar repo con Vercel
3. Deploy automático
4. Usar URL: `https://tu-proyecto.vercel.app/api/bora-data`

## Uso en N8N

En el nodo HTTP Request, usar la URL del proxy deployado en Vercel.

## Archivos incluidos

- `api/bora-data.js` - Función serverless que actúa como proxy
- `package.json` - Dependencias del proyecto
- `vercel.json` - Configuración de deployment
- `README.md` - Esta documentación

## Funcionalidad

- Accede a datosabiertos.gob.ar desde Vercel
- Devuelve datos JSON para N8N
- Incluye fallback con datos de prueba si la API no responde
- Headers CORS configurados para N8N Cloud