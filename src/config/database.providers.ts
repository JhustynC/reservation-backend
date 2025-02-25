// import { DataSource } from 'typeorm';

// export const databaseConfig = [
//   {
//     provide: 'DATA_SOURCE',
//     useFactory: async () => {
//       const dataSource = new DataSource({
//         type: 'postgres',
//         host: 'localhost',
//         port: 5435,
//         username: 'jhustyn',
//         password: '123456',
//         database: 'dev',
//         entities: [__dirname + '/../**/*.entity{.ts,.js}'],
//         synchronize: true,
//       });

//       return dataSource.initialize();
//     },
//   },
// ];

// database.providers.ts
import { Rol } from 'src/entity/rol.entity';
import { User } from 'src/entity/user.entiry';
import { DataSource } from 'typeorm';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5435,
  username: 'jhustyn',
  password: '123456',
  database: 'reservation',
  entities: [User, Rol], // Lista de tus entidades
  synchronize: true, // No usar en producción
});

appDataSource
  .initialize()
  .then(() => {
    console.log('Conexión a la base de datos establecida');
  })
  .catch((error) =>
    console.error('Error al conectar a la base de datos', error),
  );
