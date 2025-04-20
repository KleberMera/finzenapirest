import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { variable64 } from './img'; // Asegúrate de que esta variable esté definida
import { TransactionReport } from 'src/models/trasaction.interface';

interface CategoryTotal {
  name: string;
  total: number;
  percentage: number;
  color: string;
}

// Colores para las categorías (puedes personalizar esta lista)
const CHART_COLORS = [
  '#3b82f6', // blue-500
  '#ef4444', // red-500
  '#10b981', // emerald-500
  '#f59e0b', // amber-500
  '#8b5cf6', // violet-500
  '#ec4899', // pink-500
  '#06b6d4', // cyan-500
  '#f97316', // orange-500
  '#14b8a6', // teal-500
  '#6366f1', // indigo-500
];

// Función para generar un gráfico circular SVG
function generatePieChartSVG(categories: CategoryTotal[], title: string): string {
  const size = 200;
  const radius = 80;
  const centerX = size / 2;
  const centerY = size / 2;
  
  let startAngle = 0;
  let slices = '';
  let legend = '';
  
  // Crear los segmentos del pie
  categories.forEach((category, index) => {
    const endAngle = startAngle + (category.percentage / 100) * (2 * Math.PI);
    
    // Calcular los puntos del arco
    const x1 = centerX + radius * Math.cos(startAngle);
    const y1 = centerY + radius * Math.sin(startAngle);
    const x2 = centerX + radius * Math.cos(endAngle);
    const y2 = centerY + radius * Math.sin(endAngle);
    
    // Determinar si el arco es mayor que 180 grados (π radianes)
    const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;
    
    // Crear el path para el segmento
    const path = `M${centerX},${centerY} L${x1},${y1} A${radius},${radius} 0 ${largeArcFlag},1 ${x2},${y2} Z`;
    
    slices += `<path d="${path}" fill="${category.color}" stroke="white" stroke-width="1"></path>`;
    
    // Crear la leyenda
    const legendY = 220 + index * 20;
    legend += `
      <rect x="20" y="${legendY}" width="15" height="15" fill="${category.color}"></rect>
      <text x="40" y="${legendY + 12}" font-size="12">${category.name}: ${category.percentage.toFixed(1)}% ($ ${category.total.toFixed(2)})</text>
    `;
    
    startAngle = endAngle;
  });
  
  // Ensamblar el SVG completo
  const svg = `
    <svg width="${size}" height="${size + 20 + categories.length * 20}" xmlns="http://www.w3.org/2000/svg">
      <text x="${size/2}" y="20" font-size="16" font-weight="bold" text-anchor="middle">${title}</text>
      <g transform="translate(0, 30)">
        ${slices}
      </g>
      <g transform="translate(0, 30)">
        ${legend}
      </g>
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
  const gastosSVG = generatePieChartSVG(gastosArray, 'Distribución de Gastos');
  const ingresosSVG = generatePieChartSVG(ingresosArray, 'Distribución de Ingresos');

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
  
  // Añadir sección de gráficos
  content.push({
    text: 'Análisis de Transacciones',
    style: 'sectionHeader',
    margin: [0, 0, 0, 10],
  });
  
  // Mostrar gráficos lado a lado si ambos existen
  if (gastosSVG && ingresosSVG) {
    content.push({
      columns: [
        {
          svg: gastosSVG,
          width: 250,
          margin: [0, 0, 10, 0],
        },
        {
          svg: ingresosSVG,
          width: 250,
          margin: [10, 0, 0, 0],
        },
      ],
      margin: [0, 0, 0, 20],
    });
  } else {
    // Mostrar solo uno si el otro no tiene datos
    if (gastosSVG) {
      content.push({
        svg: gastosSVG,
        width: 300,
        margin: [0, 0, 0, 20],
      });
    }
    
    if (ingresosSVG) {
      content.push({
        svg: ingresosSVG,
        width: 300,
        margin: [0, 0, 0, 20],
      });
    }
  }

  // Definir estilos inspirados en Flowbite/Tailwind
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
    sectionHeader: {
      fontSize: 16,
      bold: true,
      color: '#1f2937', // gray-800
      margin: [0, 0, 0, 8],
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
  };

 return docDefinition;
};

export default generatePDFService;