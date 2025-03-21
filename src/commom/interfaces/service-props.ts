export interface ServiceProps<params, errors, response> {
  execute: (params: params) => Promise<
    | {
        status: 'SUCCESS';
        data: response;
      }
    | {
        status: 'ERROR';
        error: errors;
      }
  >;
}
