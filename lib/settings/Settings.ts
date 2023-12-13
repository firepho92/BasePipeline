import BasePipelineSettings from "../resources/pipeline/BasePipelineSettings";

export default class ExportDefualtHelper {
  static STAGE: string = process.env.STAGE ?? 'local';
  static REGION: string = process.env.REGION ?? 'us-east-1';
  static BASE_PIPELINE_SETTINGS: BasePipelineSettings = BasePipelineSettings;
}