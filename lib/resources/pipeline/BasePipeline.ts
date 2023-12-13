import { Construct } from 'constructs';
import { SecretValue } from 'aws-cdk-lib';
import { GitHubSourceAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { Artifact, Pipeline, PipelineProps } from 'aws-cdk-lib/aws-codepipeline';

export default class BasePipeline extends Pipeline {
  constructor(scope: Construct, id: string, props?: PipelineProps) {
    super(scope, id, props);
  }

  execute() {
    // Agregar etapa de origen (Source)
    const sourceStage = this.addStage({
      stageName: 'Source',
    });
    
    // Agregar acción de origen (Source action)
    sourceStage.addAction(
      new GitHubSourceAction(
        {
          output: new Artifact(),
          branch: 'main',
          owner: 'firepho92',
          repo: 'BasePipeline',
          actionName: 'GitHub_Source',
          oauthToken: SecretValue.secretsManager('base-pipeline-token'),
        }
      )
    );
  }
}