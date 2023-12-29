export default class EnvironmentHelper {
  static NAME = process.env.NAME || 'Moments';
  static STACK_NAME = process.env.STACK_NAME || `${this.NAME}PipelineStack`;
  static PIPELINE_NAME = process.env.PIPELINE_NAME || `${this.NAME}Pipeline`;
  static GITHUB_USERNAME = process.env.GITHUB_USERNAME || `firepho92`;
  static GITHUB_REPO = process.env.GITHUB_REPO || `${this.NAME}Pipeline`;
  static GITHUB_BRANCH = process.env.GITHUB_BRANCH || `dev`;
  static CONNECTION_ARN = process.env.CONNECTION_ARN || `arn:aws:codestar-connections:us-east-1:058632605534:connection/2d99428e-d740-40cb-9f88-ec8fd959dcf2`;
}