import { Construct } from 'constructs';
import { CodeBuildAction, CodeStarConnectionsSourceAction } from 'aws-cdk-lib/aws-codepipeline-actions';
import { Artifact, Pipeline, PipelineProps } from 'aws-cdk-lib/aws-codepipeline';
import { PipelineProject } from 'aws-cdk-lib/aws-codebuild';
import EnvironmentHelper from '../../infrastructure/EnvironmentHelper';
import { Role } from 'aws-cdk-lib/aws-iam';

export default class MomentsPipeline extends Pipeline {
  constructor(scope: Construct, id: string, props: PipelineProps) {
    super(scope, id, props);
  }

  execute() {
    const sourceOutput = new Artifact();
    const cdkOutput = new Artifact();
    // Agregar etapa de origen (Source)
    // const sourceStage = this.addStage({
    //   stageName: 'Source',
    //   _assemblyBuilder: new CloudAssemblyBuilder,
    //   policyValidationBeta1: [],
    //   outdir: '',
    //   assetOutdir: '',
    //   artifactId: '',
    //   synth: function (options?: StageSynthesisOptions | undefined): CloudAssembly {
    //     throw new Error('Function not implemented.');
    //   },
    //   createBuilder: undefined,
    //   node: new Node
    // });
    const sourceStage = this.addStage({
      stageName: 'Source',
    });

    // Agregar acción de origen (Source action)
    sourceStage.addAction(
      new CodeStarConnectionsSourceAction(
        {
          output: sourceOutput,
          branch: EnvironmentHelper.GITHUB_BRANCH,
          owner: EnvironmentHelper.GITHUB_USERNAME,
          repo: EnvironmentHelper.GITHUB_REPO,
          actionName: 'GitHub_Source',
          connectionArn: 'arn:aws:codestar-connections:us-east-1:058632605534:connection/2d99428e-d740-40cb-9f88-ec8fd959dcf2'
        }
      )
    );
    
    const role = Role.fromRoleArn(this, 'Role', 'arn:aws:iam::058632605534:role/service-role/AWSCodePipelineServiceRole-us-east-1-MomentsPipeline');

    const buildStage = this.addStage({
      stageName: 'Build',
    });

    buildStage.addAction(
      new CodeBuildAction(
        {
          actionName: 'CDK_Build',
          project: new PipelineProject(this, 'CdkBuildProject'),
          input: sourceOutput,
          outputs: [cdkOutput],
          role
        }
      )
    );
  }
}