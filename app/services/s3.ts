import { PutObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { __, Inject, Injectable, Storage } from '@intentjs/core';
import { UserDbRepository } from 'app/repositories/userDbRepository';

@Injectable()
export class S3Service{
  constructor(
    @Inject('USER_DB_REPO') private users: UserDbRepository,
  ) {}
  async uploadProfile(body:Buffer,userEmail:string): Promise<Record<string, any>> {

    const user = await this.users.getWhere({ email: userEmail });
    const userId = user[0].id;
    const filePath = `profile/${userId}/profile.jpg`;
    const url = await Storage.disk("s3").signedUrl(filePath, 1, 'put');
    console.log(url);
    return {url};
  }
  async uploadPost(body:Buffer,userEmail:string,postId:string): Promise<Record<string, any>> {
    const user = await this.users.getWhere({ email: userEmail });
    const userId = user[0].id;
    const filePath = `post/${userId}/${postId}/post.jpg`;
    const url = await Storage.disk("s3").signedUrl(filePath, 1, 'put');
    console.log(url);
    return {url};
  }
  async uploadBannerImage(body:Buffer,userEmail:string): Promise<Record<string, any>> {
    const user = await this.users.getWhere({ email: userEmail });
    const userId = user[0].id;
    const filePath = `banner/${userId}/banner.jpg`;
    const url = await Storage.disk("s3").signedUrl(filePath, 1, 'put');
    console.log(url);
    return {url};
  }
}
