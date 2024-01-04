import PipelineSettings from "../resources/pipeline/PipelineSettings";

export default class ExportDefaultHelper {
  static STAGE: string = process.env.STAGE ?? 'local';
  static REGION: string = process.env.REGION ?? 'us-east-1';
  static BASE_PIPELINE_SETTINGS: PipelineSettings = PipelineSettings;
}