import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import BasePipeline from './resources/pipeline/BasePipeline';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';
import EnvironmentHelper from './infrastructure/EnvironmentHelper';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BasePipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    const pipeline = new CodePipeline(this, EnvironmentHelper.PIPELINE_NAME, {
      pipelineName: EnvironmentHelper.PIPELINE_NAME,
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.connection(`${EnvironmentHelper.GITHUB_USERNAME}/${EnvironmentHelper.GITHUB_REPO}`,`${EnvironmentHelper.GITHUB_BRANCH}`,{
          connectionArn: `${EnvironmentHelper.CONNECTION_ARN}`,
          actionName:'SourceGithub',
          triggerOnPush: true
        }),
        installCommands: [
          'node --version',
          'npm --version',
          'npm install'
        ],
        commands: [
          'npm run build',
          'npm run cdk synth -- -o dist',
          'npm run cdk bootstrap',
          'npm run cdk diff -- --require-approval never',
          'npm run cdk deploy -- --require-approval never',
        ]
      })
    });
    // The code that defines your stack goes here
    // const basePipeline = new BasePipeline(this, 'MainPipeline', { 
    //   pipelineName: 'MainPipeline',
    //   pipelineVersion: '1.0.0',
    // });
    // basePipeline.execute();
    // example resource
    // const queue = new sqs.Queue(this, 'BasePipelineQueue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
    // const pipeline = new Pipeline(this, 'MyPipeline', {
    //   pipelineName: 'MomentsPipeline',
    // });
    


    // // Agregar etapa de origen (Source)
    // const sourceStage = pipeline.addStage({
    //   stageName: 'Source',
    // });
    
    // // Agregar acción de origen (Source action)
    // sourceStage.addAction(
    //   new GitHubSourceAction(
    //     {
    //       output: new Artifact(),
    //       branch: 'main',
    //       owner: 'username',
    //       repo: 'repository',
    //       actionName: 'GitHub_Source',
    //       oauthToken: SecretValue.secretsManager('github-token'),
    //     }
    //   )
    // );

    // actionName: 'GitHub_Source',
    //   owner: 'username',
    //   repo: 'repository',
    //   branch: 'main',
    //   oauthToken: cdk.SecretValue.secretsManager('github-token'),
    

    
    // Agregar otras etapas y acciones según sea necesario
    // Agregar otras etapas y acciones según sea necesario
  }
}
