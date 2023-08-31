// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    SERVICEID: string;
    TEMPLATEID: string;
    PUBLICKEY: string;
    // Add other environment variables here if needed
  }
}
