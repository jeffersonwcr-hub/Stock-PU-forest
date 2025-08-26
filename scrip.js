document.addEventListener('DOMContentLoaded', () => {
  Papa.parse('stock.csv', {
    download: true,
    header: true,
    complete: function(results) {
      const data = results.data;
      const lowStock = data.filter(item => parseInt(item.stock) < 10);

      const container = document.getElementById('stock-container');
      if (lowStock.length === 0) {
        container.textContent = 'Todos los productos tienen suficiente stock.';
        return;
      }

      lowStock.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.producto} - Stock: ${item.stock}`;
        container.appendChild(div);
      });
    },
    error: function(err) {
      console.error('Error al cargar el CSV:', err);
    }
  });
});
