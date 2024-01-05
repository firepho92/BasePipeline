import { Construct } from 'constructs';
import { Stack, StackProps } from 'aws-cdk-lib';
import MainPipeline from './resources/pipeline/MainPipeline';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MainPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // const role = Role.fromRoleArn(this, 'Role', 'arn:aws:iam::058632605534:role/service-role/codebuild-BasePipeline-service-role');

    // const pipeline = new CodePipeline(this, `Main-Pipeline`, {
    //   // role,
    //   pipelineName: `Main-Pipeline`,
    //   synth: new ShellStep('Synth', {
    //       input: CodePipelineSource.connection(`firepho92/BasePipeline`,`dev`,{
    //         connectionArn: 'arn:aws:codestar-connections:us-east-1:058632605534:connection/2d99428e-d740-40cb-9f88-ec8fd959dcf2',
    //         actionName:'SourceGithub',
    //         triggerOnPush: true,
    //       }),
    //       installCommands: [
    //         'yarn --version',
    //         'node --version',
    //         'npm --version',
    //         'npm install'
    //       ],
    //       commands: [
    //         // 'npm ci',
    //         // 'npm run build',
    //         // 'npx cdk synth',
    //         'npm run build',
    //         'npm run cdk synth -- -o dist',
    //         'npm run cdk bootstrap',
    //         'npm run cdk diff -- --require-approval never',
    //         'npm run cdk deploy -- --require-approval never',
    //       ],
    //       env: {
    //         STACK_NAME: `Main-Stack`,
    //         PIPELINE_NAME: `Main-Pipeline`,
    //         GITHUB_USERNAME: `firepho92`,
    //         GITHUB_REPO: `BasePipeline`,
    //         GITHUB_BRANCH: `dev`,
    //         CONNECTION_ARN: `arn:aws:codestar-connections:us-east-1:058632605534:connection/2d99428e-d740-40cb-9f88-ec8fd959dcf2`,
    //       }
    //   })
    // });
    // The code that defines your stack goes here
    const basePipeline = new MainPipeline(this, 'MainPipeline', { 
      pipelineName: 'MainPipeline',
    });
    basePipeline.execute();
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
