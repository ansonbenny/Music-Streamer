import { Router } from "express";
import user from "../helper/user.js";
import { sendMail } from "../helper/mail.js";
import axios from "axios";
import jwt from "jsonwebtoken";

let router = Router();

const CheckLogged = (req, res, next) => {
  const { token = null } = req.cookies;
  jwt.verify(token, process.env.JWT_SECRET, async (err, decode) => {
    if (decode?._id?.length === 24) {
      try {
        let userData = await user.get_user(decode?._id);

        if (userData) {
          res.status(208).json({
            status: 208,
            message: "Already Logged",
            data: userData,
          });
        }
      } catch (err) {
        console.log(err);
        res.clearCookie("token");
        next();
      }
    } else if (err) {
      console.log(`Error : ${err?.name}`);
      res.clearCookie("token");
      next();
    } else {
      res.clearCookie("token");
      next();
    }
  });
};

router.get("/checkLogged", CheckLogged, (req, res) => {
  res.status(405).json({
    status: 405,
    message: "User not logged",
  });
});

router.post("/register", CheckLogged, async (req, res) => {
  let { name, email, password, rePassword, google } = req.body;
  if (password?.length >= 8 && password === rePassword) {
    if (google) {
      let response;
      try {
        let googleCheck = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${google}`,
            },
          }
        );

        if (googleCheck?.data?.email && googleCheck?.data?.email === email) {
          response = await user.register_direct({ name, email, password });
        } else {
          res.status(500).json({
            status: 500,
            message: "Something Wrong",
          });
        }
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
        if (response) {
          res.status(200).json({
            status: 200,
            google: true,
            message: "Successfully Registered",
          });
        }
      }
    } else {
      if (email) {
        email = email.toLowerCase();

        let secret = Math.random()?.toString(16)?.replace("0.", "");

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
          message: "Enter email",
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
});

router.post("/register-complete", CheckLogged, async (req, res) => {
  const { id, secret } = req.body;

  if (id?.length === 24 && secret) {
    let response;
    try {
      response = await user.register_complete(id, secret);
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
      if (response) {
        res.status(200).json({
          status: 200,
          message: "Register Completed",
        });
      }
    }
  } else {
    res.status(422).json({
      status: 422,
      message: "Wrong Verification Details",
    });
  }
});

router.post("/forgot", CheckLogged, async (req, res) => {
  let { email, password, rePassword } = req.body;
  if (email) {
    if (password?.length >= 8 && password === rePassword) {
      email = email.toLowerCase();
      let secret = Math.random()?.toString(16)?.replace("0.", "");

      let response;

      try {
        response = await user.forgot_request({
          email: `${email}_forgot`,
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
              subject: `Musicon Password Forgot Verification`,
              html: `You can complete password forgot by clicking below link  <a href="${process.env.SITE_URL}/forgot/pending/${response._id}/${secret}" >Click</a>`,
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
            message: "Forgot Request Sented",
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
});

router.put("/forgot-complete", CheckLogged, async (req, res) => {
  const { id, secret } = req.body;
  if (id?.length === 24 && secret) {
    let response;
    try {
      response = await user.forgot_complete(id, secret);
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
      if (response) {
        res.status(200).json({
          status: 200,
          message: "Success",
        });
      }
    }
  } else {
    res.status(422).json({
      status: 422,
      message: "Wrong Verification Details",
    });
  }
});

router.get("/login", CheckLogged, async (req, res) => {
  let { email, password, google } = req.query;

  if (google) {
    let response;
    try {
      let googleCheck = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${google}`,
          },
        }
      );

      if (googleCheck?.data?.email) {
        response = await user.getUserByEmail(googleCheck.data.email);
      } else {
        res.status(500).json({
          status: 500,
          message: "Something Wrong",
        });
      }
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
      if (response) {
        if (response) {
          let token = jwt.sign(
            {
              _id: response._id,
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
              data: response,
            });
        }
      }
    }
  } else {
    if (email && password?.length >= 8) {
      email = email.toLowerCase();

      let response;

      try {
        response = await user.login_manual(email, password);
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
        if (response) {
          let token = jwt.sign(
            {
              _id: response._id,
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
              data: response,
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

router.get("/logout", (req, res) => {
  res.clearCookie("token").status(200).json({
    status: 200,
    message: "LogOut",
  });
});

export default router;
