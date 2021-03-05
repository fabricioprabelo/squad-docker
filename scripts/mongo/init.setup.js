let res = [
  db.squad.drop(),
  db.createUser({
    user: "squad",
    pwd: "a1s2d3f4m0n9b8v7",
    roles: [{ role: "readWrite", db: "squad" }],
  }),
];

printjson(res);
