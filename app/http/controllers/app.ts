import { Controller, Get, Log, Req,Storage, Request, Res, Response } from '@intentjs/core';

// 1 all routes checked and working
@Controller()
export class MainController {
  @Get("")
  async getHeatlhCheck(@Req() req: Request, @Res() res: Response) {;
    const s3 =await Storage.disk("s3").get("todos.md");
    console.log(s3)
    return res.json({ message: 'Server is up and running' });
  }
}