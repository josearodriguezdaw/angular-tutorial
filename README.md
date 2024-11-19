# Angular

# 1. Introducción a Angular:

Angular es un framework que permite desarrollar aplicaciones web donde el cliente asuma la mayor parte de la lógica y descargue al servidor, con la finalidad de que las aplicaciones ejecutadas a través de Internet sean más rápidas.

Está mantenido por Google lo que favorece su desarrollo, mantenimiento y tiene una fuerte comunicada.

Angular permite crear aplicaciones web de una sola página (**SPA, Single Page Application**), realizando la carga de datos de forma asíncrona.

Las aplicaciones en Angular se encuentran modularizadas en **Componentes** con el objetivo de independizar las diferentes funcionalidades de la aplicación. Cada uno de los **Componentes** se encuentran conformados por una **Plantilla**, una hoja de estilos y un **Controlador** que representa a dicho componentes y desde dónde se manejará su comportamiento.

Tomando como ejemplo una app tipo to-do list: La carcasa que engloba toda la app, la barra de navegación, un listado de tareas, cada una de las tareas, o un editor de tareas… son todo vistas controladas por componentes.

![Component Structure](https://raw.githubusercontent.com/josearodriguezdaw/angular-tutorial/refs/heads/main/readme-images/component-structure.png)

# 2. Creación de un proyecto Angular.

Para poder crear un proyecto en Angular previamente necesitamos tener instalado node y typescript. Además, es necesario instalar Angular CLI, herramienta que nos permitirá crear la estructura de un proyecto Angular.

```bash
npm install -g @angular/cli
```

Una vez instalado Angular CLI podremos crear un nuevo proyecto mediante el siguiente comando:

```bash
ng new <nombre_proyecto>
```

Tras lanzar el comando nos pedirá que indiquemos el lenguaje que usaremos para los estilos CSS y si deseamos usar routing en nuestra aplicación.

Una vez creado nuestro proyecto podemos lanzarlo con el siguiente comando:

```jsx
ng serve
```

Desde este momento todos los cambios que realicemos en nuestra aplicación se desplegarán de manera automática en el servidor.

# 3. Estructura de un proyecto Angular

***public/*** :  carpeta que almacena los archivos estáticos como imágenes, fuentes, etc.

***src/** :* carpeta donde se encuentra el código fuente de la aplicación.

***app/***: contiene los componentes, servicios, modelos y otras funcionalidades de la aplicación.

***components/*** : carpeta que contiene los diferentes componentes de la aplicación, mediante la definición de constantes, variables de configuración o parámetros que se usarán en diferentes partes.

***services/*** : carpeta que contiene los servicios que gestionan la lógica de negocio y la comunicación con las APIs.

***models/*** : contiene las interfaces y las clases que definen el modelo de datos.

***pipes/*** : carpeta que almacena los pipes personalizados.

**app.config.ts :** archivo donde se centraliza la configuración de la aplicación.

**app.routes.ts :** archivo que contiene las configuraciones de las rutas. Básicamente una routa o route se usa para mapear un componente a una URL específica.

**index.html** : archivo HTML principal donde se carga la aplicación.

**main.ts** : el punto de entrada de la aplicación, dónde se inicializa el componente principal.

**styles.css** : archivo que contiene los estilos globales de la aplicación.

**angular.json :** archivo de configuración de Angular CLI dónde se definen las opciones del proyecto, cómo, por ejemplo, rutas, estilos, scripts, etc.

**package.json :** contiene las dependencias del proyecto, scripts para ejecutar tareas y metadatos del proyecto.

**tsconfig.json :** archivo de configuración de TypeScript dónde se especifican las opciones para el compilador.

**node_modules/** :  carpeta que contiene las dependencias npm que han sido instaladas.

Dentro de la carpeta src/app se encuentra el componente principal de la aplicación. Cada componente está formado por los siguientes archivos:

- **app.component.ts** → clase dónde se implementará los diferentes métodos y atributos para dotar de funcionalidad a un componente.
    
    Todo componente tiene una clase Controlador decorada con @Component donde se definen propiedades y métodos que están disponibles en su template.
    
    ```jsx
    @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
    })
    ```
    
    ¿Qué opciones de configuración estoy pasando en los metadatos?
    
    - selector: etiqueta que será usada para importar el componente en un documento HTML. En este ejemplo, cuando se use la etiqueta <app-root> <app-root/> se reemplazará por todo el contenido del componente indicado.
    - standalone: marca el componente como independiente.
    - imports: se emplea para especificar otros módulos que necesita el componente. Esto es útil cuando el componente necesita funcionalidades de otros módulos.
    - templateURL: la ruta dónde se encuentra el template que quieres vincular al componente.
    - styleURL: ruta donde se encuentra el archivo que contiene los estilos del componente.
- **app.component.html** → plantilla HTML asociada al componente.
- **app.component.css** → archivo de estilos asociado al componente.
- **app.component.spec.ts** → archivo donde se implementarán las pruebas funcionales del componente.

![Proyect Structure](https://raw.githubusercontent.com/josearodriguezdaw/angular-tutorial/refs/heads/main/readme-images/structure.png)

# 4. Instalación de Bootstrap en Angular

Bootstrap es un popular **framework de CSS** que facilita el desarrollo de aplicacionesw web con diseños modernos, adaptativos y consistentes. Proporciona una serie de **estilos predefinidos**, **componentes** y **utilidades CSS** para la creación rápida de interfaces atractivas y responsive, es decir, que se adaptan automáticamente a diferentes tamaños de pantalla (escritorios, tablets, móviles, etc.).

## 4.1. ¿Cómo funciona Bootstrap?

Boostrap se basa en un sistema de rejilla o grid. El sistema de **rejilla** (grid) de Bootstrap permite organizar y alinear contenido en una página dividiéndola en hasta **12 columnas** por fila. Este sistema es adaptable y responsive, lo que significa que las columnas se ajustan automáticamente según el tamaño de la pantalla del dispositivo.

La configuración de cada una de las filas y las columnas de la aplicación la realizaremos estableciendo clases a cada uno de los componentes. 

## 4.2. Principios de Bootstrap.

1. Contenedores : 
    - Los contenedores .container o .container-fluid es el elemento principal dónde vamos a introducir las filas y las columnas.
    - `.container` tiene un ancho fijo que se adapta a diferentes tamaños de pantalla, mientras que `.container-fluid` se extiende a todo el ancho de la pantalla.

2. Filas: 

- Dentro de un contenedor, se usa la clase `.row` para crear una fila. Las filas dividen el contenido horizontalmente y organizan las columnas dentro de ellas.
1. Columnas
    - Dentro de cada fila, se agregan columnas usando clases como `.col`, `.col-md-6`, `.col-lg-4`, etc.
    - La rejilla de Bootstrap se basa en un sistema de 12 columnas, así que se pueden combinar diferentes tamaños para lograr distribuciones variadas (por ejemplo, `.col-6` ocupa 6 de las 12 columnas, es decir, la mitad del ancho).
    - Bootstrap incluye clases específicas para diferentes tamaños de pantalla: `.col-sm-` para móviles, `.col-md-` para tabletas, `.col-lg-` para pantallas grandes y `.col-xl-` para pantallas extra grandes.
    - Estas clases permiten que las columnas cambien de tamaño o se reorganicen según el dispositivo, haciendo que el diseño sea responsive.

## 4.3. Instalación de Bootstrap en un proyecto Angular:

Existen varias formas de instalar Bootstrap en un proyecto Angular. La forma en la que nosotros lo realizaremos será instalando la dependencia de node en nuestro proyecto e importando los archivos de Boostrap en el archivo de configuración de `angular.json`.

Para instalar el módulo de Boostrap desde node tenemos que lanzar el siguiente comando desde la terminal de nuestro proyecto:

```tsx
npm install bootstrap@5.3.3
npm install bootstrap-icons
```

Tener en cuenta que mediante `@5.3.3` estamos definiendo la versión que deseamos instalar. También podemos lanzar este mismo comando sin usar `@5.3.3` y se instalará la última versión.

Podemos observar cómo se ha añadido dicha dependencia al archivo `package.json` de nuestro proyecto:

```json
    "bootstrap": "^5.3.3",
```

Una vez instalado el módulo de node, tenemos que indicarle a Angular dónde se encuentra el archivo que contiene los estilos del framework y el archivo de funcionalidades .js. Para ello, modificaremos el archivo `angular.json` y añadiremos las siguientes líneas.

```json
"styles": [
  "src/styles.css",
  **"node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/bootstrap-icons/font/bootstrap-icons.min.css"**
],
"scripts": [
  **"node_modules/bootstrap/dist/js/bootstrap.min.js"**
]
```

`<i class="bi bi-airplane-engines"></i>`

Ya tendríamos Boostrap listo para ser usado en nuestro proyecto Angular.

## 4.4. Ejemplo básico:

```html
<div class="container">
<div class="row">
<div class="col-md-4">Columna 1</div>
<div class="col-md-4">Columna 2</div>
<div class="col-md-4">Columna 3</div>
</div>
</div>
```

En este ejemplo las columnas se dividen en partes iguales de 4 columnas cada una (3x4=12 columnas)

En dispositivos medianos y más grandes estas columnas se mostrarán en una sola fila. En dispositivos más pequeños se ajustarán automáticamente en filas de una sola columna.

## Ejercicio 1: Instalación de Bootstrap.

Realiza la instalación de Bootstrap y Bootstrap Icons en tu proyecto de Angular.


# 5. Interpolación.

La interpolación es una técnica que se utiliza en Angular para enlazar datos desde el controlador a la vista o plantilla HTML, lo que nos permitirá mostrar valores de las propiedades de un componente de manera dinámica. 

Para poder indicarle al framework que evalué una expresión de controlador usaremos dobles llaves {{ expresion }}

Supongamos que tenemos una propiedad llamada nombre en el controlador de mi componente:

```tsx
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '@josearodriguezdaw';
}

```

En la plantilla interpolaremos el valor de title de la siguiente forma:

```html
<h1>{{title}}</h1>
```

Al ejecutar este código, el navegador renderizará así:

![Interpolation](https://raw.githubusercontent.com/josearodriguezdaw/angular-tutorial/refs/heads/main/readme-images/interpolation.png)

## Características de la interpolación:

- Permite evaluar expresiones simples de TypeScript:
    
    ```html
    <p>El año es: {{ 2024 }}</p>
    <p>La suma es: {{ 2 + 3 }}</p>
    ```
    
- Permite realizar llamadas a métodos:
    
    ```html
    <p>Mensaje: {{ obtenerMensaje() }}</p>
    ```
    

# 6. Componentes.

En Angular un componente es una de las piezas fundamentales de la aplicación. Los componentes son bloques de funcionalidades independientes y reutilizables que controlan una parte de la interfaz gráfica de usuario. Como hemos mencionado anteriormente, cada componente tiene su controlador, su plantilla HTML, su hoja de estilos y su archivo de pruebas.

Toda aplicación en Angular cuenta con un componente principal AppComponent, desde donde arranca la aplicación. Sin embargo, se pueden añadir nuevos componentes.

## 6.1. Creación e importación de componentes.

La forma más sencilla que tenemos de crear un componente es usando la consola de Angular, mediante el siguiente comando:

```html
ng generate component components/navbar
```

En la anterior línea hemos creado un componente llamado navbar dentro del contenedor componets/ para mejorar su organización.

Todo componente cuenta con un selector que nos permitirá utilizarlo dentro de otro componente, por ejemplo, dentro del componente principal. El selector básicamente lo que establece es el nombre de la etiqueta que se deberá usar para importar dicho componente.

Por ejemplo, si accedemos a la clase del componente que hemos creado podremos observar que dentro del decorador @component existe una propiedad llamada selector. Esta es la propiedad que define el nombre de la etiqueta.

```tsx
import { Component } from '@angular/core';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
}
```

Para poder usar este componente en nuestro proyecto primeramente, será necesario añadirlo a la propiedad `imports`  de la clase AppComponent y posteriormente lo importaremos dentro del documento HTML empleando el nombre de su etiqueta.

```tsx
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
```

```html
app-navbar></app-navbar>
```

### EJERCICIO 2. Creación componentes app.

El objetivo del presente ejercicio es comenzar a crear los diferentes componentes que formarán parte del proyecto que vamos a ir desarrollando durante los siguientes ejercicios y que nos servirá para poner en práctica todos los contenidos que vamos adquiriendo.

Concretamente, el objetivo es desarrollar una aplicación web que nos permita gestionar tareas. Para ello, vamos a crear la siguiente estructura de componentes:

`src/app/componentes/` → carpeta que contendrá todos los componentes creados.

- `navbar/` → componente que contendrá la barra de navegación de nuestra aplicación.

- `footer/` → componente que contendrá el footer de nuestra aplicación.

- `auth/` → carpeta que contendrá los componentes de autenticación y registro.

  - `sigin/` → componente de registro.

  - `login/` → componente para iniciar sesión.

- `task/` → carpeta que contendrá los componentes relacionados con la gestión de tareas.

  - `tasklist/` → componente que mostrará todas las tareas

  - `taskform/`→ componente para crear o editar una tarea.

  - `taskresume/` → componente que mostrará de manera resumida una tarea.

Modifica las plantillas de los componentes `navbar` y `footer` para añadir un menú y un pie de página de bootstrap, e importa dichos componentes en el componente principal `app-component.`

# 7. Sintaxis de la plantilla.

En angular una plantilla es un fragmento de HTML. Sin embargo, dentro de esta se puede usar una sintaxis especial que permitirá añadirle un comportamiento dinámico a nuestra plantilla. Para emplear esta sintaxis especial se usará el carácter `@` .

Dado el contenido del controlador:

```tsx
  edad = 40;
  articulos = [{
    codigo: 1,
    descripcion: 'naranjas',
    precio: 540
  },{
    codigo: 2,
    descripcion: 'manzanas',
    precio: 900
  },{
    codigo: 3,
    descripcion: 'peras',
    precio: 490
  }];
  
   generarNumero() {
    return Math.floor(Math.random() * 3) + 1;
  }
```

- `@if` → nos permitirá controlar si se añadirán bloques de código HTML según si se cumple o no una determinada condición:

```html
@if (edad>=18) {
  <p>Es mayor de edad.</p>
} @else {
  <p>Es menor de edad.</p>
}
```

- `@for` → nos permitirá generar muchos elementos HTML a partir del recorrido de un conjunto de elementos:

```html
  @for(articulo of articulos; track articulo.codigo) {
    <tr>
      <td>{{articulo.codigo}}</td>
      <td>{{articulo.descripcion}}</td>
      <td>{{articulo.precio}}</td>
    </tr>
    }
```

- `@switch/@case/@default` → nos permitirá mostrar una estructura de código u otra según la expresión evaluada, así como mostrar una estructura por defecto en el supuesto que no se cumpla ninguna condición. A continuación se muestra un ejemplo de cómo se evalúa la ejecución de una función que genera números aleatorios entre 1 y 3:

```html
  @switch (numeroAletorio()) {
    @case (1) {
      <p>Uno</p>
    }
    @case (2) {
      <p>Dos</p>
    }
    @case (3) {
      <p>Tres</p>
    }
  }
```

# 8. Directivas.

Las directivas son instrucciones que le indican al framework cómo renderizar los diferentes elementos. Esto permitirá modificar la estructura del DOM: aplicar estilos, añadir comportamientos, realizar operaciones condicionales, etc.

Las directivas se dividen en tres categorías:

- Directivas Estructurales.
- Directivas de Atributo.
- Directivas Personalizadas.

Para poder emplear las directivas es necesario importar el módulo `CommonModule` en la clase del componente.

## 8.1. Directivas estructurales:

Son aquellas que cambian la estructura del DOM, es decir, añaden o eliminan elementos según una condición o una lógica determinada. Estas directivas se identifican por el prefijo `*` que indica que Angular debe manejar el DOM de forma especial.

Ejemplos de directivas estructurales:

- *ngIf: renderiza un elemento del DOM si se cumple una determinada expresión booleana.

```html
<p *ngIf="esMayorEdad">La persona es mayor de Edad</p>
```

- `*ngFor:` renderiza un conjunto de elementos de forma repetida en función de una colección de objetos.

```html
<li *ngFor="let item of items">{{ item }}</li>
```

- **`*ngSwitch`, `*ngSwitchCase`, y `*ngSwitchDefault`**: Permiten una lógica de control similar a `switch`, donde se evalúa una expresión y se muestra un bloque específico.

```html
<div [ngSwitch]="valor">
<p *ngSwitchCase="opcion1">Caso 1</p>
<p *ngSwitchCase="opcion2">Caso 2</p>
<p *ngSwitchDefault>Caso predeterminado</p>
</div>
```

## 8.2. Directivas de atributo.

Son aquellas que modifican la apariencia o el comportamiento de un elemento en el DOM. A diferencia de las directivas estructurales no cambian la estructura del DOM.

Ejemplos de directivas de atributo:

- **`ngClass`**: Añade o elimina clases CSS en un elemento de acuerdo con una expresión.

```html
<p [ngClass]="{'activo': esActivo, 'inactivo': !esActivo}">Texto con clases dinámicas.</p>
```

- **`ngStyle`**: Cambia estilos en línea de un elemento basados en una expresión.

```html
<p [ngStyle]="{'color': colorTexto}">Texto con estilo dinámico.</p>
```

- **`[hidden]`**: Muestra u oculta un elemento (es similar a `*ngIf`, pero mantiene el elemento en el DOM).

```html
<p [hidden]="ocultar">Este texto puede ocultarse.</p>
```

## 8.3. Directivas personalizadas.

Angular permite definir directivas personalizadas. Esto es útil para cuando se quiere implementar un comportamiento que será reutilizado en muchos componentes de nuestro proyecto.

A continuación se muestra cómo implementar una directiva que resaltará el texto de un elemento al hacer mouse hover y volverá a su estado normal con el mouse out.

1. Creamos la directiva usando AngularCLI

```powershell
ng generate directive directives/resaltar
```

1. Implementamos la funcionalidad de la clase que contiene la lógica de la directiva:

```tsx
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltar]',
  standalone: true
})
export class ResaltarDirective {
  constructor(private ele: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.color ='blue';
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.ele.nativeElement.style.color ='red';
  }
}
```

1. Importamos la directiva en el componente:

```powershell
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ResaltarDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
```

## Ejercicio 3: Funcionalidad componente TaskList.

El objetivo del presente ejercicio consiste en implementar la funcionalidad básica del componente tasklist, cuyo propósito es mostrar una tabla con las diferentes tareas que existen creadas en el sistema.

Para poder trabajar con las tareas, lo primero que es necesario realizar es modelar un objeto `Task`que lo represente. Para ello, crea un archivo llamado `task.model.ts` en el directorio `src/app/models`dónde se implemente una clase llamada `Task` que contenga las siguientes propiedades:

- `id`
- `nombre`
- `descripción`
- `prioridad` que puede ser, Baja, Media, Alta
- `estado`que puede ser: Completada, En progreso y Pendiente.
- `fecha de creación`
- `fecha de expiración`
- `isDelete`

Inicializa, empleando el método `ngOnInit`, un listado de tareas tomando como referencia el objeto anteriormente definido.

Modifica el código HTML del componente `TaskList` y añade una tabla de bootstrap dónde se deberá mostrar las siguientes propiedades de cada tarea: nombre, descripción, prioridad, estado, fecha de expiración, acciones.

**La tabla deberá cumplir los siguientes requisitos funcionales:**

- Se deberá mostrar una fila con la información anteriormente mencionada de cada una de las tareas que han sido creadas en el controlador.
- La celda que muestra la **prioridad** de cada una de las tareas deberá tener un fondo, aplicando para ello una clase concreta, según su valor:
    - Si la prioridad es Baja → class=”table-success”
    - Si la prioridad es Media → class=”table-warning”
    - Si la prioridad es Alta → class=”table-danger”
- La celda que muestra el **estado** de cada una de las tareas deberá tener un fondo, aplicando para ello una clase concreta, según su valor:
    - Si el estado es Completada→ class=”table-success”
    - Si el estado es En progreso→ class=”table-warning”
    - Si el estado es Pendiente→ class=”table-danger”
- Añade en las siguientes columnas los iconos para poder cambiar el estado y prioridad de las tareas:
    - **Columna prioridad:**
        - bi bi-arrow-up-circle-fill → solo se mostrará si la prioridad de una tarea es “Baja” o “Media” y la tarea no ha sido completada.
        - bi bi-arrow-down-circle-fill → solo se mostrará si el estado de una tarea es “Alta” o “Media” y la tarea no ha sido completada.
    - **Columna estado:**
        - bi bi-play-fill → solo se mostrará si el estado de la tarea es “Pendiente”
        - bi bi-check-lg → solo se mostrará si el estado de la tarea es “En proceso”
        - bi bi-arrow-return-right → solo se mostrará si el estado de la tarea es “Completada”
- En la columna **Acciones** se deberá mostrar los siguientes iconos:
    - bi bi-pencil-square
    - bi bi-trash

A continuación se muestra un ejemplo del resultado final de la tabla mostrada por el componente:

![TaskList Component](https://raw.githubusercontent.com/josearodriguezdaw/angular-tutorial/refs/heads/main/readme-images/tasklist-component.png)

**Ampliación**: si visualizamos nuestra aplicación en un dispositivo móvil podemos observar cómo la tabla que hemos implementado en nuestra aplicación no se adapta adecuadamente al tamaño de la pantalla. Busca en la documentación oficial de Bootstrap, algún otro componente que te permita mostrar el listado de tareas de manera responsivo. Piensa cómo lo mostrarías en una aplicación Android.

# 9. Event Binding.

Angular permite enlazar eventos del DOM a métodos o funciones del componentes. Para enlazar eventos se usa la sintaxis `(evento)=”accion()”` en la etiqueta del elemento en cuestión al que queremos enlazar dicho evento.

- evento → es el tipo de evento que será capturado. Algunos de los posibles eventos son:
    - `click`: Se dispara cuando se hace clic en un elemento.
    - `dblclick`: Se dispara cuando se hace doble clic en un elemento.
    - `mouseenter`: Se dispara cuando el cursor del ratón entra en el área de un elemento.
    - `mouseleave`: Se dispara cuando el cursor del ratón sale del área de un elemento.
    - `mousemove`: Se dispara cuando el cursor del ratón se mueve sobre un elemento.
    - `mousedown`: Se dispara cuando se presiona un botón del ratón sobre un elemento.
    - `mouseup`: Se dispara cuando se suelta un botón del ratón sobre un elemento.
    - `keydown`: Se dispara cuando se presiona una tecla.
    - `keyup`: Se dispara cuando se suelta una tecla.
    - `keypress`: Se dispara cuando se presiona una tecla que genera un carácter (menos común en versiones recientes).
    - `change`: Se dispara cuando el valor de un elemento de formulario cambia.
    - `input`: Se dispara cuando el valor de un elemento de entrada se modifica (incluye el evento `keyup`).
- accion() → método del controlador que se ejecutará cuando se capture el evento.

## 9.1. Ejemplo de cómo capturar un evento click:

```tsx
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje: string = '';

  mostrarMensaje() {
    this.mensaje = '¡Botón clicado!';
  }
}
```

```html
<!-- app.component.html -->
<button (click)="mostrarMensaje()">Haz clic aquí</button>
<p>{{ mensaje }}</p>
```

Cuando el usuario hace clic en el botón, el método mostrarMensaje() se ejecuta y cambia el valor de mensaje, que luego se muestra en la vista.

## 9.2. Ejemplo de cómo capturar un evento de teclado keyup:

```tsx
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje: string = '';

  mostrarMensaje() {
    this.mensaje = '¡Botón clicado!';
  }
}

```

```html
<!-- app.component.html -->
<button (click)="mostrarMensaje()">Haz clic aquí</button>
<p>{{ mensaje }}</p>
```

## 9.3. Obtener el elemento que ha desencadenado el evento.

En Angular, puedes capturar el elemento que ha desencadenado un evento pasándole el objeto $event al método del componente. Este objeto $event contiene información detallada sobre el evento, incluido el elemento DOM que fue clicado.

```html
<button (click)="capturarElemento($event)">Haz clic aquí</button>
```

```tsx
capturarElemento(event: Event) {
	const elementoClicado = event.target as HTMLElement;  // Convertir el target a un elemento HTML

	console.log('Elemento clicado:', elementoClicado);
	console.log('Texto del elemento:', elementoClicado.innerText);  // Ejemplo: texto del elemento
	console.log('ID del elemento:', [elementoClicado.id](http://elementoclicado.id/));  // Ejemplo: ID del elemento
}
```

### Ejercicio contador:

Tu objetivo es desarrollar un componente en Angular que funcione como un contador. Este componente debe hacer lo siguiente:

1. **Mostrar un Texto**: Debe mostrar un número en la pantalla, que inicialmente será 0.
2. **Incluir Dos Botones**:
    - Un botón que incremente el número en 1 cada vez que se haga clic en él.
    - Un botón que decrete el número en 1 cada vez que se haga clic en él.
3. **Comportamiento Esperado**:
    - Cuando el usuario haga clic en el botón de "Incrementar", el número mostrado debe aumentar en 1.
    - Cuando el usuario haga clic en el botón de "Decrementar", el número mostrado debe disminuir en 1.

### Ejercicio:

Tu objetivo es desarrollar un componente en Angular que funcione como un contador. Este componente debe hacer lo siguiente:

1. **Mostrar un Texto**: Debe mostrar un número en la pantalla, que inicialmente será 0.
2. **Incluir Dos Botones**:
    - Un botón que incremente el número en 1 cada vez que se haga clic en él.
    - Un botón que decrete el número en 1 cada vez que se haga clic en él.
3. **Comportamiento Esperado**:
    - Cuando el usuario haga clic en el botón de "Incrementar", el número mostrado debe aumentar en 1.
    - Cuando el usuario haga clic en el botón de "Decrementar", el número mostrado debe disminuir en 1.

## Ejercicio 4. Funcionalidad iconos tasklist.

Implementa las siguientes funcionalidad a los iconos añadidos en la tabla del componente `tasklist` :

- **Columna prioridad:**
    - bi bi-arrow-up-circle-fill → subirá la prioridad de la tarea seleccionada. Si la tarea tiene una prioridad baja pasará a ser media y si es media pasará a ser alta.
    - bi bi-arrow-down-circle-fill → bajará la prioridad de la tarea seleccionada. Si la tarea tiene una prioridad alta pasará a ser media y si es media pasará a ser baja.
- **Columna estado:**
    - bi bi-play-fill → cambiará el estado de la tarea seleccionada a “En Progreso”.
    - bi bi-check-lg → solo se mostrará si el estado de la tarea es “En proceso”
    - bi bi-arrow-return-right → solo se mostrará si el estado de la tarea es “Completada”
- En la columna **Acciones** se deberá mostrar los siguientes iconos:
    - bi bi-pencil-square → implementa un método que muestre por consola “Editando Tarea”. Esta funcionalidad será implementada más adelante.
    - bi bi-trash → borra la tarea seleccionada.


# 10. Property Binding.

El property binding o enlace de propiedades es una técnica que nos permitirá enlazar las propiedades del controlador con las propiedades del DOM. Esto significa que podremos vinucar datos del controlador a las propiedades de un elemento HTML, lo que permite que el DOM se actualice cuando se actualice automáticamente los datos del controlador.

El property binding se utiliza en la plantilla HTML empleando la sintaxis de corchetes `[]` . La expresión dentro del corchete se evalúa y el valor resultante se asigna a la propiedad del elemento del DOM correspondiente.

A continuación se muestra un ejemplo de cómo usar property binding en Angular.

```tsx
// archivo: app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propiedad del componente
  titulo: string = 'Hola, mundo!';
  imagenUrl: string = 'https://example.com/imagen.jpg';
  habilitarBoton: boolean = true;
}
```

```html
<!-- archivo: app.component.html -->
<h1 [textContent]="titulo"></h1> <!-- Binding a la propiedad textContent -->
<img [src]="imagenUrl" alt="Descripción de la imagen"> <!-- Binding a la propiedad src -->
<button [disabled]="!habilitarBoton">Enviar</button> <!-- Binding a la propiedad disabled -->
```

- **`[textContent]="titulo"`**: Vincula la propiedad `textContent` del elemento `<h1>` al valor de la propiedad `titulo` del componente. Cada vez que `titulo` cambia, el contenido del `<h1>` se actualiza automáticamente.
- **`[src]="imagenUrl"`**: Vincula la propiedad `src` de la etiqueta `<img>` a `imagenUrl`. Esto permite que la imagen mostrada cambie según el valor de `imagenUrl`.
- **`[disabled]="!habilitarBoton"`**: Vincula la propiedad `disabled` del botón al valor booleano de `habilitarBoton`. Si `habilitarBoton` es `false`, el botón estará deshabilitado.

A continuación se muestra algunas de las propiedades que se pueden usar:

- **`textContent`**: Establece el contenido de texto de un elemento.
- **`innerHTML`**: Establece el contenido HTML de un elemento.
- **`value`**: Utilizado con elementos de formulario como `<input>` o `<textarea>`, establece el valor del campo.
- **`src`**: Establece la fuente de una imagen (`<img>`).
- **`href`**: Establece el destino de un enlace (`<a>`).
- **`disabled`**: Habilita o deshabilita un elemento, como un botón o un campo de entrada.
- **`checked`**: Establece si un checkbox o un radio button está seleccionado.
- **`selected`**: Establece si una opción en un `<select>` está seleccionada.
- **`placeholder`**: Establece un texto de marcador de posición en campos de entrada.

También existen propiedades de estilo:

- `style.color`
- `style.backgroundColor`
- `style.fontSize`
- `style.border`

Otro de los aspectos interesantes es que se puede agregar o quitar clases CSS de un elemento usando la sintaxis de enlace de clases:

```html
<div [class.active]="isActive"></div>
```

`isActive` hace referencia a una propiedad del controlador, si este es `true` se añadirá la clase active quedando de esta forma:

```html
<div class="active">
```

### 10.1. Beneficios del Property Binding

- **Actualización Automática**: Cualquier cambio en la propiedad del componente se refleja automáticamente en la vista, lo que simplifica la gestión del estado.
- **Interactividad**: Permite crear interfaces de usuario interactivas que responden a los cambios en los datos.
- **Claridad**: Hace que el código sea más legible y mantenible al separar la lógica del componente de la presentación.

### Ejercicio imagen aleatoria:

Tu objetivo es desarrollar un componente en Angular que muestre una imagen aleatoria cada vez que se presione un botón. Sigue estos pasos:

1. **Crear un Botón**:
    - Debe haber un botón en la interfaz que tenga el texto "Imagen Aleatoria".
2. **Mostrar una Imagen**:
    - Debe haber un elemento HTML `<img>` en el componente que inicialmente no tendrá una URL establecida (puede estar vacío o mostrar un marcador de posición).
3. **Cambiar la Imagen al Hacer Clic**:
    - Cada vez que el usuario haga clic en el botón "Imagen Aleatoria", el componente debe generar un número aleatorio entre 1 y 10,000.
    - Usa este número aleatorio para construir una URL de imagen. La URL debe tener el siguiente formato:
        
        ```html
        https://picsum.photos/200/300?random=numero_aleatorio
        ```
        
    - Cambia la propiedad `src` del elemento `<img>` con la nueva URL para mostrar la imagen.
4. **Objetivo Final**:
    - Al hacer clic en el botón, la imagen mostrada debe cambiar a una nueva imagen aleatoria.

# 11. Comunicación entre componentes.

## 11.1. Comunicación entre componentes: padre a hijo.

Para pasar datos de un componente padre a un componente hijo se usa el decorador `@Input()` dentro de la clase hijo, concretamente, en una de sus propiedades. Por ejemplo, supongamos que tenemos un componentes NavBar que recibe como dato de entrada un listado de los diferentes elementos que tendrá.

En el componente hijo NavBar tendremos la siguiente propiedad:

```tsx
//navbar.component.ts
 @Input()
  listaOpciones:string[]=[];
```

Para poder pasarle desde el componente padre el listado de opciones tendremos que añadir a la etiqueta del componente hijo lo siguiente:

```html
<!--app.component.html-->
<app-navbar [listaOpciones]="opciones"></app-navbar>
```

Mediante property binding estamos mapeando la propiedad listaOpciones del hijo con la propiedad opciones del padre. Si nos fijamos en la clase padre, esta deberá contar con una propiedad llamada opciones.

```tsx
//app.component.ts
export class AppComponent {
  opciones=["Inicio","Perfil","Acerca de"]
}
```

Si en el template del componente hijo usamos @for para mostrar todos los elementos recibidos del padre de la siguiente forma:

```html
   <!--navbar.component.html-->
    @for (opcion of listaOpciones; track opcion){
        <p>{{opcion}}</p>
    }
```

## 11.2. Comunicación entre componentes: hijo a padre.

Para enviar datos desde un componente hijo a su padre usaremos el decorador `@Output()` junto con `EventEmiiter`.

Siguiendo con el ejemplo anterior, supongamos que queremos enviarle al componente padre la opción del menú en la que hacen clic nuestros usuarios. Para ello, primeramente capturaremos dicho click en las opciones añadiendo la captura del evento en el HTML.

```html
<!--navbar.component.html-->
    @for (opcion of listaOpciones; track opcion){
        <p (click)="opcionClick($event)">{{opcion}}</p>
    }
```

En la clase del componente hijo tendremos lo siguiente:

```tsx
//navbar.component.ts
export class NavbarComponent {

  @Input() listaOpciones:string[]=[];
  
  // Inicializamos el evento que le enviaremos al componente padre.
  @Output() opcionSeleccionada = new EventEmitter<string>();  // Evento de salida

	// Implementamos el método que se lanzará cuando se capture el clic en algunas de las opciones
  opcionClick(event:Event): void {
  
    //Obtenemos el elemento sobre el que se ha hecho clic.
    let elemento = event.target as HTMLElement;
    
    // Le enviamos un evento al padre con el texto del menú sobre el que se ha hecho click.
    this.opcionSeleccionada.emit(elemento.innerText);
  }
}
```

Una vez que se ha emitido el evento al componente padre es necesario capturarlo y definir qué función se ejecutará. Para capturar dicho evento usaremos lo visto en el apartado Event Binding. Concretamente, añadiremos lo siguiente en el template del componente padre:

```html
<!--app.component.html-->
<app-navbar [listaOpciones]="opciones" (opcionSeleccionada)="muestraOpcionSeleccionada($event)"></app-navbar>

```

- `(opcionSeleccionada)="muestraOpcionSeleccionada($event)"` → En este fragmento de código se captura el evento del hijo y se llama al método `muestraOpcionSeleccionada` que está definido en la clase padre, pasándole el mensaje del evento que ha ocurrido, que en este caso es un string.

En la clase padre se ha implementado la lógica del método anterior:

```tsx
// app.component.ts
export class AppComponent {
  opciones=["Inicio","Perfil","Acerca de"];
  opcionSeleccionada="";
  
  muestraOpcionSeleccionada(opcion:string):void{
    this.opcionSeleccionada=opcion;
  }
}
```

Por último, para poder visualizar la opción seleccionada, se ha modificado la plantilla del componente padre y se ha añadido la siguiente línea:

```html
<!--app.component.html-->
<p>{{opcionSeleccionada}}</p>
```


### EJERCICIO 5: Comunicación entre componentes.

El objetivo de esta tarea consiste en extraer del componente TaskListComponente toda la funcionalidad relacionada con mostrar información de una tarea en concreto, así como las acciones que se pueden realizar sobre dicha tarea. El objetivo de extraer al componente TaskResume esta funcionalidad es poder reutilizarla en la pestaña de Inicio. 

A continuación se muestra cómo se deberán organizar los diferentes componentes:

![Task List Structure](https://raw.githubusercontent.com/josearodriguezdaw/angular-tutorial/refs/heads/main/readme-images/tasklist-structure.png)

**Requisitos funcionales:**

- Componente TaskListComponente:
    - Debe tener un listado de tareas en en controlador.
    - Debe mostrar en la plantilla un componente hijo TaskResume por cada una de las tareas del arreglo.
    - Debe implementar los mecanismos de comunicación necesarios para actualizar la lista de Tareas cuando se realice alguna acción en el componente hijo TaskResume.
- Componente TaskResume:
    - Debe implementar los mecanismos de comunicación necesarios para que reciba un objeto tarea del componente padre y muestre la información de dicho objeto en la plantilla.
    - Debe implementar los mecanismos de comunicación

# 12. Formularios basados en plantillas.

Los formularios basados en plantillas o Template-driven Forms son una manera declarativa de crear formularios HTML vinculados a los datos (data binding). Son declarativos porque la mayoría de la lógica del formulario se configura directamente en la plantilla HTML.

Este enfoque se suele emplear en formularios sencillos donde no es necesario implementar mucha lógica en el controlador.

Para poder hacer uso de este tipo de formularios es necesario importar el módulo `FormsModule` en el controlador del componente donde será implementado.

```tsx
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
```

El objetivo de este tipo de formularios es crear un enlace bidireccional entre las propiedades del controlador y los campos del formulario, de tal forma que cuando se modifique un dato en el formulario se actualice el valor en el controlador y viceversa. Para pode realizar dicho enlace se usará la directiva `[(ngModel)]` . Un ejemplo básico sería el siguiente:

Vamos a crear en el controlador un objeto usuario con tres propiedades:

```tsx
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  usuario = {
    nombre : '',
    apellidos: '',
    edad: ''
  }
}
```

En la plantilla vamos un formulario con tres campos, dos de texto y uno numérico y los vamos a enlazar de manera bidireccional con las propiedades del controlador usando la directiva `[(ngModel)]` . Además, añadiremos la interpolación de las propiedades del controlador para ver cómo cambian.

```html
<form>
    <input type="text" [(ngModel)]="usuario.nombre" name="nombre" placeholder="Indique el nombre del usuario"/>
    <input type="text" [(ngModel)]="usuario.apellidos" name="apellidos" placeholder="Indique los apellidos del usuario"/>
    <input type="number" [(ngModel)]="usuario.edad" name="edad" placeholder="Indique la edad del usuario"/>
    <input type="submit" >
</form>

<p>{{usuario.nombre}}</p>
<p>{{usuario.apellidos}}</p>
<p>{{usuario.edad}}</p>
```

Si implementamos dicho código podemos observar cómo cuando cambiamos el valor de los inputs se actualiza el valor del controlador y se muestra por pantalla el valor actualizado.
