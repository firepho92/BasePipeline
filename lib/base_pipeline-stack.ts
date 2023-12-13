import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import BasePipeline from './resources/pipeline/BasePipeline';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class BasePipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const basePipeline = new BasePipeline(this, 'MainPipeline', { pipelineName: 'MainPipeline' });
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
