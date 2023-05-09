import { Router } from "express";
import user from "../helper/user.js";
import { sendMail } from "../helper/mail.js";
import jwt from "jsonwebtoken";

let router = Router();

router.post("/register", async (req, res) => {
  let { name, email, password, rePassword, google } = req.body;
  if (google) {
  } else {
    if (email) {
      if (password?.length >= 8 && password === rePassword) {
        email = email.toLowerCase();

        let secret = Math.random().toString(16);

        let response;

        try {
          response = await user.register_request({
            name,
            email: `${email}_register`,
            password,
            secret,
          });
        } catch (err) {
          if (err?.status) {
            res.status(err.status).json(err);
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
                html: `You can complete register by clicking below link  <a href="${process.env.SITE_URL}/register/pending/${response._id}/${secret}" >Click</a>`,
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

router.get("/login", async (req, res) => {
  const { email, password, google } = req.query;
  if (google) {
  } else {
    if (email && password?.length >= 8) {
      let response;

      try {
        response = await user.login_manual(email, password);
      } catch (err) {
        if (err?.status) {
          res.status(err.status).json(err);
        } else {
          res.status(500).json(err);
        }
      } finally {
        if (response) {
          let token = jwt.sign(
            {
              ...response,
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "24h",
            }
          );

          res
            .status(200)
            .cookie("token", token, {
              httpOnly: true,
              expires: new Date(Date.now() + 86400000),
            })
            .json({
              status: 200,
              message: "Success",
            });
        }
      }
    } else {
      res.status(422).json({
        status: 422,
        message: "Email or Password Wrong",
      });
    }
  }
});

export default router;
