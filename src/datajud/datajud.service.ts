import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class DatajudService {
  constructor() {}

  async getHello(body: any): Promise<string> {
    try {
      const url = process.env.DATAJUD_URL;
      const apiKey = process.env.DATAJUD_API_KEY;

      if (!url) {
        throw new Error('DATAJUD_URL is not defined in environment variables');
      }

      if (!url) {
        throw new Error(
          'DATAJUD_API_KEY is not defined in environment variables',
        );
      }

      const res = await axios.post(
        url,
        {
          query: {
            match: {
              numeroProcesso: '00105765620225150093',
            },
          },
          size: 10,
        },
        { headers: { Authorization: apiKey } },
      );

      console.log(res.data.hits);

      return 'Hello World!';
    } catch (error) {
      console.error('Error fetching data from Datajud API:', error);
      throw error;
    }
  }
}
