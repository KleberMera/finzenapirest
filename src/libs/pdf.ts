import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { variable64 } from './img'; // Asegúrate de que esta variable esté definida
import { TransactionReport } from 'src/models/trasaction.interface';

interface CategoryTotal {
  name: string;
  total: number;
  percentage: number;
  color: string;
}

// Paleta de colores mejorada con tonos más armoniosos
const CHART_COLORS = [
  '#3b82f6', // blue-500
  '#10b981', // emerald-500
  '#f59e0b', // amber-500
  '#8b5cf6', // violet-500
  '#ef4444', // red-500
  '#06b6d4', // cyan-500
  '#f97316', // orange-500
  '#6366f1', // indigo-500
  '#14b8a6', // teal-500
  '#ec4899', // pink-500
  '#84cc16', // lime-500
  '#a855f7', // purple-500
  '#64748b', // slate-500
];

// Función para generar un gráfico circular SVG con diseño mejorado
function generatePieChartSVG(categories: CategoryTotal[], title: string): string {
  if (!categories || categories.length === 0) {
    return `
      <svg width="400" height="150" xmlns="http://www.w3.org/2000/svg">
        <text x="200" y="75" font-size="16" font-weight="bold" text-anchor="middle">No hay datos disponibles para ${title}</text>
      </svg>
    `;
  }
  
  const width = 400;
  const height = 300;
  const radius = 100;
  const centerX = width / 2;
  const centerY = 150;
  
  let startAngle = 0;
  let slices = '';
  let legend = '';
  
  // Añadir sombra para efecto 3D
  const defs = `
    <defs>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="2" dy="2" stdDeviation="2" flood-opacity="0.3" />
      </filter>
    </defs>
  `;
  
  // Crear los segmentos del pie con efecto de separación
  categories.forEach((category, index) => {
    const sliceAngle = (category.percentage / 100) * (2 * Math.PI);
    const endAngle = startAngle + sliceAngle;
    
    // Añadir un pequeño "desplazamiento" al segmento para resaltarlo
    const midAngle = startAngle + sliceAngle / 2;
    const offset = 5; // desplazamiento en píxeles
    const offsetX = Math.cos(midAngle) * offset;
    const offsetY = Math.sin(midAngle) * offset;
    
    // Calcular los puntos del arco
    const x1 = centerX + offsetX + radius * Math.cos(startAngle);
    const y1 = centerY + offsetY + radius * Math.sin(startAngle);
    const x2 = centerX + offsetX + radius * Math.cos(endAngle);
    const y2 = centerY + offsetY + radius * Math.sin(endAngle);
    
    // Determinar si el arco es mayor que 180 grados (π radianes)
    const largeArcFlag = sliceAngle > Math.PI ? 1 : 0;
    
    // Crear el path para el segmento
    const path = `M${centerX + offsetX},${centerY + offsetY} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
    
    slices += `<path d="${path}" fill="${category.color}" stroke="white" stroke-width="2" filter="url(#shadow)"></path>`;
    
    // Crear la leyenda más elegante con círculos en lugar de rectángulos
    const legendY = height - 20 - (categories.length - index) * 25;
    legend += `
      <g transform="translate(0, ${legendY})">
        <circle cx="20" cy="0" r="6" fill="${category.color}" stroke="white" stroke-width="1"></circle>
        <text x="35" y="5" font-size="14" font-family="Helvetica">${category.name}</text>
        <text x="350" y="5" font-size="14" font-family="Helvetica" text-anchor="end">${category.percentage.toFixed(1)}%</text>
        <text x="350" y="22" font-size="12" font-family="Helvetica" text-anchor="end" fill="#666">$ ${category.total.toFixed(2)}</text>
      </g>
    `;
    
    startAngle = endAngle;
  });
  
  // Añadir un círculo central para un aspecto más elegante
  const centerCircle = `<circle cx="${centerX}" cy="${centerY}" r="50" fill="white" stroke="#e5e7eb" stroke-width="1"></circle>`;
  
  // Número total para mostrar en el centro
  const totalAmount = categories.reduce((sum, cat) => sum + cat.total, 0);
  const centerText = `
    <text x="${centerX}" y="${centerY - 10}" font-size="14" text-anchor="middle" font-family="Helvetica" fill="#6b7280">Total</text>
    <text x="${centerX}" y="${centerY + 15}" font-size="18" font-weight="bold" text-anchor="middle" font-family="Helvetica" fill="#111827">$ ${totalAmount.toFixed(2)}</text>
  `;
  
  // Ensamblar el SVG completo con título elegante
  const svg = `
    <svg width="${width}" height="${height + 40}" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="0" y="0" width="${width}" height="50" fill="#f9fafb" rx="5" ry="5"></rect>
      <text x="${width/2}" y="30" font-size="18" font-weight="bold" text-anchor="middle" font-family="Helvetica">${title}</text>
      <line x1="50" y1="50" x2="${width-50}" y2="50" stroke="#e5e7eb" stroke-width="1"></line>
      
      <g transform="translate(0, 10)">
        ${slices}
        ${centerCircle}
        ${centerText}
      </g>
      
      <g transform="translate(10, 30)">
        ${legend}
      </g>
    </svg>
  `;
  
  return svg;
}

// Función para generar un gráfico de barras SVG como alternativa visual
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function generateBarChartSVG(categories: CategoryTotal[], title: string, isExpense: boolean = false): string {
  if (!categories || categories.length === 0) {
    return `
      <svg width="400" height="150" xmlns="http://www.w3.org/2000/svg">
        <text x="200" y="75" font-size="16" font-weight="bold" text-anchor="middle">No hay datos disponibles para ${title}</text>
      </svg>
    `;
  }
  
  const width = 400;
  const height = Math.max(300, 100 + categories.length * 50); // Altura dinámica basada en número de categorías
  
  const barMaxWidth = 300;
  const barHeight = 25;
  const barGap = 25;
  
  // Ordenar categorías por monto (mayor a menor)
  const sortedCategories = [...categories].sort((a, b) => b.total - a.total);
  
  let bars = '';
  
  // Encontrar el valor máximo para escalar las barras
  const maxValue = Math.max(...sortedCategories.map(cat => cat.total));
  
  // Crear las barras con etiquetas
  sortedCategories.forEach((category, index) => {
    const y = 80 + index * barGap;
    const barWidth = (category.total / maxValue) * barMaxWidth;
    
    bars += `
      <g transform="translate(0, ${y})">
        <text x="0" y="0" font-size="14" font-family="Helvetica" dominant-baseline="middle">${category.name}</text>
        <rect x="90" y="-${barHeight/2}" width="${barWidth}" height="${barHeight}" rx="4" ry="4" fill="${category.color}" filter="url(#shadow)"></rect>
        <text x="${barWidth + 100}" y="0" font-size="14" font-family="Helvetica" dominant-baseline="middle" fill="#111827">$ ${category.total.toFixed(2)}</text>
        <text x="${barWidth + 100}" y="18" font-size="12" font-family="Helvetica" fill="#6b7280">${category.percentage.toFixed(1)}%</text>
      </g>
    `;
  });
  
  // Definir sombras y gradientes
  const defs = `
    <defs>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="1" dy="1" stdDeviation="1" flood-opacity="0.3" />
      </filter>
    </defs>
  `;
  
  // Ensamblar el SVG completo
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      ${defs}
      <rect x="0" y="0" width="${width}" height="50" fill="#f9fafb" rx="5" ry="5"></rect>
      <text x="${width/2}" y="30" font-size="18" font-weight="bold" text-anchor="middle" font-family="Helvetica">${title}</text>
      <line x1="50" y1="50" x2="${width-50}" y2="50" stroke="#e5e7eb" stroke-width="1"></line>
      
      ${bars}
    </svg>
  `;
  
  return svg;
}

export const generatePDFService = (transactions: TransactionReport[], reportDate: string): TDocumentDefinitions => {
  // Calcular totales
  let totalIngresos = 0;
  let totalGastos = 0;

  transactions.forEach((transaction) => {
    const amount = parseFloat(String(transaction.amount));
    if (transaction.category!.type === 'Ingreso') {
      totalIngresos += amount;
    } else if (transaction.category!.type === 'Gasto') {
      totalGastos += amount;
    }
  });
  const balance = totalIngresos - totalGastos;

  // Procesar datos para los gráficos
  const gastosPorCategoria: Record<string, number> = {};
  const ingresosPorCategoria: Record<string, number> = {};
  
  transactions.forEach((transaction) => {
    const amount = parseFloat(String(transaction.amount));
    const categoryName = transaction.category!.name;
    
    if (transaction.category!.type === 'Ingreso') {
      ingresosPorCategoria[categoryName] = (ingresosPorCategoria[categoryName] || 0) + amount;
    } else if (transaction.category!.type === 'Gasto') {
      gastosPorCategoria[categoryName] = (gastosPorCategoria[categoryName] || 0) + amount;
    }
  });
  
  // Convertir a arrays para los gráficos
  const gastosArray: CategoryTotal[] = Object.entries(gastosPorCategoria).map(([name, total], index) => ({
    name,
    total,
    percentage: (total / totalGastos) * 100,
    color: CHART_COLORS[index % CHART_COLORS.length]
  }));
  
  const ingresosArray: CategoryTotal[] = Object.entries(ingresosPorCategoria).map(([name, total], index) => ({
    name,
    total,
    percentage: (total / totalIngresos) * 100,
    color: CHART_COLORS[index % CHART_COLORS.length]
  }));
  
  // Generar SVGs para los gráficos
  const gastosPieChart = generatePieChartSVG(gastosArray, 'Distribución de Gastos');
  const ingresosPieChart = generatePieChartSVG(ingresosArray, 'Distribución de Ingresos');
  
  // Generar gráficos de barras como visualización alternativa
  const gastosBarChart = generateBarChartSVG(gastosArray, 'Gastos por Categoría', true);
  const ingresosBarChart = generateBarChartSVG(ingresosArray, 'Ingresos por Categoría', false);

  // Crear el cuerpo de la tabla
  const tableBody = [
    [
      { text: 'Nombre', style: 'tableHeader' },
      { text: 'Categoría', style: 'tableHeader' },
      { text: 'Tipo', style: 'tableHeader' },
      { text: 'Fecha', style: 'tableHeader' },
      { text: 'Hora', style: 'tableHeader' },
      { text: 'Monto', style: 'tableHeader' },
    ],
    ...transactions.map((transaction) => [
      transaction.name,
      transaction.category!.name,
      transaction.category!.type,
      transaction.date,
      transaction.time,
      `$ ${parseFloat(String(transaction.amount)).toFixed(2)}`,
    ]),
  ];

  // Definir el contenido del PDF
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any[] = [];

  // Primera página - Resumen general y tabla de transacciones
  // Encabezado con logo y título
  content.push({
    columns: [
      { image: variable64.miVar, width: 50, margin: [0, 10, 0, 0] }, // Logo con margen
      {
        stack: [
          { text: 'Finzen App', style: 'header' },
          { text: 'Reporte de Transacciones', style: 'subheader' },
          { text: `Fecha: ${reportDate}`, style: 'dateText' },
        ],
        alignment: 'right',
      },
    ],
    margin: [0, 0, 0, 20], // Espacio debajo del encabezado
  });

  // Código QR
  content.push({
    qr: 'https://fin-zen.vercel.app',
    fit: 80,
    alignment: 'right',
    margin: [0, 0, 0, 20],
  });

  // Tabla de transacciones
  content.push({
    table: {
      headerRows: 1,
      widths: ['*', '*', '*', '*', '*', 60],
      body: tableBody,
    },
    layout: {
      fillColor: (rowIndex: number) => {
        return rowIndex === 0 ? '#e5e7eb' : null; // Fondo gris claro solo para el encabezado (gray-200)
      },
      hLineWidth: () => 1,
      vLineWidth: () => 0,
      hLineColor: () => '#d1d5db', // Líneas horizontales en gris suave (gray-300)
    },
    margin: [0, 0, 0, 20],
  });

  // Resumen de totales con diseño tipo Tailwind
  content.push({
    columns: [
      { text: '', width: '*' }, // Espacio a la izquierda
      {
        stack: [
          {
            text: `Total Ingresos: $ ${totalIngresos.toFixed(2)}`,
            style: 'totalIncome',
          },
          {
            text: `Total Gastos: $ ${totalGastos.toFixed(2)}`,
            style: 'totalExpense',
          },
          {
            text: `Balance: $ ${balance.toFixed(2)}`,
            style: balance >= 0 ? 'totalPositive' : 'totalNegative',
          },
        ],
        alignment: 'right',
      },
    ],
    margin: [0, 0, 0, 20],
  });
  
  // Añadir un salto de página antes de los gráficos
  content.push({
    text: '',
    pageBreak: 'before'
  });
  
  // Segunda página - Análisis visual con gráficos
  // Encabezado de la sección de análisis
  content.push({
    stack: [
      { text: 'Análisis Visual de Transacciones', style: 'analysisHeader' },
      { text: `Periodo: ${reportDate}`, style: 'dateText' },
    ],
    margin: [0, 0, 0, 30],
  });
  
  // Información resumen en diseño tipo tarjeta para la parte superior
  content.push({
    columns: [
      {
        stack: [
          { text: 'Total Ingresos', style: 'cardTitle' },
          { text: `$ ${totalIngresos.toFixed(2)}`, style: 'cardValue' },
        ],
        alignment: 'center',
        margin: [0, 0, 5, 0],
        background: '#f0fdf4', // green-50
        borderRadius: 5,
        padding: 10,
      },
      {
        stack: [
          { text: 'Total Gastos', style: 'cardTitle' },
          { text: `$ ${totalGastos.toFixed(2)}`, style: 'cardValue' },
        ],
        alignment: 'center',
        margin: [5, 0, 5, 0],
        background: '#fef2f2', // red-50
        borderRadius: 5,
        padding: 10,
      },
      {
        stack: [
          { text: 'Balance', style: 'cardTitle' },
          { 
            text: `$ ${balance.toFixed(2)}`, 
            style: balance >= 0 ? 'positiveCardValue' : 'negativeCardValue'
          },
        ],
        alignment: 'center',
        margin: [5, 0, 0, 0],
        background: balance >= 0 ? '#f0fdf4' : '#fef2f2',
        borderRadius: 5,
        padding: 10,
      },
    ],
    margin: [0, 0, 0, 30],
  });
  
  // Gráficos circulares
  if (gastosArray.length > 0 || ingresosArray.length > 0) {
    content.push({
      text: 'Distribución por Categorías',
      style: 'sectionHeader',
      margin: [0, 0, 0, 15],
    });
  }
  
  // Mostrar gráficos circulares 
  if (gastosArray.length > 0) {
    content.push({
      svg: gastosPieChart,
      width: 400,
      alignment: 'center',
      margin: [0, 0, 0, 20],
    });
  }
  
  if (ingresosArray.length > 0) {
    content.push({
      svg: ingresosPieChart,
      width: 400,
      alignment: 'center',
      margin: [0, 0, 0, 20],
    });
  }
  
  // Gráficos de barras (si hay espacio o en otra página)
  if (gastosArray.length > 0 || ingresosArray.length > 0) {
    // Añadir salto de página si hay muchas categorías
    if ((gastosArray.length + ingresosArray.length) > 8) {
      content.push({
        text: '',
        pageBreak: 'before'
      });
    }
    
    content.push({
      text: 'Análisis Detallado',
      style: 'sectionHeader',
      margin: [0, 0, 0, 15],
    });
  }
  
  if (gastosArray.length > 0) {
    content.push({
      svg: gastosBarChart,
      width: 400,
      alignment: 'center',
      margin: [0, 0, 0, 20],
    });
  }
  
  if (ingresosArray.length > 0) {
    content.push({
      svg: ingresosBarChart,
      width: 400,
      alignment: 'center',
      margin: [0, 0, 0, 20],
    });
  }
  
  // Pie de página analítico
  content.push({
    text: 'Este reporte proporciona un análisis detallado de sus transacciones financieras. Utilice esta información para tomar decisiones financieras más informadas.',
    style: 'footer',
    alignment: 'center',
    margin: [0, 30, 0, 0],
  });

  // Definir estilos con mejor UI
  const styles = {
    header: {
      fontSize: 18,
      bold: true,
      color: '#1f2937', // gray-800
      margin: [0, 0, 0, 4],
    },
    subheader: {
      fontSize: 14,
      bold: true,
      color: '#4b5563', // gray-600
      margin: [0, 0, 0, 4],
    },
    dateText: {
      fontSize: 12,
      color: '#6b7280', // gray-500
    },
    tableHeader: {
      fontSize: 12,
      bold: true,
      color: '#111827', // gray-900
      margin: [0, 4, 0, 4],
    },
    totalIncome: {
      fontSize: 14,
      bold: true,
      color: '#16a34a', // green-600
      margin: [0, 4, 0, 4],
    },
    totalExpense: {
      fontSize: 14,
      bold: true,
      color: '#dc2626', // red-600
      margin: [0, 4, 0, 4],
    },
    totalPositive: {
      fontSize: 14,
      bold: true,
      color: '#16a34a', // green-600
      margin: [0, 4, 0, 4],
    },
    totalNegative: {
      fontSize: 14,
      bold: true,
      color: '#dc2626', // red-600
      margin: [0, 4, 0, 4],
    },
    analysisHeader: {
      fontSize: 22,
      bold: true,
      color: '#1f2937', // gray-800
      margin: [0, 0, 0, 5],
    },
    sectionHeader: {
      fontSize: 16,
      bold: true,
      color: '#1f2937', // gray-800
      margin: [0, 0, 0, 8],
    },
    cardTitle: {
      fontSize: 14,
      color: '#4b5563', // gray-600
      margin: [0, 0, 0, 5],
    },
    cardValue: {
      fontSize: 18,
      bold: true,
      color: '#111827', // gray-900
    },
    positiveCardValue: {
      fontSize: 18,
      bold: true,
      color: '#16a34a', // green-600
    },
    negativeCardValue: {
      fontSize: 18,
      bold: true,
      color: '#dc2626', // red-600
    },
    footer: {
      fontSize: 10,
      italic: true,
      color: '#6b7280', // gray-500
    },
  };

  // Definir el documento
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const docDefinition: any = {
    content,
    styles,
    pageMargins: [40, 40, 40, 40], // Márgenes de página tipo Tailwind (p-10)
    defaultStyle: {
      font: 'Roboto', // Opcional, si agregas la fuente Roboto
    },
    // Añadir número de página en el pie de página
    footer: function(currentPage: number, pageCount: number) {
      return {
        text: `Página ${currentPage} de ${pageCount}`,
        alignment: 'right',
        margin: [0, 0, 40, 0],
        fontSize: 8,
        color: '#9ca3af', // gray-400
      };
    },
  };

 return docDefinition;
};

export default generatePDFService;