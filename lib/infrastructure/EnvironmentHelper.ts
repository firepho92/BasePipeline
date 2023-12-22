export default class EnvironmentHelper {
  static STACK_NAME = process.env.STACK_NAME || 'BasePipelineStack';
  static PIPELINE_NAME = process.env.PIPELINE_NAME || 'BasePipeline';
  static GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'firepho92';
  static GITHUB_REPO = process.env.GITHUB_REPO || 'BasePipeline';
  static GITHUB_BRANCH = process.env.GITHUB_BRANCH || 'main';
  static CONNECTION_ARN = process.env.CONNECTION_ARN || 'arn:aws:codestar-connections:us-east-1:058632605534:connection/2d99428e-d740-40cb-9f88-ec8fd959dcf2';
}