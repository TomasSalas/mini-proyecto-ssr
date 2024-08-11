Hola , me presento soy Tomás Salas , a continuación dare una explicación mas o menos básica del proyecto en general.

En primera instancia la petición era hacer un mini proyecto que hicera SSR y CSR,
como explicación general no domino mucho lo que tiene que ver con SSR, mejor dicho
llevarlo a la práctica nunca lo había echo, por ende investigue y llegue a esta 
solución.

Utilice Vite SSR-REACT con el pude hacer SSR pero no si al 100% y que la teoria
dice que el SSR es que el backend o servidor me entregue el HTML para poder mostrar en el front
es decir que el servidor genera el html antes de enviarlo al cliente.

El proyecto esta dividio en 3 paginas o componetes Rut , Password , Index

Rut: Componente donde se pide el rut del paciente en donde se valida el Run del paciente 
en mi caso utilice una función que utilizo en mi actual trabajo para validar que no ingresen otras letras que no sean K
y numeros de 0-9 y todo en mayuscula.

Password: Este componente recibe una password o contraseña la cual en conjunto al Run obtenido en la pagina
anterior se utilizan para hacer el login como tal en al API seleccionada.
La funcion esta aparte del compoente para mantener un orden, utilizando fetch nativo de JS.

Index: luego que el login fue exito en un localStorage almaceno el token pata poder hacer la siguiente solicitud 
que es traer las recetas con el token y poder mostrar y listar la info con las informacion de la API en su meta 
que trae información para poder hacer el fech por pagina y luego el maximo de paginas.

Luego tenemos un Test que es en index, el cual es muy vacio que muestra en que los textos del componente se rendericen de manera correcta y ademas este el boton ver que no tiene ninguna función.

Tal como se solicito utilice Tailwind para los estilos y nada de css solamente el archivo CSS contiene las configuraciónes para que funcione Tailwind.

COMANDOS PARA INICIAR EL PROYECTO 

1.- Clonar el repositorio 
2.- Instalar dependencias
3.- Para ejecutar la app npm run dev
4.- Para ejecutar el test npm run test o npm test
