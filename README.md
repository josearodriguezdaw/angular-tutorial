# Angular

# 1. Introducción a Angular:

Angular es un framework que permite desarrollar aplicaciones web donde el cliente asuma la mayor parte de la lógica y descargue al servidor, con la finalidad de que las aplicaciones ejecutadas a través de Internet sean más rápidas.

Está mantenido por Google lo que favorece su desarrollo, mantenimiento y tiene una fuerte comunicada.

Angular permite crear aplicaciones web de una sola página (**SPA, Single Page Application**), realizando la carga de datos de forma asíncrona.

Las aplicaciones en Angular se encuentran modularizadas en **Componentes** con el objetivo de independizar las diferentes funcionalidades de la aplicación. Cada uno de los **Componentes** se encuentran conformados por una **Plantilla**, una hoja de estilos y un **Controlador** que representa a dicho componentes y desde dónde se manejará su comportamiento.

Tomando como ejemplo una app tipo to-do list: La carcasa que engloba toda la app, la barra de navegación, un listado de tareas, cada una de las tareas, o un editor de tareas… son todo vistas controladas por componentes.

![image.png](de43033b-4997-44fc-94d9-cd32a2cf2246.png)

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

![image.png](image.png)

# 4. Instalación de Bootstrap en Angular

Bootstrap es un popular **framework de CSS** que facilita el desarrollo de aplicacionesw web con diseños modernos, adaptativos y consistentes. Proporciona una serie de **estilos predefinidos**, **componentes** y **utilidades CSS** para la creación rápida de interfaces atractivas y responsive, es decir, que se adaptan automáticamente a diferentes tamaños de pantalla (escritorios, tablets, móviles, etc.).

## 4.1. ¿Cómo funciona Bootstrap?

Boostrap se basa en un sistema de rejilla o grid. El sistema de **rejilla** (grid) de Bootstrap permite organizar y alinear contenido en una página dividiéndola en hasta **12 columnas** por fila. Este sistema es adaptable y responsive, lo que significa que las columnas se ajustan automáticamente según el tamaño de la pantalla del dispositivo.

La configuración de cada una de las filas y las columnas de la aplicación la realizaremos estableciendo clases a cada uno de los componentes. 

## 4.2. Principios de Bootstrap.

1. Contenedores: 
    - Los contenedores .container o .container-fluid es el elemento principal dónde vamos a introducir las filas y las columnas.
    - `.container` tiene un ancho fijo que se adapta a diferentes tamaños de pantalla, mientras que `.container-fluid` se extiende a todo el ancho de la pantalla.
2. Filas:
    - Dentro de un contenedor, se usa la clase `.row` para crear una fila. Las filas dividen el contenido horizontalmente y organizan las columnas dentro de ellas.
3. Columnas
    - Dentro de cada fila, se agregan columnas usando clases como `.col`, `.col-md-6`, `.col-lg-4`, etc.
    - La rejilla de Bootstrap se basa en un sistema de 12 columnas, así que se pueden combinar diferentes tamaños para lograr distribuciones variadas (por ejemplo, `.col-6` ocupa 6 de las 12 columnas, es decir, la mitad del ancho).
    - Bootstrap incluye clases específicas para diferentes tamaños de pantalla: `.col-sm-` para móviles, `.col-md-` para tabletas, `.col-lg-` para pantallas grandes y `.col-xl-` para pantallas extra grandes.
    - Estas clases permiten que las columnas cambien de tamaño o se reorganicen según el dispositivo, haciendo que el diseño sea responsive.

## 4.3. Instalación de Bootstrap en un proyecto Angular:

Existen varias formas de instalar Bootstrap en un proyecto Angular. La forma en la que nosotros lo realizaremos será instalando la dependencia de node en nuestro proyecto e importando los archivos de Boostrap en el archivo de configuración de `angular.json`.

Para instalar el módulo de Boostrap desde node tenemos que lanzar el siguiente comando desde la terminal de nuestro proyecto:

```tsx
npm install bootstrap@5.3.3
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
  **"node_modules/bootstrap/dist/css/bootstrap.min.css"**
],
"scripts": [
  **"node_modules/bootstrap/dist/css/bootstrap.min.js"**
]
```

Ya tendríamos Boostrap listo para ser usado en nuestro proyecto Angular.

## 4.4. Ejemplo básico:

```tsx
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
