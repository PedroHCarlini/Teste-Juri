// import { Inject, Injectable } from '@nestjs/common';
// import axios from 'axios';
// import type { IDataJudRepository } from '../domain/repositories/dataJud.interface.repository';

// @Injectable()
// export class DatajudUsecase {
//   constructor(
//     @Inject('IDataJudRepository')
//     private readonly dataJudRepository: IDataJudRepository,
//   ) {}

//   async handler(processNumber: number): Promise<string> {
//     try {
//       const processes = await this.dataJudRepository.search({});

//       // if (processes.length > 0) return processes;

//       const url = process.env.DATAJUD_URL;
//       const apiKey = process.env.DATAJUD_API_KEY;

//       if (!url) {
//         throw new Error('DATAJUD_URL is not defined in environment variables');
//       }

//       if (!url) {
//         throw new Error(
//           'DATAJUD_API_KEY is not defined in environment variables',
//         );
//       }

//       const res = await axios.post(
//         url,
//         {
//           query: {
//             match: {
//               numeroProcesso: '00105765620225150093',
//             },
//           },
//           size: 10,
//         },
//         { headers: { Authorization: apiKey } },
//       );

//       console.log(res.data.hits);

//       return 'Hello World!';
//     } catch (error) {
//       console.error('Error fetching data from Datajud API:', error);
//       throw error;
//     }
//   }
// }
