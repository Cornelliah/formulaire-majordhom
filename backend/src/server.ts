import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import contactRoutes from './routes/contact.routes';


const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true,
}));

app.use(express.json());

app.use('/api', contactRoutes);

app.get('/health', (_, res) => res.json({ status: 'Backend OK' }));

app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur http://localhost:${PORT}`);
});