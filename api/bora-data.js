export default async function handler(req, res) {
  // Habilitar CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    console.log('Fetching BORA data...');
    
    const response = await fetch('https://datosabiertos.gob.ar/api/3/action/datastore_search?resource_id=b9120637-f965-41d8-88c1-2d719de6d50f&limit=10');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    res.json({
      success: true,
      timestamp: new Date().toISOString(),
      source: 'datosabiertos.gob.ar',
      data: data
    });
    
  } catch (error) {
    console.error('Error:', error.message);
    
    res.json({
      success: false,
      error: error.message,
      fallback_data: {
        message: "Proxy LEGITY funcionando - datos de prueba",
        date: new Date().toLocaleDateString('es-AR'),
        normativas: [
          "🏛️ ARCA - Resolución General 5125/2025 - Nuevo régimen facturación electrónica monotributistas",
          "🏦 BCRA - Comunicación A 8123/2025 - Modificación límites transferencias inmediatas $2M",
          "📈 CNV - Disposición 890/2025 - Actualización reglamento mercado de capitales",
          "💼 UIF - Circular 50/2025 - Nuevas obligaciones sujetos obligados lavado activos"
        ]
      }
    });
  }
}
