import { Construct } from 'constructs';
import { SecretValue } from 'aws-cdk-lib';
import { CodeStarConnectionsSourceAction, GitHubSourceAction } from 'aws-cdk-lib/aws-codepipeline-actions';
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
      new CodeStarConnectionsSourceAction(
        {
          output: new Artifact(),
          branch: 'main',
          owner: 'firepho92',
          repo: 'BasePipeline',
          actionName: 'GitHub_Source',
          connectionArn: 'arn:aws:codestar-connections:us-east-1:058632605534:connection/2d99428e-d740-40cb-9f88-ec8fd959dcf2'
        }
      )
    );
  }
}