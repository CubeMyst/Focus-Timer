# Focus Timer App

La **Focus Timer App** es una aplicación de temporizador de enfoque simple que te ayuda a administrar tu tiempo de trabajo y descanso. Puedes configurar temporizadores para sesiones de trabajo enfocado, cortos descansos y largos descansos, y llevar un registro de las rondas completadas.

## Características

- Configura temporizadores para Focus Time, Short Break y Long Break.
- Inicia, pausa y reinicia el temporizador.
- Visualiza el tiempo restante en formato mm:ss.
- Registra el número de rondas completadas.
- Personaliza la duración de Focus Time, Short Break y Long Break.

## Uso

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias utilizando `npm install` o `yarn install`.
3. Ejecuta la aplicación con `npm start` o `yarn start`.
4. La aplicación se abrirá en tu navegador web.

## Capturas de Pantalla

![image](https://github.com/CubeMyst/Focus-Timer/assets/97372908/3bfb6ba9-f092-4489-b831-ea3bfd7f611a)

*Vista principal de la aplicación*

## Personalización

Puedes personalizar la duración de los temporizadores ajustando las variables en el archivo de configuración.

```javascript
// Configuración de los temporizadores (en minutos)
const focusTime = 25; // Duración del tiempo de enfoque
const shortBreak = 5; // Duración del descanso corto
const longBreak = 30; // Duración del descanso largo
```

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1- Realiza un fork del repositorio.
2- Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
3- Realiza tus cambios y haz commit de tus modificaciones (git commit -m 'Añadir nueva funcionalidad').
4- Sube tus cambios a tu repositorio (push a tu rama).
5- Crea una nueva solicitud de extracción (Pull Request) en GitHub.
