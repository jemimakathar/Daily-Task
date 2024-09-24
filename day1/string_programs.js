var skills = [];
skills[0] = "computer";
skills[1] = "science";
skills[2] = "and";
skills[3] = "Engineering";
skills.push("department");
skills.splice(4, 0, "technology"); //0 is represent the previous value.
console.log(skills);
console.log(typeof (skills[0]));
console.log(skills[0].length);
