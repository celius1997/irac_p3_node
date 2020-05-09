# Gestión dinámica mediante API REST de claeves DRM

Se ha partido de la filosofía del streaming de contenido audiovisual, que determina que, en primer lugar ,el video es codificado a diferentes calidades, encriptado, paquetizado  (siguiendo múltiples esquemas DRM a ser posible), y almacenado.

## Preparación del vídeo

Para la codificación de video se han utilizado las herramientas: `x264` y `MP4Box`.
Se han genereado 3 calidades diferentes:  160x90 a 100 kbits, 640x360 a 600 kbits y 1280x720 a 2400 kbits.

Seguidamente, cuando el cliente solicita la reproducción del contenido, el servidor de video debe realizar una consulta al servidor de licencias para determinar
si el usuario está autorizado para reproducir el contenido y, de ser así, responde con la clave necesaria para desencriptar dicho contenido.  

## Arquitectura
La siguiente figura muestra la arquitectura implementada mediante contenedores docker: 


* **Server1 (app)**: este contenedor ejecuta un servidor de Express.Js, y esta escuchando en el puerto 8000. Es el encargadod e responder a las peticiones REST del cliente. 
* **Server2 (client)**:este contendeor ejecuta el servidor básico de Python, que escucha en el puerto 3001, y es el que realiza la petición GET mediante la ruta http://localhost:8000/keyID/:userId
para obtener la KEY de desencrpitación

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local._

### Pre-requisitos 📋

* Tener instaldo `docker` y `docker-compose` en tu máquina

### Instalación 🔧

_Clona este repositorio en tu equipo_

```
git clone https://github.com/celius1997/irac_p3_node
```

_Desde el directorio raíz ejecuta el comando:_

```
docker-compose build
```

_Una vez construidos los contenedores, debes incializar su ejecución_

```
docker-compose up -d
```

_Si quires ver las trazas de alguno de los dos servicios en consola ejecuta:_

```
docker-compose logs -f app
```
ó
```
docker-compose logs -f client
```

### Reproducción de video

Una vez están los contenedores levantando sy ejecutándose, navega desde tu navegador (se recomienda el uso de Chrome) a la URL: 

```
http://localhost:3001/index3.html
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Dash.js]( https://github.com/Dash-Industry-Forum/dash.js/wiki) - El framework web para la contrucción del reproductor de vídeo
* [x264](https://code.videolan.org/videolan/x264/) - Biblioteca de software libre para codifciar flujos de vídeo H.264
* [MP4Box](https://github.com/gpac/gpac/wiki/MP4Box) - Herramienta usada para la codificación de vídeos en formato MPEG
* [Bento4](https://www.bento4.com/) - Framework que ofrece herramientas de segmentción y encriptación de vídeos entre otras
  * mp4info - Información sobre los archivos de video
  * mp4fragment - Segmentación de los archivos
  * mp4dash - Generación del archivo MPD y jerarquía de segmentos
* [CRIPTII](https://cryptii.com/) - Herramienta online usada para la codificación en base64
* [Express.JS](https://expressjs.com/es/) - Infraestructura para generar el servidor
* [Node.JS](https://nodejs.org/es/) - App
* [Docker](https://www.docker.com/) - Virtualización de la aplicación mediante contenedores
* [Python](https://www.python.org/) - Servidor básico para el cliente

## Autores ✒️

_Menciona a todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Celia Falcón** 
* **Alfonso Jiménez** 
* **Francisco Lorenzo**
* **Cristina Romero**


---
⌨️ con ❤️ por [celius1997](https://github.com/celius1997) 😊
