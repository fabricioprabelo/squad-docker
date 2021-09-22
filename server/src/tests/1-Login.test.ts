import fs from "fs";
import request from "supertest";
import { app, connection } from "../app";
import { expect, filepath } from "./variables";

describe("Login", () => {
  before(async () => {
    await connection(false);
  });

  it("Should be able to login", (done) => {
     request(app)
      .post("/graphql")
      .send({
        query: `
          query login($email: String!, $password: String!, $remember: Boolean){
            login(email: $email, password: $password, remember: $remember) {
              token
            }
          }
        `,
        variables: {
          email: "contato@fabricioprabelo.com.br",
          password: "123456",
          remember: false
        }
      })
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body.data.login).to.have.property('token');
        fs.writeFileSync(filepath, res.body.data.login.token, { flag: 'w+' });
        done();
      });
    });
})
