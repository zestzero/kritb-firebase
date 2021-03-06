import { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from "services/cookieService";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  setCookie(res, "kritb", "TOKEN");
  res.end(res.getHeader("Set-Cookie"));
};

export default handler;
