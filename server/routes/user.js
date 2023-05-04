import { Router } from "express";
import user from "../helper/user.js";
import { sendMail } from "../helper/mail.js";

let router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password, rePassword, google } = req.body;
  if (google) {
  } else {
    if (email) {
      if (password?.length >= 8 && password === rePassword) {
        let secret = Math.random().toString(16);

        let response = null;

        try {
          response = await user.register_request({
            name,
            email,
            password,
            secret,
          });
        } catch (err) {
          if (err?.status === 422) {
            res.status(422).json(err);
          } else {
            res.status(500).json({
              status: 500,
              message: err,
            });
          }
        } finally {
          if (response?._id) {
            sendMail(
              {
                to: email,
                subject: `Musicon Register Verification`,
                text: `You can complete register by clicking below link  <a href="${process.env.SITE_URL}/register/pending/${response._id}/${secret}" >Click</a>`,
              },
              (err, done) => {
                if (err) {
                  console.log(err);
                } else {
                  console.log(`Email sent: ${done.response}`);
                }
              }
            );

            res.status(200).json({
              status: 200,
              message: "Register Request Sented",
            });
          }
        }
      } else {
        res.status(422).json({
          status: 422,
          message:
            "Password length must contain 8 and password and Re Enter password must same",
        });
      }
    } else {
      res.status(422).json({
        status: 422,
        message: "Enter email",
      });
    }
  }
});

export default router;
