# Descripción

Ejemplo de como ejecutar en el front funciones de validacion definidas en el back.

## Backend
Se obtienen las funciones y se mapean a un array de objetos de validacion que tienen name y code y se envia al front.

Por otro lado se tienen los objetos a los cuales se les desea aplicar las validaciones.

Los objetos deben definir un atributo tipo json cuyos keys representa los nombres de las funciones a ejecutar y define los paramtros estaticos y variables a utilizar por la funcion de validacion.

## Frontend

Se obtienen las funciones de validacion y los objetos.

El front define como "helper" una funcion que determina que logica aplicar para obtener el dato del objeto que se desea validar.

Se mapean las funciones y se determina que validacion debe ejecutar cada objeto.

## Consideraciones
