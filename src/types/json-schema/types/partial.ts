export type PartialModeWrapper<S, PartialMode extends boolean> = true extends PartialMode
  ? Partial<S>
  : S;
