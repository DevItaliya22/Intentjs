import { configNamespace, StorageOptions } from '@intentjs/core';
import { fromIni } from '@aws-sdk/credential-providers';

export default configNamespace(
  'filesystem',
  (): StorageOptions => {
    console.log(process.env.AWS_S3_DOCS_BUCKET); // For debugging

    return {
      default: process.env.DEFAULT_STORAGE || 'local',
      disks: {
        local: {
          driver: 'local',
          basePath: 'storage/uploads',
        },
        s3: {
          driver: 's3',
          bucket: process.env.AWS_S3_DOCS_BUCKET,
          accessKey: process.env.AWS_KEY,
          secretKey: process.env.AWS_SECRET,
          region: process.env.AWS_REGION,
          // credentials: fromIni({ profile: process.env.AWS_PROFILE }),
        },
      },
    } as StorageOptions;
  }
);
