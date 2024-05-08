import * as fs from 'fs';

export function readJSONFile(filePath: string): string {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading file:', err);
        throw err; // Re-lanzar el error para manejo externo si es necesario
    }
}