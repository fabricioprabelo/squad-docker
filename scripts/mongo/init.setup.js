let res = [
  db.squad.drop(),
  db.createUser({
    user: "squad",
    pwd: "jxIgWczIREWQmgkzWAmsy26JJKuNLVnw",
    roles: [{ role: "readWrite", db: "squad" }],
  }),
];

printjson(res);
