import fs from 'fs';
import path from 'path';

export default async (req, res) => {
  // Căutăm fișierul în directorul public
  const filePath = path.join(process.cwd(), 'public', 'file.txt');
  
  try {
    // Citim fișierul
    const fileContent = fs.readFileSync(filePath, 'utf8');
    // Trimitem conținutul fișierului ca răspuns
    res.status(200).send(fileContent);
  } catch (error) {
    res.status(500).json({ error: 'Fișierul nu a fost găsit' });
  }
};
