async function mostrarStockBajo() {
  const response = await fetch('DATA.csv');
  const data = await response.text();

  const filas = data.split('\n').slice(1); // saltamos encabezado
  let html = '<table><tr><th>Artículo</th><th>Stock</th></tr>';

  filas.forEach(linea => {
    const columnas = linea.split(',');
    const nombre = columnas[0];
    const stock = parseInt(columnas[1]);

    if (!isNaN(stock) && stock < 5) {
      html += `<tr><td>${nombre}</td><td>${stock}</td></tr>`;
    }
  });

  html += '</table>';
  document.getElementById('resultado').innerHTML = html;
}
