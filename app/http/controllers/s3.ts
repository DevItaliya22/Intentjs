import { Body, Controller, Put, Req, Res, Request, Response, Storage, Param } from "@intentjs/core";
import { S3Service } from "app/services/s3";

@Controller("/upload")
export class S3Controller {
  constructor(private s3: S3Service) {}

  // this returns signed url for uploading profile image to s3
  // and from frntend we can use this url to upload image
  @Put("/profile")
  async profileUpload(@Body() body: Buffer, @Req() req: Request, @Res() res: Response) {
    const userEmail = (req as any).user.email;
    const upload = await this.s3.uploadProfile(body,userEmail);
    return res.json({ message: "Profile uploaded" });
  }
  @Put("/post/:id")
  async postUpload(@Body() body: Buffer, @Req() req: Request, @Res() res: Response,@Param("id") id:string) {
    const userEmail = (req as any).user.email;
    const upload = await this.s3.uploadPost(body,userEmail,id);
    return res.json({ message: "Post uploaded" });
  }
  @Put("/banner-image")
  async bannerImageUpload(@Body() body: Buffer, @Req() req: Request, @Res() res: Response) {
    const userEmail = (req as any).user.email;
    const upload = await this.s3.uploadBannerImage(body,userEmail);
    return res.json({ message: "Banner Image uploaded" });
  }
}
