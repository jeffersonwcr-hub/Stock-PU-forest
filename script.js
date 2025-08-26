<script>
async function mostrarStockBajo() {
  // ⚡ CAMBIA "DATA.csv" por tu link de Google Sheets en formato CSV
  const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTDJUlMlBorJ7CrMhC7Rc442tQEOVyWo-4xvjZL19CdeO0j1GY2ELorKL9lnnb_5IG2-vlw8-RcLAhY/pub?gid=0&single=true&output=csv');
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

// 👉 Ejecuta la función al cargar
mostrarStockBajo();
