#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwscdkCicdPipelineStack } from '../lib/awscdk-cicd-pipeline-stack';

const app = new cdk.App();
new AwscdkCicdPipelineStack(app, 'AwscdkCicdPipelineStack', {
  env:{
    account: '277819333518',
    region: 'us-east-1'
  }
});

app.synth();