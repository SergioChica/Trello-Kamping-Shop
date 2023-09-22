# HTML - Estructura del codigo

1. Tabla numero 1, es la tabla que se encargada de crear y almacenar las tarjetas donde cada tarjeta tendra un boton que definira el estado en el que se encuentra, cada tarjeta tendran un mini menu hamburguesa donde tendra dos botones los cuales se definen:
- Haciendo: se encarga de enviar las tarjetas hacia la tabla "haciendo".
- Editar: se encarga de editar los textos de las tarjetas.
- Eliminar: se encarga de ocultar las tarjetas.

2. Tabla numero 2, es la tabla encargada de almacenar las tarjetas que se hayan redireccionado a esta misma tabla donde cada tarjeta tendra un boton que definira el estado en el que se encuentran, cada tarjeta tendran un mini menu hamburguesa donde tendra dos botones los cuales definen:
- Finalizadas: se encarga de enviar las tarjetas hacia la tabla "Finalizadas".
- Editar: se encarga de editar los textos de las tarjetas.
- Eliminar: se encarga de ocultar las tarjetas.

3. Tabla numero 3, es la tabla que se encarga de almacenar las tarjetas que se hayn redireccionado a esta misma tabla donde cada tarjeta tendra un boton que definira el estado en el que se encuentran, cada tarjeta tendra un mini menu hamburguesa donde tendra un boton el cual se define:
- Eliminar: se encarga de ocultar las tarjetas.

# CSS - Diseño del codigo

El codigo estara diseñado un fondo y con tres tablas del mismo tamaño donde cada una tendra:
- Tarjetas: Cada tarjeta estara diseñada con un mismo tamaño y una caja de texto la cual aborda la mayoria de espacio de la tarjeta tambien tendran un identificador de estados el cual se definira por su color abajo de este estara un menu desplegable donde podran accionar los botones mencionados anteriormente.

# JavaScript - Funcionalidad del codigo

El codigo constara de 3 funciones donde cada una sera la encargada de crear las tarjetas para cada tabla donde tendran un orden que empezara con la primera funcion para la tabla 1 seguida de la segunda para la tabla 2 y finalmente la tercera para la tabla 3.

1. La primera funcion se encargada de verificar si el usuario introdujo texto en el input al igual que verificara la cantidad de tarjetas que se crean teniendo un maximo de 6, con esto pasando a dar las intrucciones para crear las tarjetas con toda su estructura y diseño ademas de añadir las funcionalidades de "Editar" lo que permite editar los textos de las tarjetas, "Eliminar" lo que oculta la tarjeta y "Haciendo" lo que redireccionara la tarjeta a la tabla numero 2.

2. La segunda funcion se encargara de verificar la cantidad de tarjetas que se crean teniendo un maximo de 1, con esto pasando a dar las intrucciones para crear las tarjetas con toda su estructura y diseño ademas de añadir las funcionalidades de "Editar" lo que permite editar los textos de las tarjetas, "Eliminar" lo que oculta las tarjetas y "Finalizadas" lo que redirecciona las tarjetas a la tabla 3.

3. La tercera funcion se encarga de verificar la cantidad de tarjetas que se crean teniendo un maximo de 6, con esto pasando a dar las intrucciones para crear las tarjetas con toda su estructura y diseño ademas de añadir la funcionalidad de "Eliminar" lo que oculta las tarjetas.