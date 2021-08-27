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
    },
    {
        id: '5',
        categoria: 'impresoras',
        titulo: 'Impresora simple función Xerox Phaser 3020/BI con wifi blanca y azul 220V - 240V',
        descripcion: 'Pensada para la casa o la oficina, esta impresora Xerox es ideal para todo tipo de trabajos, ya sean grandes tiradas o pocas impresiones.',
        precio: 14999,
        imagen: 'impresora2.webp',
        stock: 23
    },

    {
        id: '6',
        categoria: 'notebook',
        titulo: 'Notebook Hp 14-ck2092la I3-10110u 4gb Ram 128 Gb Ssd M.2 New',
        descripcion: 'HP Laptop 14-ck2092la 275K2LA Laptop delgada y a la moda, con hasta 11 horas de batería.  Creada con un diseño delgado y moderno para mantenerte conectado y con todas las tareas bajo control, con rendimiento confiable y batería duradera.',
        precio: 75999,
        imagen: 'notebook3.webp',
        stock: 5
    },

    {
        id: '7',
        categoria: 'monitores',
        titulo: 'Monitor gamer LG 22MN430H led 22 " negro 100V/240V',
        descripcion: 'LG busca entender a los usuarios para ofrecerles óptimas soluciones y nuevas experiencias a través de la evolución tecnológica. Disfrutá de la perfecta combinación de diseño, calidad y rendimiento que la empresa te ofrece en este monitor.',
        precio: 20119,
        imagen: 'monitor2.webp',
        stock: 14 
    },

    {
        id: '8',
        categoria: 'insumos',
        titulo: 'Mouse inalámbrico Logitech M280 negro',
        descripcion: 'Wireless Mouse M280 Curvas diseñadas para brindar comodidad absoluta',
        precio: 1205,
        imagen: 'insumo2.webp',
        stock: 100 
    },

    {
        id: '9',
        categoria: 'insumos',
        titulo: 'Combo Kit Teclado Y Mouse Alámbricos Negro - Tedge',
        descripcion: 'Vida útil de las teclas: 8 000 000 veces Compatible con: Windows 2000/2003/XP/Vista/Win7/Win8/Win10/MAC/LINUX Dimensiones: 438.5 mm x 140.7 mm x 23 mm Largo del cable: 1.4 m ±5% Diseño ultradelgado y anti-ruidos, forma elegante con una sensación perfecta al tipear.',
        precio: 969,
        imagen: 'insumo3.webp',
        stock: 30
    },

    {
        id: '10',
        categoria: 'monitores',
        titulo: 'Monitor curvo Samsung F390 Series C27F390FH led 27 " negro 100V/240V',
        descripcion: 'Samsung está fielmente comprometida en brindar productos de calidad y que contribuyan a crear un mejor futuro para las personas. Como empresa líder en la industria tecnológica uno de sus objetivos principales es desarrollar avanzadas e innovadoras soluciones. Es por ello que con este monitor tendrás y disfrutarás de una gran experiencia visual en todo momento.',
        precio: 32177,
        imagen: 'monitor3.webp',
        stock: 9 
    },

    {
        id: '11',
        categoria: 'notebook',
        titulo: 'Notebook Hp 15-gw0004la Amd Athlon Silver 3050u 8gb 1tb 15.6',
        descripcion: 'Nombre: Notebook HP 15-GW0004LA Marca: HP Categoría: Consumer Notebooks',
        precio: 72749,
        imagen: 'notebook2.webp',
        stock: 7
    },

    {
        id: '12',
        categoria: 'impresoras',
        titulo: 'Impresor Termica-comandera Elitronic Sol 802 80mm Usb+red',
        descripcion: '',
        precio: 13999,
        imagen: 'impresora3.webp',
        stock: 8
    },

];

const categoriasData = [
    {code: 'notebook', label: 'Notebooks'},
    {code: 'monitores', label: 'Monitores'},
    {code: 'impresoras', label: 'Impresoras'},
    {code: 'insumos', label: 'Insumos'}
];

export { productosData, categoriasData };
