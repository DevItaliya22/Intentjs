import { Controller, Get, Log, Put, Req, Request, Res, Response, Transformable } from '@intentjs/core';
import { S3Service } from 'app/services/s3';

@Controller("/upload")
export class S3Controller extends Transformable {

    constructor(private s3: S3Service) {
        super();
    }
    @Put("/profile")
    async profileUpload(@Req() req: Request, @Res() res: Response) {
        // WIP 
        return res.json({ message: 'Server is up and running' });
    }
}