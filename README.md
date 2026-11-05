# Inglés Diario

Tarjetas de frases con repetición espaciada. Tu progreso es solo tuyo.

## Dónde se guarda tu progreso

- **Sin configurar nada:** solo en el navegador de ese dispositivo (`localStorage`). En iPhone, Safari puede borrarlo si no abres el sitio en ~7 días o si falta espacio. Por eso conviene el paso siguiente.
- **Con tu cuenta de GitHub (recomendado, 1 minuto):** el progreso se guarda además en un gist privado de tu cuenta. Ver la sección siguiente.
- **Con tu cuenta de Google:** el progreso se guarda además en un archivo `ingles-diario-progreso.json` en **tu** Google Drive. Si Safari borra sus datos, al abrir la app se recupera solo.

## Guardar el progreso con tu cuenta de GitHub

1. En la app, abre **Ajustes** y busca **Guardar con tu cuenta de GitHub**.
2. Toca **Crea un token**. Se abre GitHub con el permiso `gist` ya marcado. Genera el token y cópialo.
3. Pégalo en la app y toca **Conectar**.

La app crea un gist privado llamado `ingles-diario-progreso.json` y lo mantiene sincronizado. Si cambias de teléfono o Safari borra los datos, repite los pasos 1 a 3 y tu historial vuelve. El token queda solo en ese navegador y la app lo usa únicamente para leer y escribir ese gist. No lo compartas.

Esta opción solo guarda el progreso. Las frases siguen siendo las incluidas en la app, o las de tu hoja si conectas Apps Script. Puedes usar GitHub y Google a la vez.

## Conectar tu cuenta de Google (una sola vez, ~5 minutos)

1. Entra a <https://script.google.com> con tu cuenta y crea un **Proyecto nuevo**.
2. Borra el contenido y pega todo el archivo `Code.gs` de este repositorio.
3. Cambia `CAMBIA-ESTA-CLAVE` por una clave larga inventada por ti (solo letras y números).
4. **Implementar → Nueva implementación → Tipo: Aplicación web**.
   - Ejecutar como: **Yo**
   - Quién tiene acceso: **Cualquier persona**
   - Autoriza los permisos cuando Google los pida (necesita acceso a Drive para crear el archivo).
5. Copia la **URL de la aplicación web** (termina en `/exec`).
6. En la app, abre **Ajustes** y pega: `URL/exec?key=TU_CLAVE` (ejemplo: `https://script.google.com/macros/s/XXXX/exec?key=miclave123`). Toca **Guardar**.

Verás "Conectado" y, debajo, "Guardado en tu cuenta de Google". Si algún día cambias de teléfono o Safari borra los datos, repite solo el paso 6 y tu historial vuelve.

### Para tu acceso directo de Atajos (recomendado)

En la acción **Abrir URL** de tu atajo, agrega al final de la dirección de la app `#conn=` seguido de la misma dirección del paso 6. Ejemplo:

`https://TU-SITIO/index.html#conn=https://script.google.com/macros/s/XXXX/exec?key=miclave123`

Así, aunque Safari borre todos los datos, al abrir el atajo la app se reconecta sola y recupera tu historial, sin pegar nada.

Nota: quien conozca la URL y la clave podría leer tu progreso; no las compartas.

## Respaldo manual

En Ajustes, **Copiar** guarda todo el progreso como texto; **Restaurar** lo recupera.
