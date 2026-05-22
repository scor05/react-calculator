# The Most Blazingly Fast Calculator
## Descripción
Este es un proyecto realizado con React que consiste en una calculadora simple con las operaciones básicas: suma, resta, multiplicación y división. Sin embargo, como restricción del proyecto: la calculadora no puede mostrar números negativos (tanto por resta como por multiplicación por negativos) ni números con más de 9 cifras significativas (enteros mayores a 999999999 o decimales mayores a 9999999.9). 

---
## Setup
El proyecto fue desarrollado con el manejador de paquetes de `bun`, por lo que todos los comandos para instalar/correr/testear los coloqué con respecto a ese paquete. 

### Instalación
Para instalar el proyecto con todas sus dependencias, solo se debe de correr `bun install`.

### Ejecución
Para correr el proyecto, se puede correr `bun run dev`, lo cual expondrá el puerto `:5173` del sistema local para que se pueda ver en la web en [`localhost:5173`](localhost:5173) o [`127.0.0.1:5173`](127.0.0.1:5173).

### Tests
Para correr los tests, se debe de correr el comando `bun run test`, el cual retornará en el output de la terminal los tests configurados con `vitest`. Con respecto al código en sí, cada componente y función que tiene test(s) se encuentra junto con otro archivo en el mismo directorio con la extensión de prefijo `.test.` antes de la extensión normal `.ts` o `.tsx`.

### Storybook
Para correr Storybook se debe de correr el comando `bun run storybook`, el cual expondrá el puerto `:6006` para que se pueda ver en la web en tanto [`localhost:6006`](localhost:6006) como en la IP pública que retorna Storybook en el output de la terminal.
