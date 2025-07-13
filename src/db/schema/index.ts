import { audioChunks } from "./audio-chunks.ts";
import { account, session, user, verification } from "./auth.ts";
import { questions } from "./questions.ts";
import { rooms } from "./rooms.ts";

export const schema = {
  rooms,
  questions,
  audioChunks,
  user,
  session,
  account,
  verification,
};
