import { Injectable, ListensTo } from '@intentjs/core';

@Injectable()
export class NotificationListener {
  @ListensTo('notification_placed')
  async handle(data: Record<string, any>): Promise<void> {
    console.log('Notification placed:', data);
  }
}