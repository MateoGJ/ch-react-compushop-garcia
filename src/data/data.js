const productosData = [
    {
        id: '1',
        categoria: 'impresoras',
        titulo: 'Impresora Laser HP 107A',
        descripcion: 'Hasta 36 cuotas fijas con tarjetas seleccionadas',
        precio: 16999,
        imagen: 'impresora.webp_1000',
        stock: 10
    },
    {
        id: '2',
        categoria: 'monitores',
        titulo: 'MONITOR SAMSUNG LF27T350FH',
        descripcion: 'Monitor LED de 27". Formato de pantalla Widescreen 16:9. Conexion HDMI. Brillo 250CD/M2. Resolucion 1920 x 1080. Radio de contraste 1000 a 1. Tiempo de respuesta 5 ms. Angulo de vision 178 (h) / 178 (v). Frecuencia vertical 60 Hz.',
        precio:  34999,
        imagen: 'monitores.jpeg',
        stock: 3
    },
    {
        id: '3',
        categoria: 'notebook',
        titulo: 'Notebook Acer A715-41G-E1KH AMD RyzenTM 5',
        descripcion: 'Especificaciones de Notebook Acer A715-41G-E1KH AMD RyzenTM 5 PANTALLA 15.6"notebook (*) Las proporciones y medidas son aproximadas Tamaño de Pantalla15.6" Tipo de PantallaLED Resolución1920 x 1080 Pantalla TáctilNo',
        precio: 179999,
        imagen: 'notebook.webp_1000',
        stock: 10
    },
    {
        id: '4',
        categoria: 'insumos',
        titulo: 'Cartucho de tinta HP 664 negra Original (F6V29AL)',
        descripcion: 'Rendimiento: 120 páginas (Promedio aproximado basado en ISO/IEC 24711. El rendimiento real varía considerablemente de acuerdo con el contenido de las páginas impresas y otros factores).',
        precio: 1849,
        imagen: 'cartucho.webp_1000',
        stock: 10
    }
];

const categoriasData = [
    {code: 'notebook', label: 'Notebooks'},
    {code: 'monitores', label: 'Monitores'},
    {code: 'impresoras', label: 'Impresoras'},
    {code: 'insumos', label: 'Insumos'}
];

export { productosData, categoriasData };
