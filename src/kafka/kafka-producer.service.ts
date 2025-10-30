import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { Kafka, Producer } from 'kafkajs';

@Injectable()
export class KafkaProducerService implements OnModuleInit, OnModuleDestroy {
  private kafka = new Kafka({
    brokers: [process.env.KAFKA_BROKER || 'kafka:9092'],
  });
  private producer: Producer = this.kafka.producer();

  async onModuleInit() {
    await this.producer.connect();
    console.log('Kafka Producer conected');
  }

  async onModuleDestroy() {
    await this.producer.disconnect();
  }

  async sendMessage(topic: string, message: any) {
    await this.producer.send({
      topic,
      messages: [{ value: JSON.stringify(message) }],
    });
  }
}
