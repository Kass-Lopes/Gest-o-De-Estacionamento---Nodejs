import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function conectarDB() {
  return open({
    filename: "./database.db",
    driver: sqlite3.Database
  });
}

export async function criarTabelas(db: any) {
  await db.exec(`
    CREATE TABLE IF NOT EXISTS vagas (
      id INTEGER PRIMARY KEY,
      status TEXT
    );

    CREATE TABLE IF NOT EXISTS tickets (
      id TEXT PRIMARY KEY,
      placa TEXT,
      vaga_id INTEGER,
      hora_entrada DATETIME,
      hora_saida DATETIME
    );
  `);

  // Criar 50 vagas se não existir
  const vagas = await db.all("SELECT * FROM vagas");
  if (vagas.length === 0) {
    for (let i = 1; i <= 50; i++) {
      await db.run("INSERT INTO vagas (id, status) VALUES (?, ?)", [i, "LIVRE"]);
    }
  }
}