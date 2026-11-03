/**
 * Inglés Diario - servidor de progreso (Google Apps Script).
 * Guarda tu progreso en un archivo JSON en TU Google Drive.
 * Instrucciones en README.md.
 */

// Cambia esto por una clave larga que solo tú conozcas (la misma que pondrás en la app).
var CLAVE = 'CAMBIA-ESTA-CLAVE';
var NOMBRE_ARCHIVO = 'ingles-diario-progreso.json';

function respuesta_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

function archivo_(crear) {
  var it = DriveApp.getFilesByName(NOMBRE_ARCHIVO);
  if (it.hasNext()) return it.next();
  return crear ? DriveApp.createFile(NOMBRE_ARCHIVO, '', MimeType.PLAIN_TEXT) : null;
}

function doGet(e) {
  var p = (e && e.parameter) || {};
  if (p.key !== CLAVE) return respuesta_({ ok: false, error: 'clave' });
  if (p.action === 'progress') {
    var f = archivo_(false);
    return respuesta_({ ok: true, data: f ? f.getBlob().getDataAsString() : '' });
  }
  if (p.action === 'phrases') {
    // Vacío: la app usa las frases que ya trae incluidas.
    return respuesta_({ ok: true, rows: [] });
  }
  return respuesta_({ ok: false, error: 'acción desconocida' });
}

function doPost(e) {
  var body;
  try { body = JSON.parse(e.postData.contents); } catch (err) { return respuesta_({ ok: false, error: 'datos inválidos' }); }
  if (!body || body.key !== CLAVE) return respuesta_({ ok: false, error: 'clave' });
  if (body.action === 'save' && typeof body.data === 'string') {
    var lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try { archivo_(true).setContent(body.data); } finally { lock.releaseLock(); }
    return respuesta_({ ok: true });
  }
  return respuesta_({ ok: false, error: 'acción desconocida' });
}
