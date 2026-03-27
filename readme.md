// Gerador automático de cenários coerentes para prompts de mini mundos 3D
//
// Objetivo:
// evitar combinações aleatórias sem sentido, como vila nevada com coqueiros,
// templo japonês com terreno vulcânico, etc.
//
// Estratégia:
// 1) cada tema possui um "mundo" coerente com listas próprias
// 2) estação, clima, iluminação e paleta são controlados por regras do tema
// 3) overrides ainda são permitidos, mas a base gerada sempre parte de um conjunto consistente
//
// Uso:
//   const prompt = buildPrompt();
//   const prompt2 = buildPrompt({ theme: 'jungle' });
//   const prompt3 = buildPrompt({ theme: 'snow', season: 'winter', timeOfDay: 'sunset' });
//   const pack = generateVariations(5, { theme: 'japanese' });
//
// Funciona em Node.js e navegador.