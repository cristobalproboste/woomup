
# Demo
El demo se esta ejecutando en una instancia EC2 de AWS, para ver el demo online haz click [Aquí](https://woomup.cristobalproboste.com).

# Instrucciones para test local
## Requisitos:
Estar en una maquina con **NodeJS**, **NPM** y **Git** instalado

## Desde terminal de comandos:

**Clonar el proyecto**

    git clone https://github.com/cristobalproboste/woomup.git
**Ingresar a cada carpeta desde un terminal diferente (client y server)** 


    cd C:\Users\User\Desktop\woomup\server //Ejemplo

**Correr el siguiente comando para ambas:**

    npm install


## Para iniciar el proyecto:
El orden no es relevante, pero recomiendo iniciar primero el server.

**En server**	 
Solo ejecutar : `npm start`
 
 

 **En client:** 
Hay dos opciones para probar:
 1. Versión de desarrollo :
	 `npm run dev`
 2. Versión de producción: 
	 `npm run build`, luego `npm start`
	 
*Este segundo es mas lento de iniciar, pero la aplicación tendrá mejor rendimiento.*
