const path = require('path');

//alternativa
//module.exports= path.dirname(require.main.filename);
module.exports= path.dirname(process.mainModule.filename);