
//Reservas: 
db.Reserva.insertMany([
  {_id:1,
  cliente_id:1,
  funcion_id:1,
  asientos_reservados:2,
  fecha_reserva:new Date("2025-09-15"),
  total_pago: 10000},
  {
    _id:2,
  cliente_id:2,
  funcion_id:2,
  asientos_reservados:3,
  fecha_reserva:new Date("2025-09-15"),
  total_pago: 15000
  },
  {
    _id:3,
  cliente_id:3,
  funcion_id:1,
  asientos_reservados:1,
  fecha_reserva:new Date("2025-09-15"),
  total_pago: 5000
  },
  {
    _id:4,
  cliente_id:4,
  funcion_id:5,
  asientos_reservados:2,
  fecha_reserva:new Date("2025-09-16"),
  total_pago: 8000
  },
  {
    _id:5,
  cliente_id:5,
  funcion_id:6,
  asientos_reservados:4,
  fecha_reserva:new Date("2025-09-17"),
  total_pago: 16000
  },
  {
    _id:6,
  cliente_id:1,
  funcion_id:7,
  asientos_reservados:1,
  fecha_reserva:new Date("2025-09-18"),
  total_pago: 4000
  },
  {
    _id:7,
  cliente_id:2,
  funcion_id:8,
  asientos_reservados:3,
  fecha_reserva:new Date("2025-09-19"),
  total_pago: 12000
  }
])
//Clientes: 
db.Clientes.insertMany([
  {
    _id:1,
    nombre:"Rodrigo Torres",
    email:"rodrigo.t@email.com",
    telefono:987654321,
    fecha_nacimiento:new Date("1990-05-15")
  },
  {
    _id:2,
    nombre:"Francisca Herrera",
    email:"fransisca.h@email.com",
    telefono:912345678,
    fecha_nacimiento:new Date("1988-11-20")
  },
  {
    _id:3,
    nombre:"Benjamin Castro",
    email:"benjamin.c@email.com",
    telefono:955554444,
    fecha_nacimiento:new Date("2001-02-28")
  },
  {
    _id:4,
    nombre:"Lucia Mendez",
    email:"lucia.m@email.com",
    telefono:911223344,
    fecha_nacimiento:new Date("1995-07-10")
  },
  {
    _id:5,
    nombre:"Javier Lopez",
    email:"javier.l@email.com",
    telefono:922334455,
    fecha_nacimiento:new Date("1985-03-22")
  },
  {
    _id:6,
    nombre:"Maria Fernanda Ruiz",
    email:"maria.ruiz@email.com",
    telefono:933112233,
    fecha_nacimiento:new Date("1992-08-03")
  },
  {
    _id:7,
    nombre:"Pedro Gonzales",
    email:"pedro.g@email.com",
    telefono:944556677,
    fecha_nacimiento:new Date("1987-12-14")
  },
  {
    _id:8,
    nombre:"Valentina Rojas",
    email:"valentina.r@email.com",
    telefono:955667788,
    fecha_nacimiento:new Date("2000-04-21")
  },
  {
    _id:9,
    nombre:"Santiago Morales",
    email:"santiago.m@email.com",
    telefono:966778899,
    fecha_nacimiento:new Date("1993-06-18")
  },
  {
    _id:10,
    nombre:"Camila Vargas",
    email:"camila.v@email.com",
    telefono:977889900,
    fecha_nacimiento:new Date("1993-06-18")
  }
])
//Funciones:
db.Funciones.insertMany([
  {
    _id:1,
    pelicula_id:1,
    sala_id:1,
    fecha: new Date("2025-09-16"),
    hora_inicio:1900,
    hora_termino:2130
  },
  {
    _id:2,
    pelicula_id:2,
    sala_id:2,
    fecha: new Date("2025-09-16"),
    hora_inicio:200,
    hora_termino:2150
  },
  {
    _id:3,
    pelicula_id:1,
    sala_id:1,
    fecha: new Date("2025-09-17"),
    hora_inicio:2200,
    hora_termino:0030
  },
  {
    _id:4,
    pelicula_id:3,
    sala_id:3,
    fecha: new Date("2025-09-16"),
    hora_inicio:1830,
    hora_termino:2005
  },
  {
    _id:5,
    pelicula_id:5,
    sala_id:4,
    fecha: new Date("2025-09-17"),
    hora_inicio:1700,
    hora_termino:1900
  },
  {
    _id:6,
    pelicula_id:6,
    sala_id:5,
    fecha: new Date("2025-09-18"),
    hora_inicio:2000,
    hora_termino:2150
  },
  {
    _id:7,
    pelicula_id:7,
    sala_id:2,
    fecha: new Date("2025-09-18"),
    hora_inicio:1800,
    hora_termino:1930
  },
  {
    _id:8,
    pelicula_id:8,
    sala_id:3,
    fecha: new Date("2025-09-19"),
    hora_inicio:2100,
    hora_termino:2230
  }
])
//Salas: 
db.Salas.insertMany([
  {
    _id:1,
    numero_sala:1,
    capacidad:150
  },
  {
    _id:2,
    numero_sala:2,
    capacidad:100
  },
  {
    _id:3,
    numero_sala:3,
    capacidad:200
  },
  {
    _id:4,
    numero_sala:4,
    capacidad:120
  },
  {
    _id:5,
    numero_sala:5,
    capacidad:180
  },
  {
    _id:6,
    numero_sala:6,
    capacidad:160
  },
  {
    _id:7,
    numero_sala:7,
    capacidad:140
  },
  {
    _id:8,
    numero_sala:8,
    capacidad:220
  },
  {
    _id:9,
    numero_sala:9,
    capacidad:130
  },
  {
    _id:10,
    numero_sala:10,
    capacidad:170
  }
])
//Peliculas:
db.Peliculas.insertMany([
  {
    _id:1,
    titulo:"El Eterno Despertar",
    genero:"Ciencia Ficcion",
    duracion:150,
    clasificacion:"PG-13",
    director:"Sofia Ramirez"
  },
  {
    _id:2,
    titulo:"Amor en Tiempos de Cumbia",
    genero:"Comedia Romantica",
    duracion:110,
    clasificacion:"G",
    director:"Juan Pablo Miranda"
  },
  {
    _id:3,
    titulo:"El Vuelo del Cóndor",
    genero:"Documental",
    duracion:95,
    clasificacion:"G",
    director:"Antonia Vega"
  },
  {
    _id:4,
    titulo:"Furia en el Puerto",
    genero:"Accion",
    duracion:130,
    clasificacion:"R",
    director:"Ricardo Soto"
  },
  {
    _id:5,
    titulo:"La Sombra del Jaguar",
    genero:"Aventura",
    duracion:120,
    clasificacion:"PG",
    director:"Maria Gonzalez"
  },
  {
    _id:6,
    titulo:"Café y Misterio",
    genero:"Thriller",
    duracion:105,
    clasificacion:"PG-13",
    director:"Luis Fernandez"
  },
  {
    _id:7,
    titulo:"Bajo el Mismo Sol",
    genero:"Drama",
    duracion:115,
    clasificacion:"G",
    director:"Ana Martinez"
  },
  {
    _id:8,
    titulo:"Risas en la Playa",
    genero:"Comedia",
    duracion:98,
    clasificacion:"G",
    director:"Carlos Perez"
  }
])
//Empleados: 
db.Empleados.insertMany([
  {
    _id:1,
    nombre:"Carlos Lopez",
    puesto:"Gerente",
    salario:1200000,
    fecha_contratacion:new Date("2020-01-15")
  },
  {
    _id:2,
    nombre:"Ana Perez",
    puesto:"Cajero",
    salario:500000,
    fecha_contratacion:new Date("2022-06-01")
  },
  {
    _id:3,
    nombre:"Luis Martinez",
    puesto:"Acomodador",
    salario:400000,
    fecha_contratacion:new Date("2023-03-10")
  },
  {
    _id:4,
    nombre:"Sofia Ramirez",
    puesto:"Supervisor",
    salario:800000,
    fecha_contratacion:new Date("2021-09-01")
  },
  {
    _id:5,
    nombre:"Miguel Torres",
    puesto:"Cajero",
    salario:500000,
    fecha_contratacion:new Date("2023-01-10")
  },
  {
    _id:6,
    nombre:"Elena Gomez",
    puesto:"Acomodador",
    salario:400000,
    fecha_contratacion:new Date("2024-05-20")
  },
  {
    _id:7,
    nombre:"Javier Morales",
    puesto:"Gerente",
    salario:1200000,
    fecha_contratacion:new Date("2019-03-15")
  },
  {
    _id:8,
    nombre:"Carla Rojas",
    puesto:"Limpieza",
    salario:350000,
    fecha_contratacion:new Date("2022-11-05")
  }
])