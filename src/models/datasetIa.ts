  // Categorías del SRI para gastos
  export const sriExpenseCategories = [
    { name: 'Vivienda', icon: 'pi pi-home', keywords: ['arriendo', 'alquiler', 'hipoteca', 'agua', 'luz', 'electricidad', 'gas', 'internet', 'teléfono fijo', 'condominio', 'mantenimiento hogar'] },
    { name: 'Salud', icon: 'pi pi-heart', keywords: ['médico', 'doctor', 'hospital', 'clínica', 'farmacia', 'medicinas', 'seguro médico', 'dental', 'odontólogo', 'oftalmólogo', 'lentes', 'tratamiento'] },
    { name: 'Educación', icon: 'pi pi-book', keywords: ['colegio', 'escuela', 'universidad', 'matrícula', 'pensión', 'útiles escolares', 'libros', 'uniformes', 'transporte escolar', 'curso', 'taller'] },
    { name: 'Alimentación', icon: 'pi pi-shopping-cart', keywords: ['supermercado', 'mercado', 'tienda', 'comida', 'alimentos', 'restaurante', 'café', 'frutas', 'verduras', 'carne', 'lácteos'] },
    { name: 'Vestimenta', icon: 'pi pi-tag', keywords: ['ropa', 'calzado', 'zapatos', 'zapatillas', 'pantalón', 'camisa', 'vestido', 'chaqueta', 'abrigo', 'traje', 'uniforme'] },
    { name: 'Transporte', icon: 'pi pi-car', keywords: ['gasolina', 'taxi', 'bus', 'pasaje', 'transporte', 'combustible', 'mantenimiento vehículo', 'peaje'] },
    { name: 'Entretenimiento', icon: 'pi pi-camera', keywords: ['cine', 'teatro', 'concierto', 'evento', 'viaje', 'turismo', 'hotel', 'vacaciones'] },
    { name: 'Otros Gastos', icon: 'pi pi-folder', keywords: ['otro', 'varios', 'misceláneo'] }
  ];

  // Categorías para ingresos
  export const incomeCategories = [
    { name: 'Salario', icon: 'pi pi-dollar', keywords: ['salario', 'sueldo', 'nómina', 'pago mensual', 'remuneración'] },
    { name: 'Honorarios', icon: 'pi pi-briefcase', keywords: ['honorario', 'factura', 'consultoría', 'asesoría', 'freelance', 'servicios profesionales'] },
    { name: 'Inversiones', icon: 'pi pi-chart-line', keywords: ['inversión', 'dividendo', 'interés', 'rendimiento', 'ganancia', 'acción', 'bono'] },
    { name: 'Alquileres', icon: 'pi pi-building', keywords: ['alquiler', 'arriendo', 'renta', 'propiedad'] },
    { name: 'Venta', icon: 'pi pi-shopping-bag', keywords: ['venta', 'comercio', 'negocio', 'mercadería'] },
    { name: 'Préstamos', icon: 'pi pi-wallet', keywords: ['préstamo', 'crédito', 'financiamiento'] },
    { name: 'Reembolsos', icon: 'pi pi-refresh', keywords: ['reembolso', 'devolución', 'retorno', 'reintegro'] },
    { name: 'Otros Ingresos', icon: 'pi pi-money-bill', keywords: ['otro', 'varios', 'misceláneo', 'regalo', 'herencia', 'premio'] }
  ];

  // Palabras clave para identificar transacciones
   export const transactionKeywords = [
    'compra', 'gasto', 'pago', 'pagué', 'compré', 'gasté', 'factura', 'recibo',
    'ingreso', 'cobro', 'cobré', 'recibí', 'me pagaron', 'transferencia', 'depósito',
    'dólares', 'USD', '$', 'euros', '€', 'precio', 'costo', 'valor', 'monto',
    'supermercado', 'tienda', 'restaurante', 'salario', 'sueldo', 'honorarios'
  ];

  // Palabras clave para identificar saludos
  export const greetingKeywords = [
    'hola', 'buenos días', 'buenas tardes', 'buenas noches', 'saludos', 'hey',
    'qué tal', 'cómo estás', 'cómo vas', 'qué hay', 'qué onda', 'qué pasa'
  ];

  // Palabras clave para identificar preguntas sobre la identidad
  export const identityKeywords = [
    'quién eres', 'cómo te llamas', 'tu nombre', 'qué eres', 'qué haces',
    'para qué sirves', 'qué puedes hacer', 'cuál es tu función', 'cuál es tu propósito'
  ];