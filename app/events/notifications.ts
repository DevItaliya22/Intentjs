import { EmitsEvent, Event } from '@intentjs/core';

@Event('notification_placed')
export class NotificationEvent extends EmitsEvent {
  constructor(data: Record<string, any>) {
    super();
  }
}