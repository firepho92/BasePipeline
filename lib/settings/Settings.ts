import MainPipelineSettings from "../resources/pipeline/MainPipelineSettings";

export default class ExportDefaultHelper {
  static STAGE: string = process.env.STAGE ?? 'local';
  static REGION: string = process.env.REGION ?? 'us-east-1';
  static BASE_PIPELINE_SETTINGS: MainPipelineSettings = MainPipelineSettings;
}