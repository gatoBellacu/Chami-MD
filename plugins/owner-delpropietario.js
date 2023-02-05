dejar  manejador  =  asíncrono  ( m ,  { conexión , texto } )  =>  {

    deja  quien
    si  ( m . isGroup )  quien  =  m . mencionadoJid [ 0 ] ? m _ mencionadoJid [ 0 ] : m . citado ? m _ citado _ remitente : texto
    más  quién  =  m . charlar
    si  ( ! quién )  lanza  `tag orangnya!`
    if  ( ! global . propietario . incluye ( quién . divide `@` [ 0 ] ) )  throw  'dia bukan Owner!'
    dejar  índice  =  global . propietario _ findIndex ( v  =>  ( v . reemplazar ( / [ ^0-9 ] / g ,  '' )  +  '@s.whatsapp.net' )  ===  ( quién . reemplazar ( / [ ^0-9 ] / g ,  '' )  +  '@s.whatsapp.net' ) )
    mundial _ propietario _ empalme ( índice ,  1 )
    contacto _ respondedor ( m . chat ,  `@ ${ who . split ( '@' ) [ 0 ] } ¡DEJA DE SER PROPIETARIO DEL BOT!` ,  m ,  {
        informacion de contexto : {
            mencionadoJid : [ quien ]
        }
    } )

}
manejador _ ayuda  =  [ 'propietario [@usuario]' ]
manejador _ etiquetas  =  [ 'propietario' ]
manejador _ comando  =  / ^ ( eliminar | hapus | - | del ) propietario $ / i

manejador _ propietario  =  verdadero

 controlador predeterminado de  exportacion
