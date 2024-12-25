import { Controller, Get, Req, Res, Response } from "@intentjs/core";
import { NotificationEvent } from "app/events/notifications";

@Controller()
export class MainController {
  @Get("")
  async getHealthCheck(@Req() req: Request, @Res() res: Response) {
    const order = { id: 123, product: "A book" };
    const event = new NotificationEvent(order);
    event.emit();
    return res.json({ message: "Server is up and running" });
  }
}
