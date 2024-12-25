// import {
//   S3Client,
//   PutObjectCommand,
// } from "@aws-sdk/client-s3";
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
// import dotenv from "dotenv";
// dotenv.config();

// const s3 = new S3Client({
//   region: process.env.AWS_REGION,
//   credentials: {
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_KEY,
//   },
// });

// export async function putBannerImage(userId: String, file: File): Promise<string> {
//   const command = new PutObjectCommand({
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: `banner/${userId}/banner.jpg`,
//     ContentType: 'image/jpeg',
//   });

//   const commandUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
//   return commandUrl;
// }



// export async function putPostImage(postId: String, userId: String, file: File): Promise<string> {
//   const command = new PutObjectCommand({
//     Bucket: process.env.AWS_BUCKET_NAME,
//     Key: `post/${userId}/${postId}/post.jpg`,
//     ContentType: 'image/jpeg',
//   });

//   const commandUrl = await getSignedUrl(s3, command, { expiresIn: 3600 });
//   return commandUrl;
// }

// export async function getBannerImage(payload : {userId:string,imageType:string,postImage:boolean,postId:string}): Promise<string> {
//   const commandUrl = `https://${process.env.AWS_BUCKET_NAME}.${process.env.AWS_REGION}.amazonaws.com/${payload.imageType}/${payload.userId}/${payload.postImage ? payload.postId +"/" :''}${payload.imageType}.jpg`;
//   return commandUrl;
// }