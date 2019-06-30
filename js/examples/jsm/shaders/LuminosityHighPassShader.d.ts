import {
  Uniform
} from '../../../src/Three';

export interface LuminosityHighPassShader {
  shaderID: string;
  uniforms: {
    tDiffuse: Uniform;
    luminosityThreshold: Uniform;
    smoothWidth: Uniform;
    defaultColor: Uniform;
    defaultOpacity: Uniform;
  };
  vertexShader: string;
  fragmentShader: string;
}
