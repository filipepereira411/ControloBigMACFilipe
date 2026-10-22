const express = require('express');
const path = require('path');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(__dirname));
app.use(express.json());
app.get('/api/config', (req, res) => {
    res.json({
        supabaseUrl: process.env.SUPABASE_URL,
        supabaseKey: process.env.SUPABASE_ANON_KEY
    });
});
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'gestordispositivos.html'));
});
app.listen(PORT, () => {
    console.log('==================================================');
    console.log(' Servidor Controlo Big MAC Ativo com Sucesso!');
    console.log(' Aceda a: http://localhost:' + PORT);
    console.log('==================================================');
});
