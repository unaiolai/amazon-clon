const path = require('path');

module.exports = {
  // Otras opciones de configuración de Webpack...

  module: {
    rules: [
      // Otras reglas de carga de archivos...

      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },

  // Otras opciones de configuración de Webpack...
};

