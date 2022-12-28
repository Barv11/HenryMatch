export const calculateCommonInterests = (userA, userB) => {
  let commonInterests = 0;

  userA.interests.forEach((interestA) => {
    userB.interests.forEach((interestB) => {
      if (interestA.questions === interestB.questions) {
        interestA.answers.forEach((answerA) => {
          if (interestB.answers.includes(answerA)) {
            commonInterests++;
          }
        });
      }
    });
  });

  return commonInterests;
};
