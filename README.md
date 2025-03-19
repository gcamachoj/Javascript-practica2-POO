# 🚀 Proyecto de Repaso de JavaScript

## 📌 Descripción
Este proyecto es un taller de repaso de **JavaScript**, donde se exploran conceptos fundamentales como **clases, herencia, manipulación del DOM, funciones, arrays, objetos, promesas**, entre otros.

---

## 📂 Estructura del Proyecto

- **index.html** → Archivo principal con la estructura base de la página.
- **clases.js** → Contiene la implementación de las clases `Vehiculo` y `Autobus`.
- **main.js** → Archivo que maneja la manipulación del DOM y otras funcionalidades de JavaScript.

---

## 📜 Explicación de Archivos

### **index.html**
Este archivo define la estructura de la página web, incluyendo un **div** donde se mostrarán datos dinámicamente y enlaza los archivos JavaScript.

```html
<script src="clases.js" type="text/javascript"></script>
<script src="main.js" type="text/javascript"></script>
```

### **clases.js**
Implementa dos clases principales:
- **Vehiculo**: Representa un vehículo con propiedades como `modelo`, `velocidad`, y `antiguedad`, además de métodos para aumentar o disminuir la velocidad.
- **Autobus**: Extiende la clase `Vehiculo`, añadiendo una propiedad `altura` y un método `mostrarAltura()`.

Ejemplo de uso:
```js
var vehiculo1 = new Vehiculo("Audi", 20, 2017);
vehiculo1.aumentarVelocidad();
console.log(vehiculo1.velocidad);
```

### **main.js**
Este archivo maneja la interacción con el DOM y ejecuta diversas funcionalidades como:
- **Mostrar información en la página**
- **Manipulación de arrays**
- **Uso de promesas**
- **Funciones tradicionales y de flecha**

Ejemplo de promesa:
```js
var saludar = new Promise((resolver, reject) => {
    setTimeout(() =>{
        let saludo = "Hola muy buenas a todos los amigos";
        if(saludo){
            resolver(saludo);
        } else {
            reject('No hay saludo disponible');
        }
    }, 2000);
});

saludar.then(resultado => alert(resultado))
       .catch(err => alert(err));
```

---

## 🛠 Instalación y Uso
1. Clonar este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Abrir el archivo `index.html` en un navegador.
3. Explorar la consola del navegador para ver los logs de JavaScript.

---

## 📌 Conceptos Cubiertos
✅ Clases y Herencia en JavaScript  
✅ Manipulación del DOM  
✅ Funciones tradicionales y de flecha  
✅ Promesas y manejo de errores  
✅ Iteración con `forEach`  
✅ Objetos y propiedades  

---

## 📝 Contribuciones
Si deseas contribuir, puedes hacer un **fork** del repositorio, crear una rama con tus cambios y enviar un **pull request**.

---

## 📜 Licencia
Este proyecto está bajo la licencia **MIT**. Puedes usarlo, modificarlo y distribuirlo libremente.

🚀 **¡Feliz programación!** 🎯

